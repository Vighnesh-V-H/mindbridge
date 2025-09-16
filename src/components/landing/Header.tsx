"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <div className='text-2xl'>🧠</div>
            <span className='text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent'>
              MindBridge
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='#features'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Features
            </Link>
            <Link
              href='#about'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              About
            </Link>
            <Link
              href='#contact'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className='hidden md:flex items-center gap-4'>
            <Link
              href='/signin'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Sign In
            </Link>
            <Link
              href='/signup'
              className='bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all'>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className='w-6 h-6 flex flex-col justify-center items-center'>
              <span
                className={`block w-6 h-0.5 bg-slate-600 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-slate-600 transition-all mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-slate-600 transition-all mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-slate-200'>
            <nav className='flex flex-col gap-4'>
              <Link
                href='#features'
                className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'
                onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link
                href='#about'
                className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'
                onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href='#contact'
                className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className='flex flex-col gap-3 pt-4 border-t border-slate-200'>
                <Link
                  href='/signin'
                  className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'
                  onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
                <Link
                  href='/signup'
                  className='bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-center'
                  onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
