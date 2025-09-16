"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-16'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-200 to-violet-200 rounded-full blur-3xl opacity-20 animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 mb-8'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
            <span className='text-sm font-medium text-slate-600'>
              Available 24/7 • Completely Confidential
            </span>
          </div>

          {/* Main Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight'>
            Your Mental Health{" "}
            <span className='bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent'>
              Matters
            </span>
          </h1>

          {/* Subheading */}
          <p className='text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
            MindBridge provides AI-powered mental health support, professional
            counseling, and peer community for students. Get the help you
            deserve, when you need it most.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <Link
              href='/signup'
              className='w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all'>
              Start Your Journey
            </Link>
            <Link
              href='#features'
              className='w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all'>
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>
                24/7
              </div>
              <div className='text-slate-600 font-medium'>
                AI Support Available
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>
                100%
              </div>
              <div className='text-slate-600 font-medium'>
                Confidential & Secure
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>
                5000+
              </div>
              <div className='text-slate-600 font-medium'>Students Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto px-4'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-4 text-center'>
          <div className='text-red-700 font-semibold text-sm mb-1'>
            🚨 Emergency Support
          </div>
          <div className='text-red-600 text-sm'>
            Crisis helpline: <span className='font-bold'>1800-599-0019</span>
          </div>
        </div>
      </div>
    </section>
  );
}
