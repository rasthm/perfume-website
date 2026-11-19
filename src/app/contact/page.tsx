'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { gsap } from 'gsap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-section', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Particles />
      <Navigation />

      <main className="flex-1 relative z-10">
        <section ref={heroRef} className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,124,0.08),transparent_50%)]" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-8">CONTACT</p>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8 leading-none">
              Get in
              <br />
              <span className="italic text-[#c9a87c]">Touch</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section ref={contentRef} className="px-6 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="contact-section">
                <h2 className="text-3xl font-light text-white mb-12 tracking-tight">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="text-[#c9a87c] text-2xl">—</div>
                    <div>
                      <h3 className="text-xs tracking-widest text-white/30 mb-2">LOCATION</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        123 Fragrance Lane<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="text-[#c9a87c] text-2xl">—</div>
                    <div>
                      <h3 className="text-xs tracking-widest text-white/30 mb-2">EMAIL</h3>
                      <p className="text-white/60 text-sm">hello@essence.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="text-[#c9a87c] text-2xl">—</div>
                    <div>
                      <h3 className="text-xs tracking-widest text-white/30 mb-2">PHONE</h3>
                      <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="text-[#c9a87c] text-2xl">—</div>
                    <div>
                      <h3 className="text-xs tracking-widest text-white/30 mb-2">HOURS</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Monday - Friday: 9am - 6pm PST<br />
                        Saturday - Sunday: 10am - 4pm PST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-xs tracking-widest text-white/30 mb-6">CONNECT</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-section">
                <h2 className="text-3xl font-light text-white mb-12 tracking-tight">
                  Send a Message
                </h2>
                {submitted ? (
                  <div className="p-8 border border-[#c9a87c]/30 text-center">
                    <div className="text-[#c9a87c] text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-light text-white mb-2">Message Sent</h3>
                    <p className="text-white/40 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-widest text-white/30 mb-3">
                        NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a87c]/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs tracking-widest text-white/30 mb-3">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a87c]/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs tracking-widest text-white/30 mb-3">
                        SUBJECT
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#c9a87c]/50 transition-colors"
                      >
                        <option value="" className="bg-black">Select a subject</option>
                        <option value="general" className="bg-black">General Inquiry</option>
                        <option value="order" className="bg-black">Order Support</option>
                        <option value="wholesale" className="bg-black">Wholesale Inquiry</option>
                        <option value="press" className="bg-black">Press & Media</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs tracking-widest text-white/30 mb-3">
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a87c]/50 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black text-sm tracking-widest hover:bg-[#c9a87c] transition-colors duration-500"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
