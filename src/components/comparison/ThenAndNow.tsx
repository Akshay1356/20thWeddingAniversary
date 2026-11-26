'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Columns, Sliders, Sparkles, Heart } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function ThenAndNow() {
  const { thenAndNow } = ANNIVERSARY_CONFIG;
  const { openLightbox, allPhotos } = useAnniversary();

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const thenPhoto = allPhotos.find((p) => p.id === thenAndNow.thenId) || allPhotos[7];
  const nowPhoto = allPhotos.find((p) => p.id === thenAndNow.nowId) || allPhotos[25];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F7EEDF] paper-texture overflow-hidden">
      {/* Decorative Traditional Kolam */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-20">
        <KolamMotif size={100} color="#722F37" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-20">
        <KolamMotif size={100} color="#722F37" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-burgundy font-semibold">
              The Journey of Two Decades
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mt-2 mb-2">
              From Then to Now
            </h2>
            <OrnamentalDivider className="my-3" />
            <p className="font-serif italic text-lg sm:text-xl text-darkbrown/85 leading-relaxed">
              &ldquo;{thenAndNow.quote}&rdquo;
            </p>
          </motion.div>

          {/* View Mode Toggle Switch */}
          <div className="inline-flex items-center gap-1 p-1 mt-6 rounded-full bg-ivory-light border border-gold/40 shadow-sm text-xs font-serif">
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 ${
                viewMode === 'slider'
                  ? 'bg-burgundy text-ivory shadow-sm'
                  : 'text-darkbrown/70 hover:text-burgundy'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Slider</span>
            </button>
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 ${
                viewMode === 'sideBySide'
                  ? 'bg-burgundy text-ivory shadow-sm'
                  : 'text-darkbrown/70 hover:text-burgundy'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Side by Side</span>
            </button>
          </div>
        </div>

        {/* Comparison Display */}
        {viewMode === 'slider' ? (
          /* Interactive Comparison Slider */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-3xl mx-auto aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-vintage-card border-2 border-gold/50 select-none cursor-ew-resize bg-darkbrown"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* "Now" Image (Base layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={nowPhoto.src}
                alt="Now - 2026"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-burgundy/85 backdrop-blur-md text-ivory text-xs font-serif tracking-widest border border-gold/40 shadow-md">
                NOW • 2026
              </div>
              <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-md bg-darkbrown/75 backdrop-blur-md text-ivory-light text-xs font-serif">
                {nowPhoto.caption}
              </div>
            </div>

            {/* "Then" Image (Clipped layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
                <Image
                  src={thenPhoto.src}
                  alt="Then - 2006"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-darkbrown/85 backdrop-blur-md text-gold-light text-xs font-serif tracking-widest border border-gold/40 shadow-md">
                  THEN • 2006
                </div>
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-md bg-darkbrown/75 backdrop-blur-md text-ivory-light text-xs font-serif">
                  {thenPhoto.caption}
                </div>
              </div>
            </div>

            {/* Divider Line & Touch Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-ivory to-gold shadow-[0_0_10px_rgba(201,164,92,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#E8D3A2] to-[#C9A45C] border-2 border-ivory text-darkbrown shadow-xl flex items-center justify-center">
                <Sliders className="w-4 h-4 text-burgundy" />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Graceful Side by Side Display */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* "Then" Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-ivory-light p-4 rounded-2xl shadow-polaroid border border-gold/40 group cursor-pointer"
              onClick={() => {
                const idx = allPhotos.findIndex((p) => p.id === thenPhoto.id);
                if (idx !== -1) openLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-ivory-dark">
                <Image
                  src={thenPhoto.src}
                  alt="Then - 2006"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-darkbrown/85 backdrop-blur-md text-gold-light text-xs font-serif tracking-widest border border-gold/40">
                  THEN • 2006
                </div>
              </div>
              <div className="pt-3 px-1">
                <p className="font-serif text-darkbrown font-medium text-base">
                  The Early Days
                </p>
                <p className="font-serif italic text-darkbrown/70 text-sm mt-0.5">
                  {thenPhoto.caption}
                </p>
              </div>
            </motion.div>

            {/* "Now" Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-ivory-light p-4 rounded-2xl shadow-polaroid border border-gold/40 group cursor-pointer"
              onClick={() => {
                const idx = allPhotos.findIndex((p) => p.id === nowPhoto.id);
                if (idx !== -1) openLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-ivory-dark">
                <Image
                  src={nowPhoto.src}
                  alt="Now - 2026"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-burgundy/85 backdrop-blur-md text-ivory text-xs font-serif tracking-widest border border-gold/40">
                  NOW • 2026
                </div>
              </div>
              <div className="pt-3 px-1">
                <p className="font-serif text-burgundy font-medium text-base">
                  Twenty Years of Grace
                </p>
                <p className="font-serif italic text-darkbrown/70 text-sm mt-0.5">
                  {nowPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Footer Subtext */}
        <p className="text-center font-serif text-xs text-darkbrown/60 mt-6 tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Slide or drag across to reveal 20 years of companionship</span>
        </p>
      </div>
    </section>
  );
}
