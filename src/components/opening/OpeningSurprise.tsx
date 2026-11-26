'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import WaxSeal from '@/components/ui/WaxSeal';
import KolamMotif from '@/components/ui/KolamMotif';

export default function OpeningSurprise() {
  const { isSurpriseOpened, openSurprise } = useAnniversary();
  const [isOpeningAnim, setIsOpeningAnim] = useState(false);

  const handleOpen = () => {
    if (isOpeningAnim || isSurpriseOpened) return;
    setIsOpeningAnim(true);
    setTimeout(() => {
      openSurprise();
    }, 1100);
  };

  if (isSurpriseOpened) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="surprise-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#1E1410]"
      >
        {/* Rich Ambient Warm Glow Backdrops */}
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#722F37]/30 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9A45C]/25 blur-[100px] pointer-events-none" />

        {/* Floating golden sparkle dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold-light/60 shadow-sm shadow-gold"
              style={{
                left: `${(i * 19) % 100}%`,
                top: `${(i * 27) % 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.9, 0.2],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                delay: (i * 0.3) % 4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Auspicious Tamil Kolam Background Details */}
        <div className="absolute top-6 left-6 pointer-events-none opacity-20 hidden md:block">
          <KolamMotif size={90} color="#E8D3A2" />
        </div>
        <div className="absolute top-6 right-6 pointer-events-none opacity-20 hidden md:block">
          <KolamMotif size={90} color="#E8D3A2" />
        </div>
        <div className="absolute bottom-6 left-6 pointer-events-none opacity-20 hidden md:block">
          <KolamMotif size={90} color="#E8D3A2" />
        </div>
        <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 hidden md:block">
          <KolamMotif size={90} color="#E8D3A2" />
        </div>

        {/* Envelope & Letter Container */}
        <div className="relative w-full max-w-lg z-10 text-center flex flex-col items-center">
          {/* Header Typography */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-8"
          >
            <p className="font-serif italic text-gold-light/90 text-sm md:text-base tracking-[0.25em] uppercase mb-2">
              A Little Surprise for
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-wide">
              Amma &amp; Appa
            </h1>
            <p className="font-tamil text-gold text-lg md:text-xl mt-2 tracking-wider">
              நூறு வருஷம் • 20th Wedding Anniversary
            </p>
          </motion.div>

          {/* Interactive Luxury Ivory Envelope */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-[420px] aspect-[1.45/1] mx-auto cursor-pointer group"
            onClick={handleOpen}
          >
            {/* Envelope Base Body */}
            <div className="absolute inset-0 bg-[#FCF5E9] rounded-xl shadow-2xl border border-[#C9A45C]/40 overflow-hidden flex flex-col justify-end p-6">
              {/* Subtle inner parchment texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#C9A45C_0.6px,transparent_0.6px)] [background-size:16px_16px] opacity-15" />

              {/* Gold foil border rim */}
              <div className="absolute inset-2 border border-[#C9A45C]/35 rounded-lg pointer-events-none" />
              <div className="absolute inset-3 border border-[#C9A45C]/20 rounded-md pointer-events-none" />

              {/* Corner flourishes */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-gold pointer-events-none" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-gold pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-gold pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-gold pointer-events-none" />

              {/* Envelope flap folds (visual origami shadows) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top right, rgba(114, 47, 55, 0.04) 50%, transparent 50%), linear-gradient(to top left, rgba(114, 47, 55, 0.04) 50%, transparent 50%)',
                }}
              />

              {/* Envelope Center Label */}
              <div className="relative z-10 my-auto text-center pt-8">
                <span className="text-[11px] font-serif tracking-[0.3em] uppercase text-burgundy/70 block mb-1">
                  27 November 2006 — 2026
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-darkbrown tracking-wider">
                  M. Prakash &amp; P. Anitha
                </p>
                <p className="font-serif italic text-gold-dark text-xs sm:text-sm mt-1">
                  Celebrating Twenty Years of Endless Love
                </p>
              </div>

              {/* Bottom Subtle Stamp */}
              <div className="relative z-10 flex justify-between items-center text-[10px] tracking-widest uppercase text-darkbrown/40 border-t border-gold/20 pt-2 font-serif">
                <span>Madurai • Tamil Nadu</span>
                <span>With Love From Your Son</span>
              </div>
            </div>

            {/* Top Envelope Flap with 3D animation */}
            <motion.div
              className="absolute -top-0.5 inset-x-0 origin-top z-20 pointer-events-none"
              animate={
                isOpeningAnim
                  ? { rotateX: 180, y: -15, opacity: 0 }
                  : { rotateX: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            >
              <svg
                viewBox="0 0 420 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full drop-shadow-md"
              >
                <path
                  d="M0 0 L420 0 L210 145 Z"
                  fill="#F7EEDF"
                  stroke="#C9A45C"
                  strokeWidth="1.2"
                />
                <path
                  d="M10 5 L410 5 L210 135 Z"
                  fill="none"
                  stroke="#C9A45C"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />
              </svg>
            </motion.div>

            {/* Wax Seal precisely aligned on the flap tip */}
            <motion.div
              className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
              animate={
                isOpeningAnim
                  ? { scale: [1, 1.3, 0], rotate: [0, 15, 30], opacity: [1, 0.8, 0] }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              <WaxSeal size={80} />
            </motion.div>
          </motion.div>

          {/* Action Button: "Open Your Surprise" */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col items-center"
          >
            <button
              onClick={handleOpen}
              disabled={isOpeningAnim}
              className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A45C] via-[#E8D3A2] to-[#C9A45C] text-[#30221C] font-serif font-semibold text-base sm:text-lg tracking-wider shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border border-[#FCF5E9]/60 cursor-pointer"
            >
              <span className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Sparkles className="w-5 h-5 text-burgundy animate-pulse" />
              <span>{isOpeningAnim ? 'Unfolding Your Surprise...' : 'Open Your Surprise'}</span>
              <Heart className="w-4 h-4 text-burgundy fill-burgundy" />
            </button>

            <p className="text-ivory/60 text-xs sm:text-sm mt-3.5 font-serif italic tracking-wide">
              Click to unlock the celebration and music
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
