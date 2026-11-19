'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import ProductCard3D from '@/components/ProductCard3D';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.8')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6');

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.product-3d-card', {
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,124,0.1),transparent_50%)]" />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-8 opacity-0 animate-fade-in">
              LUXURY FRAGRANCES
            </p>
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-8 leading-none"
            >
              Scent Your
              <br />
              <span className="font-light italic text-[#c9a87c]">Story</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              Premium fragrances crafted for those who dare to be different.
              Each scent is a journey, an emotion, a memory.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="px-10 py-4 bg-white text-black text-sm tracking-widest hover:bg-[#c9a87c] transition-all duration-500"
              >
                EXPLORE COLLECTION
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
              >
                OUR STORY
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section ref={featuresRef} className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="feature-card group">
                <div className="text-[#c9a87c] text-5xl font-light mb-6 group-hover:scale-110 transition-transform duration-500">01</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Sustainable</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Ethically sourced ingredients, eco-friendly packaging, and cruelty-free formulations. Luxury without compromise.
                </p>
              </div>
              <div className="feature-card group">
                <div className="text-[#c9a87c] text-5xl font-light mb-6 group-hover:scale-110 transition-transform duration-500">02</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Artisan Crafted</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Each fragrance is meticulously crafted by master perfumers, blending tradition with innovation.
                </p>
              </div>
              <div className="feature-card group">
                <div className="text-[#c9a87c] text-5xl font-light mb-6 group-hover:scale-110 transition-transform duration-500">03</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Exceptional Quality</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Premium ingredients from around the world, carefully selected for their depth and character.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={productsRef} className="py-32 px-6 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">SIGNATURE COLLECTION</p>
              <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
                Best Sellers
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { id: 'midnight-bloom', name: 'Midnight Bloom', price: 89, category: 'Floral', description: 'Dark floral with jasmine and oud', notes: ['Jasmine', 'Oud', 'Black Pepper', 'Amber'] },
                { id: 'ocean-drift', name: 'Ocean Drift', price: 79, category: 'Fresh', description: 'Fresh aquatic with bergamot', notes: ['Bergamot', 'Sea Salt', 'Driftwood', 'Musk'] },
                { id: 'velvet-noir', name: 'Velvet Noir', price: 99, category: 'Warm', description: 'Warm amber with vanilla', notes: ['Vanilla', 'Sandalwood', 'Tobacco', 'Amber'] },
              ].map((product) => (
                <ProductCard3D
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  notes={product.notes}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/products"
                className="inline-block px-10 py-4 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
              >
                VIEW ALL
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">NEWSLETTER</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Join the Journey
            </h2>
            <p className="text-white/40 text-lg mb-12 font-light">
              Be the first to discover new releases, exclusive offers, and the stories behind our scents.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a87c]/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black text-sm tracking-widest hover:bg-[#c9a87c] transition-colors duration-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
