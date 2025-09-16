import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",

          messages: [
            {
              role: "system",
              content:
                "You are an AI counselor designed to provide supportive and empathetic conversations in English only. Always reply in clear, simple, and comforting English. Avoid using clinical or potentially triggering terms such as 'mental illness,' 'disorder,' 'diagnosis,' or similar medical jargon. Instead, use gentle, non-judgmental language that focuses on understanding, encouragement, and coping strategies. Your role is not to provide medical advice or professional therapy, but to listen, validate feelings, and suggest positive, healthy approaches such as relaxation, breathing exercises, journaling, or reaching out to trusted people. Keep responses concise but warm, avoid technical buzzwords, and make sure the user feels safe, understood, and supported. Donot use markdowns , use newlines if needed and keep the answer short and up to the point.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "";

    return NextResponse.json({ success: true, reply: content });
  } catch (error) {
    console.error("Error in counselling route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch counselling response" },
      { status: 500 }
    );
  }
}
