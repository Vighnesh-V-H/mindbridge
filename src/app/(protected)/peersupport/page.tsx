"use client";

export default function PeerSupport() {
  return (
    <section className='animate-fadeIn'>
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Peer Support Community
        </h1>
        <p className='text-slate-500'>
          Connect with fellow students in a safe, moderated environment
        </p>
      </div>
      =
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Share Your Experience
        </h3>
        <form className='grid gap-6'>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Topic Category
            </label>
            <select className='w-full border-2 text-black rounded-lg px-3 py-2'>
              <option>Select category</option>
              <option>Academic Stress</option>
              <option>Mental Health</option>
              <option>Relationship Issues</option>
              <option>Career Advice</option>
              <option>Anonymous</option>
            </select>
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Post Content
            </label>
            <textarea className='w-full text-black border-2 rounded-lg px-3 py-2 min-h-[100px]' />
          </div>
          <button className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow'>
            Submit Post
          </button>
        </form>
      </div>
      {/* Recent Posts */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Recent Community Posts
        </h3>
        {[
          {
            author: "JohnDoe92",
            time: "2 hours ago",
            content:
              "Struggling with exam stress and feeling overwhelmed. Any advice?",
          },
          {
            author: "JaneSmith88",
            time: "1 day ago",
            content:
              "Just had a great session with Dr. Sharma! Feeling more positive.",
          },
          {
            author: "MentalHealthWarrior",
            time: "3 days ago",
            content:
              "Remember, it's okay to not be okay. Reach out for help if you need it.",
          },
        ].map((post, idx) => (
          <div key={idx} className='bg-white rounded-xl p-4 shadow mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <div className='font-semibold text-indigo-600'>{post.author}</div>
              <div className='text-sm text-slate-500'>{post.time}</div>
            </div>
            <div className='mb-3 text-slate-700'>{post.content}</div>
            <div className='flex gap-4'>
              <button className='text-slate-500 hover:text-indigo-600'>
                💬 Reply
              </button>
              <button className='text-slate-500 hover:text-indigo-600'>
                ❤️ Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
