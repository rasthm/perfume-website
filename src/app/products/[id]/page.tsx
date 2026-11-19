'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { gsap } from 'gsap';

const products: Record<string, any> = {
  'midnight-bloom': {
    id: 'midnight-bloom',
    name: 'Midnight Bloom',
    price: 89,
    category: 'Floral',
    description: 'A mysterious dark floral featuring jasmine, oud, and black pepper. Perfect for evening adventures and intimate moments.',
    notes: ['Jasmine', 'Oud', 'Black Pepper', 'Amber'],
    story: 'Inspired by the midnight gardens of Marrakech, this fragrance captures the essence of mystery and allure. The opening notes of black pepper create an immediate intrigue, while the heart of jasmine sambac and oud weave a tale of forbidden desires. The dry down of warm amber lingers like a memory you can\'t quite forget.',
    volume: '50ml / 1.7 fl oz',
    longevity: '8-10 hours',
    sillage: 'Moderate to heavy',
    image: 'https://images.pexels.com/photos/10786706/pexels-photo-10786706.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  'ocean-drift': {
    id: 'ocean-drift',
    name: 'Ocean Drift',
    price: 79,
    category: 'Fresh',
    description: 'Capture the essence of the sea with bergamot, sea salt, and driftwood. Refreshing and invigorating.',
    notes: ['Bergamot', 'Sea Salt', 'Driftwood', 'Musk'],
    story: 'Born from the rugged coastlines of Norway, Ocean Drift captures the raw beauty of the sea. Crisp bergamot meets the sharp contrast of sea salt, while weathered driftwood adds depth and character. A fragrance that evokes the freedom of endless horizons and the power of nature.',
    volume: '50ml / 1.7 fl oz',
    longevity: '6-8 hours',
    sillage: 'Light to moderate',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=compress&cs=tinysrgb&w=800',
  },
  'velvet-noir': {
    id: 'velvet-noir',
    name: 'Velvet Noir',
    price: 99,
    category: 'Warm',
    description: 'Luxurious warmth with vanilla, sandalwood, and a hint of tobacco. Sophisticated and seductive.',
    notes: ['Vanilla', 'Sandalwood', 'Tobacco', 'Amber'],
    story: 'Velvet Noir is an ode to the Golden Age of Hollywood glamour. Rich Madagascar vanilla creates a luscious opening, while creamy sandalwood provides a smooth, sophisticated foundation. A whisper of tobacco adds a daring edge—bold yet refined, like a black velvet tuxedo.',
    volume: '50ml / 1.7 fl oz',
    longevity: '10-12 hours',
    sillage: 'Heavy',
    image: 'https://images.pexels.com/photos/36779955/pexels-photo-36779955.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  'citrus-burst': {
    id: 'citrus-burst',
    name: 'Citrus Burst',
    price: 69,
    category: 'Fresh',
    description: 'An explosion of energy with grapefruit, lemon, and mint. Perfect for everyday wear.',
    notes: ['Grapefruit', 'Lemon', 'Mint', 'Basil'],
    story: 'Citrus Burst captures the invigorating energy of a Mediterranean morning. Bright grapefruit and zesty lemon create an immediate awakening, while cool mint adds a refreshing crispness. Perfect for those who live life with vitality and optimism.',
    volume: '50ml / 1.7 fl oz',
    longevity: '5-7 hours',
    sillage: 'Light',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=compress&cs=tinysrgb&w=800',
  },
  'rose-garden': {
    id: 'rose-garden',
    name: 'Rose Garden',
    price: 85,
    category: 'Floral',
    description: 'Timeless elegance with Bulgarian rose, peony, and soft musk. Romantic and feminine.',
    notes: ['Bulgarian Rose', 'Peony', 'Musk', 'Cedar'],
    story: 'Rose Garden is a love letter to the timeless beauty of flowers. Bulgarian rose absolute creates a rich, romantic heart, while delicate peony adds softness. A base of white musk and cedar provides a clean, lasting impression. Like walking through an English garden at dusk.',
    volume: '50ml / 1.7 fl oz',
    longevity: '7-9 hours',
    sillage: 'Moderate',
    image: 'https://images.pexels.com/photos/33691658/pexels-photo-33691658.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  'smoky-leather': {
    id: 'smoky-leather',
    name: 'Smoky Leather',
    price: 95,
    category: 'Woody',
    description: 'Bold and confident with leather, tobacco, and vetiver. Makes a statement.',
    notes: ['Leather', 'Tobacco', 'Vetiver', 'Cedar'],
    story: 'Smoky Leather is for those who embrace their boldness. Rich leather accord creates an immediate presence, while smoky tobacco adds depth and character. Vetiver and cedar provide a woody foundation that grounds the fragrance. Unapologetically masculine and sophisticated.',
    volume: '50ml / 1.7 fl oz',
    longevity: '10-12 hours',
    sillage: 'Heavy',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=compress&cs=tinysrgb&w=800',
  },
  'vanilla-dreams': {
    id: 'vanilla-dreams',
    name: 'Vanilla Dreams',
    price: 75,
    category: 'Sweet',
    description: 'Comforting warmth with Madagascar vanilla, tonka bean, and coconut. Sweet but sophisticated.',
    notes: ['Madagascar Vanilla', 'Tonka Bean', 'Coconut', 'Benzoin'],
    story: 'Vanilla Dreams wraps you in warmth and comfort. Premium Madagascar vanilla absolute creates a rich, gourmand opening, while tonka bean adds depth. Coconut milk provides a creamy sweetness that feels like a gentle embrace. Sophisticated sweetness that never becomes cloying.',
    volume: '50ml / 1.7 fl oz',
    longevity: '8-10 hours',
    sillage: 'Moderate',
    image: 'https://images.unsplash.com/photo-1423896522771-0c974496d37b?auto=compress&cs=tinysrgb&w=800',
  },
  'forest-mist': {
    id: 'forest-mist',
    name: 'Forest Mist',
    price: 82,
    category: 'Woody',
    description: 'Escape to nature with pine, eucalyptus, and earthy moss. Grounding and refreshing.',
    notes: ['Pine', 'Eucalyptus', 'Moss', 'Cedar'],
    story: 'Forest Mist transports you to ancient woodlands. Crisp pine needles and eucalyptus create an opening of fresh air, while earthy moss notes ground the fragrance. Cedar provides a warm, woody base that lingers. A walk through the forest at dawn.',
    volume: '50ml / 1.7 fl oz',
    longevity: '7-9 hours',
    sillage: 'Moderate',
    image: 'https://images.unsplash.com/photo-1595425970374-c0429d26c3eb?auto=compress&cs=tinysrgb&w=800',
  },
  'golden-hour': {
    id: 'golden-hour',
    name: 'Golden Hour',
    price: 88,
    category: 'Warm',
    description: 'Capturing sunset vibes with saffron, amber, and sun-kissed skin notes. Radiant and warm.',
    notes: ['Saffron', 'Amber', 'Skin Notes', 'Musk'],
    story: 'Golden Hour captures the magic of sunset. Rare saffron creates a spicy, radiant opening, while warm amber adds depth. Sun-kissed skin notes provide a subtle intimacy, and white musk creates a clean finish. Like the golden light of late afternoon.',
    volume: '50ml / 1.7 fl oz',
    longevity: '9-11 hours',
    sillage: 'Moderate to heavy',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55ddc?auto=compress&cs=tinysrgb&w=800',
  },
};

