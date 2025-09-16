"use client";

import { useState } from "react";

export default function PeerSupport() {
  const [posts, setPosts] = useState([
    {
      author: "JohnDoe92",
      time: "2 hours ago",
      content:
        "Struggling with exam stress and feeling overwhelmed. Any advice?",
      tag: "Academic Stress",
    },
    {
      author: "JaneSmith88",
      time: "1 day ago",
      content:
        "Just had a great session with Dr. Sharma! Feeling more positive.",
      tag: "Career Advice",
    },
    {
      author: "MentalHealthWarrior",
      time: "3 days ago",
      content:
        "Remember, it's okay to not be okay. Reach out for help if you need it.",
      tag: "Anonymous",
    },
  ]);

  const [newPost, setNewPost] = useState({
    author: "",
    tag: "",
    content: "",
  });

  const [filterTag, setFilterTag] = useState("All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.author || !newPost.tag || !newPost.content) return;

    setPosts([
      {
        ...newPost,
        time: "Just now",
      },
      ...posts,
    ]);
    setNewPost({ author: "", tag: "", content: "" });
  };

  const filteredPosts =
    filterTag === "All"
      ? posts
      : posts.filter((post) => post.tag === filterTag);

  return (
    <section className='animate-fadeIn'>
      {/* Header */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Peer Support Community
        </h1>
        <p className='text-slate-500'>
          Connect with fellow students in a safe, moderated environment
        </p>
      </div>

      {/* New Post Form */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h3 className='text-indigo-600 font-bold text-lg mb-6'>
          Share Your Experience
        </h3>
        <form className='grid gap-6' onSubmit={handleSubmit}>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Author Name
            </label>
            <input
              type='text'
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
              className='w-full border-2 text-black rounded-lg px-3 py-2'
              placeholder='Enter your name or alias'
            />
          </div>
          <div>
            <label className='block font-semibold text-slate-700 mb-2'>
              Topic Category
            </label>
            <select
              value={newPost.tag}
              onChange={(e) => setNewPost({ ...newPost, tag: e.target.value })}
              className='w-full border-2 text-black rounded-lg px-3 py-2'>
              <option value=''>Select category</option>
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
            <textarea
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
              className='w-full text-black border-2 rounded-lg px-3 py-2 min-h-[100px]'
            />
          </div>
          <button className='bg-gradient-to-tr from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow'>
            Submit Post
          </button>
        </form>
      </div>

      {/* Filter */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-indigo-600 font-bold text-lg'>
            Recent Community Posts
          </h3>
          <select
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className='border-2 text-black rounded-lg px-3 py-2'>
            <option>All</option>
            <option>Academic Stress</option>
            <option>Mental Health</option>
            <option>Relationship Issues</option>
            <option>Career Advice</option>
            <option>Anonymous</option>
          </select>
        </div>

        {/* Posts */}
        {filteredPosts.map((post, idx) => (
          <div key={idx} className='bg-white rounded-xl p-4 shadow mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <div className='font-semibold text-indigo-600'>{post.author}</div>
              <div className='text-sm text-slate-500'>{post.time}</div>
            </div>
            <div className='mb-2 text-sm text-slate-500 italic'>
              #{post.tag}
            </div>
            <div className='mb-3 text-slate-700'>{post.content}</div>
            <div className='flex gap-4'>
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
