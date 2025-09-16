import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Decode token and get userId
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as any;
    const userId = decoded.userId;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 400 }
      );
    }

    const submissions = await prisma.assessmentSubmission.findMany({
      where: { userId },
      orderBy: { submittedAt: "desc" },
      select: {
        id: true,
        assessmentType: true,
        totalScore: true,
        questionCount: true,
        submittedAt: true,
      },
    });

    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    console.error("Error fetching assessments:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch assessments" },
      { status: 500 }
    );
  }
}
