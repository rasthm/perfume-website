'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-light tracking-[0.3em] text-white hover:text-[#c9a87c] transition-colors duration-300">
            ÉSSENCE
          </Link>

          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300">
              HOME
            </Link>
            <Link href="/products" className="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300">
              COLLECTION
            </Link>
            <Link href="/about" className="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300">
              STORY
            </Link>
            <Link href="/contact" className="text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300">
              CONTACT
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-8 pt-4 border-t border-white/10">
            <Link
              href="/"
              className="block py-3 text-sm tracking-widest text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/products"
              className="block py-3 text-sm tracking-widest text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              COLLECTION
            </Link>
            <Link
              href="/about"
              className="block py-3 text-sm tracking-widest text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              STORY
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm tracking-widest text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
