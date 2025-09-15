"use client";

export default function Appointments() {
  return (
    <section className='animate-fadeIn'>
      {/* Header */}
      <div className='bg-white/95 text-black backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Book Counseling Appointment
        </h1>
        <p className='text-slate-500'>
          Schedule a confidential session with our qualified counselors
        </p>
      </div>

      {/* New Appointment Form */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Schedule New Appointment
        </h3>
        <form className='grid gap-6 sm:grid-cols-2'>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Preferred Counselor
            </label>
            <select className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option>Select a counselor</option>
              <option>Dr. Priya Sharma - Clinical Psychologist</option>
              <option>Dr. Raj Kumar - Psychiatrist</option>
              <option>Dr. Meera Patel - Counseling Psychologist</option>
              <option>Anonymous Session</option>
            </select>
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Appointment Type
            </label>
            <select className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option>Select type</option>
              <option>Individual Counseling</option>
              <option>Group Therapy</option>
              <option>Emergency Consultation</option>
              <option>Follow-up Session</option>
            </select>
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Preferred Date
            </label>
            <input
              type='date'
              className='w-full border-2 text-black rounded-lg px-3 py-2'
            />
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Preferred Time
            </label>
            <select className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option>Select time</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
            </select>
          </div>
          <div className='sm:col-span-2'>
            <label className='block text-black font-semibold mb-2'>
              Reason for Visit (Optional)
            </label>
            <textarea className='w-full text-black border-2 rounded-lg px-3 py-2 min-h-[100px]' />
          </div>
          <div className='sm:col-span-2'>
            <button className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow'>
              Book Appointment
            </button>
          </div>
        </form>
      </div>

      {/* Upcoming Appointments */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Your Upcoming Appointments
        </h3>
        <div className='space-y-4 text-slate-600'>
          <div className='bg-slate-50 p-4 rounded-xl'>
            <strong>Dr. Priya Sharma</strong> - Individual Counseling <br />
            📅 December 15, 2024 at 2:00 PM <br />
            📍 Room 205, Counseling Center <br />
            <button className='bg-slate-500 text-white px-4 py-2 rounded-lg mt-2'>
              Reschedule
            </button>
          </div>
          <div className='bg-slate-50 p-4 rounded-xl'>
            <strong>Anonymous Session</strong> - Follow-up <br />
            📅 December 18, 2024 at 11:00 AM <br />
            📍 Virtual Meeting <br />
            <button className='bg-slate-500 text-white px-4 py-2 rounded-lg mt-2'>
              Join Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
