"use client";

export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Mental Health Support",
      description:
        "Chat with our intelligent AI counselor for immediate support, coping strategies, and mental health guidance available 24/7.",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: "📅",
      title: "Professional Counseling",
      description:
        "Book appointments with qualified mental health professionals and psychiatrists for personalized care.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "📋",
      title: "Self Assessment Tools",
      description:
        "Take standardized assessments like PHQ-9, GAD-7, and wellness scales to track your mental health journey.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "📚",
      title: "Resource Hub",
      description:
        "Access curated psychoeducational content, videos, and guides in multiple languages for better understanding.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "👥",
      title: "Peer Support Community",
      description:
        "Connect with fellow students in a safe, moderated environment to share experiences and support each other.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "📊",
      title: "Progress Dashboard",
      description:
        "Monitor your mental health journey with comprehensive analytics, mood tracking, and progress reports.",
      gradient: "from-slate-500 to-gray-500",
    },
  ];

  return (
    <section id='features' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-4'>
            Comprehensive Mental Health{" "}
            <span className='bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent'>
              Support System
            </span>
          </h2>
          <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
            Everything you need for your mental wellness journey, from
            AI-powered support to professional counseling, all in one secure and
            confidential platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className='text-xl font-semibold text-slate-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-100'>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>
              Ready to Start Your Mental Health Journey?
            </h3>
            <p className='text-slate-600 mb-6 max-w-2xl mx-auto'>
              Join thousands of students who have found support, guidance, and
              community through MindBridge. Take the first step towards better
              mental health today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all'>
                Get Started Free
              </button>
              <button className='border-2 border-indigo-300 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all'>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
