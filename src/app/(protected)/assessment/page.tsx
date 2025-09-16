"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AssessmentSubmission {
  id: string;
  assessmentType: string;
  responses: Record<string, string>;
  totalScore: number;
  questionCount: number;
  submittedAt: string;
}

export default function Assessment() {
  const router = useRouter();
  const [history, setHistory] = useState<AssessmentSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/get-assessments", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          console.error("Failed to fetch assessments");
          return;
        }

        const data = await res.json();
        if (data.success && data.submissions) {
          const sorted = data.submissions.sort(
            (a: AssessmentSubmission, b: AssessmentSubmission) =>
              new Date(b.submittedAt).getTime() -
              new Date(a.submittedAt).getTime()
          );

          setHistory(sorted);
        }
      } catch (err) {
        console.error("Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <section className='animate-fadeIn'>
      {/* Header */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Self Assessment Tools
        </h1>
        <p className='text-slate-500'>
          Evaluate your mental health and track your progress
        </p>
      </div>

      {/* Assessments */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Available Assessments
        </h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              title: "PHQ-9 Depression Scale",
              desc: "9-item questionnaire to assess depression severity",
              time: "5 minutes",
              route: "phq9",
            },
            {
              title: "GAD-7 Anxiety Scale",
              desc: "7-item scale to measure anxiety symptoms",
              time: "5 minutes",
              route: "gad7",
            },
            {
              title: "Perceived Stress Scale",
              desc: "10-item scale to evaluate stress levels",
              time: "5 minutes",
              route: "pss10",
            },
            {
              title: "Wellness Assessment",
              desc: "Comprehensive assessment of your overall wellness",
              time: "10 minutes",
              route: "wellness",
            },
          ].map((a, idx) => (
            <div
              key={idx}
              onClick={() => router.push(`/assessment/${a.route}`)}
              className='bg-gradient-to-tr from-cyan-500 to-cyan-700 text-white p-6 rounded-xl shadow cursor-pointer hover:scale-[1.02] transition'>
              <div className='text-lg font-semibold mb-2'>{a.title}</div>
              <p className='opacity-90 mb-3'>{a.desc}</p>
              <div className='text-sm opacity-80'>{a.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Your Assessment History
        </h3>

        {loading ? (
          <p className='text-slate-500'>Loading...</p>
        ) : history.length === 0 ? (
          <p className='text-slate-500'>No assessments completed yet.</p>
        ) : (
          <div className='space-y-4 text-slate-600'>
            {history.map((h) => (
              <div key={h.id} className='bg-slate-50 p-4 rounded-xl'>
                <strong>{h.assessmentType.toUpperCase()}</strong> <br />
                📅 Completed on{" "}
                {new Date(h.submittedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                <br />
                📊 Score: {h.totalScore} / {h.questionCount * 3} <br />
                <button
                  onClick={() =>
                    router.push(`/assessment/${h.assessmentType}?id=${h.id}`)
                  }
                  className='bg-slate-500 text-white px-4 py-2 rounded-lg mt-2'>
                  Take test again
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
