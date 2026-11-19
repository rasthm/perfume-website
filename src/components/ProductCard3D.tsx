'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

interface ProductCard3DProps {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  notes: string[];
  image?: string;
}

export default function ProductCard3D({
  id,
  name,
  price,
  category,
  description,
  notes,
}: ProductCard3DProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0)');
  };

  return (
    <Link
      href={`/products/${id}`}
      ref={cardRef}
      className="product-3d-card group border border-white/10 p-8 hover:border-[#c9a87c]/50 transition-all duration-500 preserve-3d"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="preserve-3d">
        <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <div className="text-7xl">✦</div>
        </div>
        <div className="mb-4">
          <span className="text-xs tracking-widest text-[#c9a87c]">{category}</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-3">{name}</h3>
        <p className="text-white/40 text-sm mb-6 leading-relaxed">{description}</p>
        <div className="mb-6">
          <p className="text-xs tracking-widest text-white/30 mb-3">NOTES</p>
          <div className="flex flex-wrap gap-2">
            {notes.map((note) => (
              <span
                key={note}
                className="px-3 py-1 border border-white/10 text-white/60 text-xs tracking-wider hover:border-[#c9a87c]/50 hover:text-[#c9a87c] transition-colors"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-white/10">
          <span className="text-2xl font-light text-[#c9a87c]">${price}</span>
          <span className="text-xs tracking-widest text-white/60 group-hover:text-white transition-colors">
            VIEW DETAILS
          </span>
        </div>
      </div>
    </Link>
  );
}
