import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type Params = {
  params: { type: string };
};

export async function POST(req: NextRequest, { params }: Params) {
  try {
    const body = await req.json();
    const { responses, totalScore, questionCount } = body;

    console.log(body);

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as any;
    const userId = decoded.userId;

    if (!userId || !responses || totalScore === undefined) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission = await prisma.assessmentSubmission.create({
      data: {
        assessmentType: params.type,
        userId,
        responses,
        totalScore,
        questionCount,
      },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error("Error saving assessment:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save assessment" },
      { status: 500 }
    );
  }
}
