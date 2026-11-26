'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, Users, Sparkles } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function FamilySection() {
  const { familySection } = ANNIVERSARY_CONFIG;
  const { openLightbox, allPhotos } = useAnniversary();

  const mainFamilyPhoto = allPhotos.find((p) => p.id === familySection.mainPhotoId) || allPhotos[21];
  const journeyPhotos = familySection.journeyPhotos
    .map((id) => allPhotos.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-ivory paper-texture overflow-hidden">
      {/* Decorative Traditional Patterns */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={120} color="#C9A45C" />
      </div>
      <div className="absolute bottom-12 right-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={120} color="#C9A45C" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-serif uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5 text-gold-dark" />
              <span>Chapter II • Generations &amp; Heritage</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mb-3">
              The Beautiful Life You&apos;ve Built Together
            </h2>

            <p className="font-tamil text-gold-dark text-lg mb-2">
              குடும்பத்தின் ஆணிவேர் • அன்பின் திருவுருவம்
            </p>

            <OrnamentalDivider className="my-3" />

            <p className="font-serif italic text-lg sm:text-xl text-darkbrown/85 leading-relaxed max-w-2xl mx-auto">
              &ldquo;{familySection.quote}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Centerpiece: Grand Family Celebration Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-20 group cursor-pointer"
          onClick={() => {
            const idx = allPhotos.findIndex((p) => p.id === mainFamilyPhoto.id);
            if (idx !== -1) openLightbox(idx);
          }}
        >
          <div className="bg-[#FFFDF9] p-4 sm:p-6 lg:p-8 rounded-3xl shadow-vintage-card border-2 border-gold/40 transition-all duration-500 group-hover:shadow-2xl">
            {/* Ornate Gold Frame Corners */}
            <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-gold rounded-tl-sm pointer-events-none" />
            <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-gold rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-gold rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-gold rounded-br-sm pointer-events-none" />

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-ivory-dark">
              <Image
                src={mainFamilyPhoto.src}
                alt={mainFamilyPhoto.caption}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/60 via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory">
                <span className="px-3.5 py-1.5 rounded-full bg-darkbrown/80 backdrop-blur-md text-xs sm:text-sm font-serif tracking-widest border border-gold/40">
                  {mainFamilyPhoto.caption}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-darkbrown text-xs font-serif font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generations United</span>
                </span>
              </div>
            </div>

            <div className="mt-4 px-2 text-center">
              <p className="font-serif italic text-base sm:text-lg text-burgundy">
                Grand celebration uniting all generations in honor of family, love, and tradition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Journey of Parenthood: Asymmetrical Curated Grid */}
        <div className="mb-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-serif text-burgundy font-semibold">
              Treasured Milestones
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-darkbrown mt-1">
              The Journey of Love &amp; Parenting
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyPhotos.map((photo, i) => {
              if (!photo) return null;
              const photoIndex = allPhotos.findIndex((p) => p.id === photo.id);
              return (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                  className="bg-ivory-light p-3 rounded-2xl shadow-polaroid border border-gold/30 group cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    if (photoIndex !== -1) openLightbox(photoIndex);
                  }}
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-ivory-dark">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-darkbrown/70 backdrop-blur-sm text-gold-light text-[10px] font-serif">
                      {photo.tag}
                    </div>
                  </div>
                  <div className="pt-3 px-1">
                    <p className="font-handwriting text-lg text-darkbrown leading-tight truncate">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
