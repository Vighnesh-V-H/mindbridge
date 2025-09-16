"use client";

import { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";
import Admin from "@/components/admin";

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function getAuth() {
      const cookies = document.cookie.split("; ").reduce((acc, current) => {
        const [name, value] = current.split("=");
        acc[name] = value;
        return acc;
      }, {} as Record<string, string>);

      const authToken = cookies["auth_token"];
      console.log(authToken);
      if (authToken) {
        try {
          const decoded = jwtDecode(authToken);
          // @ts-expect-error decoded has role
          setRole(decoded.role || null);
        } catch (err) {
          console.error("Failed to decode auth_token:", err);
        }
      }
    }

    getAuth();
  }, []);

  if (role === "ADMIN") {
    return <Admin />;
  }

  // Normal user dashboard
  return (
    <section className='animate-fadeIn'>
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Welcome to MindBridge
        </h1>
        <p className='text-black'>
          Your comprehensive digital mental health support system
        </p>
      </div>

      <div className='bg-gradient-to-tr from-red-500 to-red-700 text-white p-4 rounded-lg text-center mb-8'>
        <div className='font-semibold mb-1'>🚨 In case of emergency, call:</div>
        <div className='text-lg font-bold'>
          National Helpline: 1800-599-0019
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        {[
          {
            icon: "💬",
            title: "Talk to AI Counselor",
            desc: "Get immediate support",
          },
          {
            icon: "🏥",
            title: "Book Appointment",
            desc: "Schedule with counselor",
          },
          {
            icon: "📝",
            title: "Take Assessment",
            desc: "Evaluate your wellbeing",
          },
          { icon: "🤝", title: "Join Community", desc: "Connect with peers" },
        ].map((item, idx) => (
          <div
            key={idx}
            className='bg-white p-6 rounded-xl text-center shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-lg transition'>
            <div className='text-3xl text-indigo-600 mb-2'>{item.icon}</div>
            <h3 className='font-semibold text-black mb-1'>{item.title}</h3>
            <p className='text-black text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h2 className='text-xl font-bold text-slate-900 mb-4'>
          Recent Activity
        </h2>
        <div className='text-slate-500 space-y-2'>
          <p>• Last assessment: PHQ-9 completed 3 days ago</p>
          <p>• Upcoming appointment: Dr. Sharma on Dec 15, 2024</p>
          <p>• New resource available: "Managing Exam Stress"</p>
          <p>• Community post replied to: "Dealing with homesickness"</p>
        </div>
      </div>
    </section>
  );
}
