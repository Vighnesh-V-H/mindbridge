"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='col-span-1 lg:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='text-2xl'>🧠</div>
              <span className='text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent'>
                MindBridge
              </span>
            </div>
            <p className='text-slate-400 max-w-md mb-6'>
              Comprehensive digital mental health support system designed
              specifically for students. Providing AI-powered counseling,
              professional care, and peer community support.
            </p>
            <div className='flex gap-4'>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors'>
                📘
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors'>
                🐦
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors'>
                📷
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors'>
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/signup'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href='/signin'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href='#features'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='text-slate-400 hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Support</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-slate-400 hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Information */}
        <div className='border-t border-slate-800 pt-8 mt-8'>
          <div className='bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6'>
            <h4 className='font-semibold text-red-300 mb-2'>
              🚨 Crisis Support
            </h4>
            <p className='text-red-200 text-sm mb-2'>
              If you're experiencing a mental health emergency, please reach out
              immediately:
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
              <div>
                <div className='font-medium text-red-300'>
                  National Helpline
                </div>
                <div className='text-red-200'>1800-599-0019</div>
              </div>
              <div>
                <div className='font-medium text-red-300'>
                  Emergency Services
                </div>
                <div className='text-red-200'>108 / 112</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center'>
          <div className='text-slate-400 text-sm'>
            © 2025 MindBridge. All rights reserved. Designed for student mental
            health support.
          </div>
          <div className='text-slate-400 text-sm mt-4 sm:mt-0'>
            Made with ❤️ for student wellbeing
          </div>
        </div>
      </div>
    </footer>
  );
}
