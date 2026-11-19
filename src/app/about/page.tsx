'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { gsap } from 'gsap';

export default function About() {
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

      gsap.from('.story-section', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Particles />
      <Navigation />

      <main className="flex-1 relative z-10">
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,124,0.08),transparent_50%)]" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-8">OUR STORY</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-8 leading-none">
              Crafted with
              <br />
              <span className="italic text-[#c9a87c]">Intention</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
              Born from a desire to create fragrances that resonate with a new generation.
            </p>
          </div>
        </section>

        <section ref={contentRef} className="px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="story-section mb-32">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">01 — THE BEGINNING</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                Where It All Started
              </h2>
              <div className="space-y-6 text-white/40 text-lg font-light leading-relaxed">
                <p>
                  ÉSSENCE was founded in 2023 by a group of friends who believed that fragrance should be
                  personal, expressive, and accessible. We noticed that the perfume industry was stuck in
                  the past—expensive, exclusive, and disconnected from the values of our generation.
                </p>
                <p>
                  We set out to change that. To create scents that tell stories, that evoke memories, and that
                  feel like an extension of who you are. Not who you're supposed to be.
                </p>
              </div>
            </div>

            <div className="story-section mb-32">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">02 — THE PHILOSOPHY</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                Fragrance as Art
              </h2>
              <div className="space-y-6 text-white/40 text-lg font-light leading-relaxed">
                <p>
                  We believe that fragrance is art. Each bottle contains a carefully crafted composition of
                  notes that work together to create something greater than the sum of its parts.
                </p>
                <p>
                  But we also believe fragrance should be sustainable, ethical, and transparent. That's why
                  we source our ingredients responsibly, use eco-friendly packaging, and never test on animals.
                </p>
              </div>
            </div>

            <div className="story-section mb-32">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">03 — THE PROCESS</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                Months in the Making
              </h2>
              <div className="space-y-6 text-white/40 text-lg font-light leading-relaxed">
                <p>
                  Each fragrance in our collection takes months to develop. We work with master perfumers from
                  around the world, blending traditional techniques with modern innovation.
                </p>
                <p>
                  We start with a story—an emotion, a memory, a moment in time. Then we find the ingredients
                  that bring that story to life. The result is a collection of scents that are unique,
                  memorable, and unmistakably ÉSSENCE.
                </p>
              </div>
            </div>

            <div className="story-section mb-32">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">04 — OUR VALUES</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                What We Stand For
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500">
                  <div className="text-[#c9a87c] text-4xl font-light mb-4">01</div>
                  <h3 className="text-xl font-light text-white mb-3">Sustainability</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We're committed to reducing our environmental impact through responsible sourcing,
                    eco-friendly packaging, and carbon-neutral shipping.
                  </p>
                </div>
                <div className="border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500">
                  <div className="text-[#c9a87c] text-4xl font-light mb-4">02</div>
                  <h3 className="text-xl font-light text-white mb-3">Inclusivity</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Fragrance has no gender. Our scents are designed for anyone who wants to wear them,
                    regardless of how they identify.
                  </p>
                </div>
                <div className="border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500">
                  <div className="text-[#c9a87c] text-4xl font-light mb-4">03</div>
                  <h3 className="text-xl font-light text-white mb-3">Transparency</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We believe you should know what's in your fragrance. We list all our ingredients
                    openly and never use hidden synthetics.
                  </p>
                </div>
                <div className="border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500">
                  <div className="text-[#c9a87c] text-4xl font-light mb-4">04</div>
                  <h3 className="text-xl font-light text-white mb-3">Quality</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We never compromise on quality. Every ingredient is carefully selected, and every
                    batch is tested to ensure excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="story-section text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                Join Our Journey
              </h2>
              <p className="text-white/40 text-lg mb-12 font-light max-w-2xl mx-auto">
                We're just getting started. Explore our collection and find the scent that tells your story.
              </p>
              <Link
                href="/products"
                className="inline-block px-10 py-4 bg-white text-black text-sm tracking-widest hover:bg-[#c9a87c] transition-colors duration-500"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
