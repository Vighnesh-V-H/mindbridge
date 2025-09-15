"use client";

import { useState, useEffect } from "react";

interface Appointment {
  id: string;
  counselor: string;
  type: string;
  date: string;
  time: string;
  reason?: string;
}

export default function Appointments() {
  const [formData, setFormData] = useState({
    counselor: "",
    type: "",
    date: "",
    time: "",
    reason: "",
  });
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch appointments on mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointments");
      if (!res.ok) throw new Error("Failed to fetch appointments");
      const data = await res.json();
      setAppointments(data.appointments || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent selecting past date
    const today = new Date().toISOString().split("T")[0];
    if (formData.date && formData.date < today) {
      alert("You cannot select a past date.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // no userId needed
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert("Appointment booked!");
        setFormData({
          counselor: "",
          type: "",
          date: "",
          time: "",
          reason: "",
        });
        fetchAppointments(); // refresh list
      } else {
        alert(data.message || "Failed to book appointment.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='animate-fadeIn'>
      <div className='bg-white/95 text-black backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Book Counseling Appointment
        </h1>
        <p className='text-slate-500'>
          Schedule a confidential session with our qualified counselors
        </p>
      </div>

      {/* Form */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Schedule New Appointment
        </h3>
        <form onSubmit={handleSubmit} className='grid gap-6 sm:grid-cols-2'>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Preferred Counselor
            </label>
            <select
              name='counselor'
              value={formData.counselor}
              onChange={handleChange}
              className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option value=''>Select a counselor</option>
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
            <select
              name='type'
              value={formData.type}
              onChange={handleChange}
              className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option value=''>Select type</option>
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
              name='date'
              value={formData.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              className='w-full border-2 text-black rounded-lg px-3 py-2'
            />
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Preferred Time
            </label>
            <select
              name='time'
              value={formData.time}
              onChange={handleChange}
              className='w-full text-black border-2 rounded-lg px-3 py-2'>
              <option value=''>Select time</option>
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
            <textarea
              name='reason'
              value={formData.reason}
              onChange={handleChange}
              className='w-full text-black border-2 rounded-lg px-3 py-2 min-h-[100px]'
            />
          </div>
          <div className='sm:col-span-2'>
            <button
              type='submit'
              disabled={loading}
              className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow disabled:opacity-50'>
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>

      {/* Appointments List */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Your Upcoming Appointments
        </h3>
        <div className='space-y-4 text-slate-600'>
          {appointments.length === 0 && (
            <p className='text-slate-500'>No appointments booked yet.</p>
          )}
          {appointments.map((appt) => (
            <div key={appt.id} className='bg-slate-50 p-4 rounded-xl'>
              <strong>{appt.counselor}</strong> - {appt.type} <br />
              📅 {new Date(appt.date).toDateString()} at {appt.time} <br />
              📍 Counseling Center <br />
              {appt.reason && <span>📝 {appt.reason}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
