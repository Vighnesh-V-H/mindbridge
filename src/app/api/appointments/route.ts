import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as any;
    const userId = decoded.userId;
    const body = await req.json();
    const { counselor, type, date, time, reason } = body;

    const appointment = await prisma.appointment.create({
      data: {
        userId,
        counselor,
        type,
        date: new Date(date),
        time,
        reason,
      },
    });

    return NextResponse.json({ success: true, appointment });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error", details: err.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }


    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as any;
    const userId = decoded.userId;


    const appointments = await prisma.appointment.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    return NextResponse.json({ appointments });
  } catch (err: any) {
    console.error("Fetch appointments error:", err);
    return NextResponse.json(
      { message: "Error fetching appointments", details: err.message },
      { status: 500 }
    );
  }
}
