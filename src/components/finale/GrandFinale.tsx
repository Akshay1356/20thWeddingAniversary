'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Heart, RefreshCw } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function GrandFinale() {
  const { triggerConfetti, triggerFireworks, allPhotos } = useAnniversary();
  const { grandFinale, couple } = ANNIVERSARY_CONFIG;

  const finalePhoto =
    allPhotos.find((p) => p.id === grandFinale.celebrationPhotoId) || allPhotos[21];
  const couplePhoto =
    allPhotos.find((p) => p.id === grandFinale.couplePhotoId) || allPhotos[25];

  const handleCelebrateAgain = () => {
    triggerConfetti();
    triggerFireworks();
  };

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#1F1511] via-[#2A181C] to-[#160D0B] text-ivory overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#722F37]/30 blur-[120px] pointer-events-none" />

      {/* Auspicious Traditional Kolams */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={140} color="#E8D3A2" />
      </div>
      <div className="absolute top-10 right-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={140} color="#E8D3A2" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-serif uppercase tracking-[0.25em] mb-6 shadow-lg shadow-gold/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span>The Grand Finale</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
        </motion.div>

        {/* English Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-ivory mb-4"
        >
          20 Years of Love.
          <span className="block text-gold-gradient font-serif italic mt-2">
            Here&apos;s to a Hundred More.
          </span>
        </motion.h2>

        {/* Tamil Theme Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-6"
        >
          <h3 className="font-tamil text-4xl sm:text-5xl md:text-6xl font-bold text-rose-light mb-3">
            {grandFinale.tamilTitle}
          </h3>
          <p className="font-tamil text-xl sm:text-2xl text-gold-light font-medium tracking-wide">
            {grandFinale.tamilBlessing}
          </p>
        </motion.div>

        <OrnamentalDivider className="my-6 justify-center" />

        {/* Happy Anniversary Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-2xl sm:text-3xl text-ivory-light tracking-wider font-light mb-12"
        >
          {grandFinale.tagline}
        </motion.p>

        {/* Dual Commemorative Photos Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14"
        >
          {/* Couple Portrait */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden p-2 bg-ivory/10 border border-gold/40 shadow-2xl backdrop-blur-sm group">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={couplePhoto.src}
                alt="Amma and Appa Together"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-center">
                <p className="text-xs font-serif text-ivory-light tracking-widest">
                  M. Prakash &amp; P. Anitha
                </p>
              </div>
            </div>
          </div>

          {/* Grand Extended Family */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden p-2 bg-ivory/10 border border-gold/40 shadow-2xl backdrop-blur-sm group">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={finalePhoto.src}
                alt="Family United"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-center">
                <p className="text-xs font-serif text-ivory-light tracking-widest">
                  The Beautiful Life Built Together
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Celebrate Again Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <button
            onClick={handleCelebrateAgain}
            className="group relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-[#C9A45C] via-[#E8D3A2] to-[#C9A45C] text-[#30221C] font-serif font-bold text-lg tracking-wider shadow-2xl shadow-gold/30 hover:shadow-gold/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border border-ivory/40"
          >
            <Sparkles className="w-5 h-5 text-burgundy animate-spin" />
            <span>Celebrate Again</span>
            <RefreshCw className="w-4 h-4 text-burgundy group-hover:rotate-180 transition-transform duration-500" />
          </button>
          <p className="text-ivory/60 text-xs font-serif tracking-widest uppercase">
            Tap for fireworks &amp; golden confetti
          </p>
        </motion.div>

        {/* Elegant Footer Signature */}
        <div className="mt-20 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-ivory/50 gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
            <span>Surprise gift crafted with all my love for Amma &amp; Appa</span>
          </div>
          <div>
            <span>27 November 2006 — 27 November 2026 • 20th Anniversary</span>
          </div>
        </div>
      </div>
    </section>
  );
}
