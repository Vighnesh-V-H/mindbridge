"use client";

import { useState } from "react";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function AiSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hello! I'm here to support you. How are you feeling today? Remember, everything we discuss is completely confidential.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.success && data.reply) {
        const aiMessage: Message = { role: "ai", content: data.reply };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: "⚠️ Sorry, I couldn’t process your request." },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Network error. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='animate-fadeIn'>
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          AI Mental Health Support
        </h1>
        <p className='text-slate-500'>
          Chat with our AI counselor for immediate support and coping strategies
        </p>
      </div>

      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-0 overflow-hidden mb-8 shadow-lg'>
        <div className='h-[500px] flex flex-col border border-slate-200 rounded-xl overflow-hidden'>
          <div className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-4 font-semibold'>
            🤖 MindBridge AI Counselor - Available 24/7
          </div>
          <div className='flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`p-3 rounded-xl shadow max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-black"
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className='flex'>
                <div className='bg-white text-black p-3 rounded-xl shadow max-w-[70%] italic'>
                  Typing...
                </div>
              </div>
            )}
          </div>
          <div className='flex items-center gap-2 p-4 bg-white border-t'>
            <input
              type='text'
              placeholder='Type your message here...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className='flex-1 text-black px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none'
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white px-4 py-2 rounded-lg shadow font-semibold disabled:opacity-50'>
              Send
            </button>
          </div>
        </div>
      </div>

      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-4'>
          Quick Support Options
        </h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            "I'm feeling anxious",
            "Exam stress",
            "Feeling lonely",
            "Need coping strategies",
          ].map((txt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInput(txt);
                sendMessage();
              }}
              className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white py-3 px-4 rounded-lg font-semibold shadow hover:shadow-lg transition'>
              {txt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
