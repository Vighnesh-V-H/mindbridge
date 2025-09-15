"use client";

export default function Assessment() {
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
            },
            {
              title: "GAD-7 Anxiety Scale",
              desc: "7-item scale to measure anxiety symptoms",
              time: "5 minutes",
            },
            {
              title: "Perceived Stress Scale",
              desc: "10-item scale to evaluate stress levels",
              time: "5 minutes",
            },
            {
              title: "Wellness Assessment",
              desc: "Comprehensive assessment of your overall wellness",
              time: "10 minutes",
            },
          ].map((a, idx) => (
            <div
              key={idx}
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
        <div className='space-y-4 text-slate-600'>
          <div className='bg-slate-50 p-4 rounded-xl'>
            <strong>PHQ-9 Depression Scale</strong> <br />
            📅 Completed on December 10, 2024 <br />
            📊 Score: 12 (Moderate Depression) <br />
            <button className='bg-slate-500 text-white px-4 py-2 rounded-lg mt-2'>
              View Details
            </button>
          </div>
          <div className='bg-slate-50 p-4 rounded-xl'>
            <strong>GAD-7 Anxiety Scale</strong> <br />
            📅 Completed on December 5, 2024 <br />
            📊 Score: 8 (Mild Anxiety) <br />
            <button className='bg-slate-500 text-white px-4 py-2 rounded-lg mt-2'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
