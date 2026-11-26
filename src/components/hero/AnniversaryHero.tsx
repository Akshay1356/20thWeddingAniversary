'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function AnniversaryHero() {
  const { couple, heroPhotoId, heroSecondaryPhotoId, photos } = ANNIVERSARY_CONFIG;
  const heroPhoto = photos.find((p) => p.id === heroPhotoId) || photos[25];
  const secondaryPhoto = photos.find((p) => p.id === heroSecondaryPhotoId) || photos[1];

  const scrollToNext = () => {
    const el = document.getElementById('where-it-all-began');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ivory pt-16 pb-20 px-4 sm:px-6 lg:px-12 paper-texture">
      {/* Decorative Traditional Watermarks */}
      <div className="absolute top-10 right-8 pointer-events-none opacity-20 hidden lg:block">
        <KolamMotif size={140} color="#C9A45C" />
      </div>
      <div className="absolute bottom-16 left-8 pointer-events-none opacity-20 hidden lg:block">
        <KolamMotif size={120} color="#C9A45C" />
      </div>

      {/* Warm Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-rose/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Celebration Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left"
        >
          {/* Milestone Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/10 border border-burgundy/30 text-burgundy self-center lg:self-start mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-dark fill-gold-dark/40" />
            <span className="font-serif tracking-[0.2em] text-xs sm:text-sm font-semibold uppercase">
              2006 — 2026 • 20th Wedding Anniversary
            </span>
          </div>

          {/* Grand Tamil Calligraphic Heading */}
          <h1 className="font-tamil text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-burgundy leading-tight mb-2 drop-shadow-sm">
            {couple.tamilTheme}
          </h1>

          <p className="font-serif italic text-gold-dark text-lg sm:text-xl tracking-widest uppercase mb-4">
            {couple.tamilThemeSubtitle} • Hundred Years of Togetherness
          </p>

          <OrnamentalDivider className="my-2 lg:justify-start" />

          {/* Parents' Names */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-darkbrown tracking-wide mb-3 leading-snug">
            {couple.husband}
            <span className="text-gold font-serif italic mx-3">&amp;</span>
            {couple.wife}
          </h2>

          {/* Dates & Subtitle */}
          <p className="font-serif text-base sm:text-lg text-burgundy font-medium tracking-wider mb-4">
            Happy 20th Wedding Anniversary
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-darkbrown/70 text-sm font-serif tracking-widest uppercase mb-6">
            <span className="border-b border-gold/40 pb-0.5">{couple.weddingDate}</span>
            <Heart className="w-3.5 h-3.5 text-rose-dark fill-rose" />
            <span className="border-b border-gold/40 pb-0.5">{couple.anniversaryDate}</span>
          </div>

          {/* Emotional Quote */}
          <div className="relative max-w-lg mx-auto lg:mx-0 p-5 rounded-2xl bg-ivory-light/80 border border-gold/30 shadow-gold-soft backdrop-blur-sm">
            <div className="absolute -top-3 left-6 px-2 bg-ivory-light text-gold text-xs font-serif uppercase tracking-widest">
              Two Decades of Grace
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-darkbrown/90 leading-relaxed">
              &ldquo;{couple.englishTagline}&rdquo;
            </p>
            <p className="text-xs text-darkbrown/60 font-serif mt-2 tracking-wide">
              Celebrated with deepest love, gratitude and pride by your son
            </p>
          </div>
        </motion.div>

        {/* Right Column: Layered Fine-Art Photo Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 flex justify-center items-center relative"
        >
          {/* Main Gold Framed Portrait */}
          <div className="relative w-full max-w-[440px] aspect-[3/4] rounded-2xl p-3 bg-gradient-to-b from-[#FFFDF9] to-[#F5EBDA] shadow-vintage-card border-2 border-gold/50 group">
            {/* Ornate Gold Corners */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-sm pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-sm pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-sm pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-sm pointer-events-none z-20" />

            {/* Inner Border Rim */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-gold/30 shadow-inner">
              <Image
                src={heroPhoto.src}
                alt={`${couple.husband} & ${couple.wife}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gentle gradient overlay to preserve contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/60 via-transparent to-transparent opacity-60" />

              {/* Photo Caption Tag inside image */}
              <div className="absolute bottom-4 inset-x-4 text-center z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-darkbrown/80 backdrop-blur-md text-ivory text-xs font-serif tracking-widest border border-gold/40">
                  {heroPhoto.caption}
                </span>
              </div>
            </div>

            {/* Secondary Floating Polaroids Accent (Bottom-Left / Right) */}
            <motion.div
              className="absolute -bottom-6 -left-6 sm:-left-10 w-36 sm:w-44 aspect-[4/5] bg-ivory-light p-2 rounded-lg shadow-polaroid border border-gold/40 rotate-[-6deg] hidden sm:block z-20"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[80%] rounded overflow-hidden">
                <Image
                  src={secondaryPhoto.src}
                  alt="Temple Blessings"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <p className="text-[10px] text-center font-serif text-darkbrown/70 mt-1 truncate">
                Temple Blessings
              </p>
            </motion.div>

            {/* Golden Wax Seal Emblem Accent */}
            <div className="absolute -top-5 -right-5 z-20">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8F3E48] to-[#4E1F25] border-2 border-gold flex flex-col items-center justify-center text-ivory shadow-lg">
                <span className="text-[9px] font-serif uppercase tracking-widest text-gold-light">
                  Est.
                </span>
                <span className="text-base font-serif font-bold text-ivory leading-none">
                  2006
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <div className="absolute bottom-4 inset-x-0 flex flex-col items-center justify-center text-center z-20 pointer-events-auto">
        <button
          onClick={scrollToNext}
          aria-label="Scroll down to begin journey"
          className="group flex flex-col items-center gap-1.5 text-darkbrown/60 hover:text-burgundy transition-colors focus:outline-none"
        >
          <span className="text-[11px] font-serif tracking-[0.25em] uppercase">
            Scroll To Explore
          </span>
          <div className="w-6 h-9 rounded-full border border-gold/60 p-1 flex justify-center shadow-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
