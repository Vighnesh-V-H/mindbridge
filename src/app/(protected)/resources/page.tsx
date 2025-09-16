"use client";

export default function Resources() {
  const resources = [
    {
      title: "Stress Management Techniques",
      meta: "Video • 15 mins • Hindi/English",
      desc: "Learn practical techniques to manage daily stress and academic pressure effectively.",
      action: "Watch Now",
      url: "https://youtu.be/qUz93CyNIz0?feature=shared",
    },
    {
      title: "Mindfulness for Students",
      meta: "Video • 20 mins • Bengali/English",
      desc: "Guided meditation and mindfulness exercises designed specifically for college students.",
      action: "Watch Now",
      url: "https://youtu.be/7CBfCW67xT8?feature=shared",
    },
    {
      title: "Understanding Depression",
      meta: "Article • 10 min read • Tamil/English",
      desc: "Comprehensive guide to recognizing symptoms and seeking help for depression.",
      action: "Read Article",
      url: "https://www.nimh.nih.gov/health/topics/depression",
    },
    {
      title: "Anxiety Coping Strategies",
      meta: "Interactive • 25 mins • Multiple Languages",
      desc: "Interactive modules to learn and practice anxiety management techniques.",
      action: "Start Module",
      url: "https://www.beyondblue.org.au/mental-health/anxiety/treatments-for-anxiety/anxiety-management-strategies",
    },
    {
      title: "Sleep Hygiene Guide",
      meta: "PDF Guide • Hindi/English/Gujarati",
      desc: "Essential tips for better sleep quality and establishing healthy sleep patterns.",
      action: "Download",
      url: "https://www.cci.health.wa.gov.au/~/media/CCI/Mental-Health-Professionals/Sleep/Sleep---Information-Sheets/Sleep-Information-Sheet---04---Sleep-Hygiene.pdf",
    },
    {
      title: "Exam Stress Workshop",
      meta: "Live Session • 45 mins • English",
      desc: "Join our weekly live workshop on managing exam-related stress and anxiety.",
      action: "Join Session",
      url: "https://mdeducationalfoundation.org/2024/04/how-to-deal-with-exam-stress-3-workshop-ideas-to-help-students",
    },
  ];

  const handleResourceClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className='animate-fadeIn'>
      {/* Header */}
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          Psychoeducational Resources
        </h1>
        <p className='text-slate-500'>
          Access curated mental health resources in multiple languages
        </p>
      </div>

      {/* Resource Grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {resources.map((res, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition'>
            <div className='bg-gradient-to-tr from-emerald-500 to-emerald-700 text-white p-4'>
              <div className='font-semibold text-lg'>{res.title}</div>
              <div className='text-sm opacity-80'>{res.meta}</div>
            </div>
            <div className='p-4'>
              <p className='text-slate-600 mb-4'>{res.desc}</p>
              <button 
                onClick={() => handleResourceClick(res.url)}
                className={`px-4 py-2 rounded-lg font-semibold shadow transition-all ${
                  res.url 
                    ? 'bg-gradient-to-tr from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!res.url}
              >
                {res.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
