'use client';

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import ProductCard3D from '@/components/ProductCard3D';
import { gsap } from 'gsap';

const products = [
  {
    id: 'midnight-bloom',
    name: 'Midnight Bloom',
    price: 89,
    category: 'Floral',
    description: 'A mysterious dark floral featuring jasmine, oud, and black pepper. Perfect for evening adventures.',
    notes: ['Jasmine', 'Oud', 'Black Pepper', 'Amber'],
    image: 'https://images.pexels.com/photos/10786706/pexels-photo-10786706.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ocean-drift',
    name: 'Ocean Drift',
    price: 79,
    category: 'Fresh',
    description: 'Capture the essence of the sea with bergamot, sea salt, and driftwood. Refreshing and invigorating.',
    notes: ['Bergamot', 'Sea Salt', 'Driftwood', 'Musk'],
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'velvet-noir',
    name: 'Velvet Noir',
    price: 99,
    category: 'Warm',
    description: 'Luxurious warmth with vanilla, sandalwood, and a hint of tobacco. Sophisticated and seductive.',
    notes: ['Vanilla', 'Sandalwood', 'Tobacco', 'Amber'],
    image: 'https://images.pexels.com/photos/36779955/pexels-photo-36779955.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'citrus-burst',
    name: 'Citrus Burst',
    price: 69,
    category: 'Fresh',
    description: 'An explosion of energy with grapefruit, lemon, and mint. Perfect for everyday wear.',
    notes: ['Grapefruit', 'Lemon', 'Mint', 'Basil'],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'rose-garden',
    name: 'Rose Garden',
    price: 85,
    category: 'Floral',
    description: 'Timeless elegance with Bulgarian rose, peony, and soft musk. Romantic and feminine.',
    notes: ['Bulgarian Rose', 'Peony', 'Musk', 'Cedar'],
    image: 'https://images.pexels.com/photos/33691658/pexels-photo-33691658.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'smoky-leather',
    name: 'Smoky Leather',
    price: 95,
    category: 'Woody',
    description: 'Bold and confident with leather, tobacco, and vetiver. Makes a statement.',
    notes: ['Leather', 'Tobacco', 'Vetiver', 'Cedar'],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'vanilla-dreams',
    name: 'Vanilla Dreams',
    price: 75,
    category: 'Sweet',
    description: 'Comforting warmth with Madagascar vanilla, tonka bean, and coconut. Sweet but sophisticated.',
    notes: ['Madagascar Vanilla', 'Tonka Bean', 'Coconut', 'Benzoin'],
    image: 'https://images.unsplash.com/photo-1423896522771-0c974496d37b?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    price: 82,
    category: 'Woody',
    description: 'Escape to nature with pine, eucalyptus, and earthy moss. Grounding and refreshing.',
    notes: ['Pine', 'Eucalyptus', 'Moss', 'Cedar'],
    image: 'https://images.unsplash.com/photo-1595425970374-c0429d26c3eb?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    price: 88,
    category: 'Warm',
    description: 'Capturing sunset vibes with saffron, amber, and sun-kissed skin notes. Radiant and warm.',
    notes: ['Saffron', 'Amber', 'Skin Notes', 'Musk'],
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55ddc?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Products() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.product-3d-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Particles />
      <Navigation />

      <main className="flex-1 relative z-10 pt-32">
        <section ref={headerRef} className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">THE COLLECTION</p>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">
              Discover Your
              <br />
              <span className="italic text-[#c9a87c]">Signature</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl font-light">
              Each fragrance is a carefully composed story, crafted with intention and the finest ingredients from around the world.
            </p>
          </div>
        </section>

        <section ref={gridRef} className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