export default function ProductDetail() {
  const params = useParams();
  const product = products[params.id as string];
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });

      gsap.from('.detail-section', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#c9a87c] hover:underline">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Particles />
      <Navigation />

      <main className="flex-1 relative z-10">
        <section ref={heroRef} className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,124,0.08),transparent_50%)]" />

          <div className="relative z-10 w-full px-6 py-32">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
                <div className="text-9xl">✦</div>
              </div>

              <div>
                <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">{product.category.toUpperCase()}</p>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-3xl font-light text-[#c9a87c] mb-8">${product.price}</p>
                <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-6 mb-12">
                  <div>
                    <p className="text-xs tracking-widest text-white/30 mb-3">NOTES</p>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.map((note: string) => (
                        <span
                          key={note}
                          className="px-4 py-2 border border-white/20 text-white/60 text-sm tracking-wider"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-xs tracking-widest text-white/30 mb-2">VOLUME</p>
                      <p className="text-white/60 text-sm">{product.volume}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest text-white/30 mb-2">LONGEVITY</p>
                      <p className="text-white/60 text-sm">{product.longevity}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest text-white/30 mb-2">SILLAGE</p>
                      <p className="text-white/60 text-sm">{product.sillage}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-white text-black text-sm tracking-widest hover:bg-[#c9a87c] transition-colors duration-500">
                    ADD TO CART
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={contentRef} className="px-6 py-32 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="detail-section">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">THE STORY</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                Behind the Scent
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed whitespace-pre-line">
                {product.story}
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="detail-section text-center">
              <p className="text-xs tracking-[0.5em] text-[#c9a87c] mb-6">MORE FROM THE COLLECTION</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-12 tracking-tight">
                Discover More
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.values(products)
                  .filter((p) => p.id !== product.id)
                  .slice(0, 3)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/products/${relatedProduct.id}`}
                      className="group border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500"
                    >
                      <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center">
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-500">✦</div>
                      </div>
                      <h3 className="text-xl font-light text-white mb-2">{relatedProduct.name}</h3>
                      <p className="text-[#c9a87c] text-lg">${relatedProduct.price}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
