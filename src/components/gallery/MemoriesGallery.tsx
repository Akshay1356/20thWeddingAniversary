'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

type FilterCategory = 'all' | 'couple' | 'family' | 'travel' | 'celebration';

export default function MemoriesGallery() {
  const { allPhotos, openLightbox } = useAnniversary();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredPhotos = allPhotos.filter((photo) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'couple') return photo.category === 'couple' || photo.role.includes('couple');
    if (activeFilter === 'family') return photo.category === 'family' || photo.role.includes('family');
    if (activeFilter === 'travel') return photo.category === 'travel' || photo.category === 'early_days';
    if (activeFilter === 'celebration') return photo.category === 'celebration' || photo.category === 'spiritual';
    return true;
  });

  const filterTabs: { id: FilterCategory; label: string; tamil: string }[] = [
    { id: 'all', label: 'All Moments', tamil: 'அனைத்து நினைவுகள்' },
    { id: 'couple', label: 'Couple Journey', tamil: 'இருவர் பயணம்' },
    { id: 'family', label: 'Family & Roots', tamil: 'குடும்பம்' },
    { id: 'travel', label: 'Travel Adventures', tamil: 'பயணங்கள்' },
    { id: 'celebration', label: 'Festivals & Blessings', tamil: 'திருவிழா & ஆன்மீகம்' },
  ];

  return (
    <section
      id="memories-gallery"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#FCF5E9] paper-texture overflow-hidden"
    >
      {/* Decorative Traditional Motifs */}
      <div className="absolute top-10 left-8 pointer-events-none opacity-20 hidden lg:block">
        <KolamMotif size={100} color="#C9A45C" />
      </div>
      <div className="absolute top-10 right-8 pointer-events-none opacity-20 hidden lg:block">
        <KolamMotif size={100} color="#C9A45C" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-deep text-xs font-serif uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-gold-dark" />
              <span>Chapter III • The Living Archive</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mb-2">
              20 Years. Countless Memories.
            </h2>

            <p className="font-tamil text-gold-dark text-lg mb-2">
              இருபது ஆண்டுகள் • எண்ணற்ற அழகிய தருணங்கள்
            </p>

            <OrnamentalDivider className="my-3" />

            <p className="font-serif italic text-base sm:text-lg text-darkbrown/80 max-w-xl mx-auto">
              A curated family collection capturing laughter, travel, love and unforgettable milestones.
            </p>
          </motion.div>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-burgundy text-ivory border-burgundy shadow-sm shadow-burgundy/30'
                    : 'bg-ivory-light text-darkbrown/80 border-gold/30 hover:border-gold hover:text-burgundy'
                }`}
              >
                <span>{tab.label}</span>
                <span className="hidden sm:inline opacity-70 ml-1.5 text-[11px] font-tamil">
                  • {tab.tamil}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => {
              const globalIndex = allPhotos.findIndex((p) => p.id === photo.id);
              const isHeroic = index % 7 === 0;

              return (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group cursor-pointer ${
                    isHeroic ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(globalIndex)}
                >
                  <div className="bg-ivory-light p-3 rounded-2xl shadow-polaroid border border-gold/30 hover:border-gold hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full">
                    {/* Image Box */}
                    <div
                      className={`relative w-full rounded-xl overflow-hidden bg-ivory-dark ${
                        isHeroic ? 'aspect-[16/11]' : photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes={
                          isHeroic
                            ? '(max-width: 768px) 100vw, 800px'
                            : '(max-width: 768px) 100vw, 400px'
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-darkbrown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-ivory/90 backdrop-blur-sm text-burgundy flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Tag pill */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-darkbrown/70 backdrop-blur-md text-gold-light text-[10px] font-serif tracking-wider border border-gold/30">
                        {photo.tag}
                      </div>
                    </div>

                    {/* Caption Card Footer */}
                    <div className="pt-3 px-1">
                      <p className="font-serif text-sm font-medium text-darkbrown/90 leading-snug">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Footer Note */}
        <div className="text-center mt-12 text-xs font-serif text-darkbrown/60 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Showing {filteredPhotos.length} treasured memories • Click any photograph for high-res view</span>
        </div>
      </div>
    </section>
  );
}
