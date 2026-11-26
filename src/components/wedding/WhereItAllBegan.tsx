'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function WhereItAllBegan() {
  const { openLightbox, allPhotos } = useAnniversary();
  const { whereItAllBegan } = ANNIVERSARY_CONFIG;

  const beginningPhotos = whereItAllBegan
    .map((id) => allPhotos.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section
      id="where-it-all-began"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F4ECE0] paper-texture overflow-hidden"
    >
      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-25">
        <KolamMotif size={80} color="#722F37" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none opacity-25">
        <KolamMotif size={80} color="#722F37" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-serif uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5 text-gold-dark" />
              <span>Chapter I • The Beginning</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mb-2">
              Where It All Began
            </h2>

            <p className="font-serif italic text-gold-dark text-lg sm:text-xl tracking-wider">
              27 November 2006
            </p>

            <OrnamentalDivider className="my-4" />

            <p className="font-serif text-lg text-darkbrown/85 leading-relaxed italic max-w-xl mx-auto">
              &ldquo;Twenty years ago, two people began a beautiful journey together. Today, we
              celebrate everything that journey has become.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Vintage Album Composition */}
        <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-vintage-card border border-gold/40">
          {/* Album Corner Brass Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-md pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-md pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-md pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-md pointer-events-none" />

          {/* Album Title Header Ribbon */}
          <div className="text-center mb-10 pb-4 border-b border-gold/25">
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-burgundy/70">
              Archived Memories • Circa 2006
            </span>
          </div>

          {/* Editorial Grid of Vintage Photographs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Main Showcase Photo (Ferry ride together) */}
            {beginningPhotos[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="md:col-span-7 relative group cursor-pointer"
                onClick={() => {
                  const idx = allPhotos.findIndex((p) => p.id === beginningPhotos[0]?.id);
                  if (idx !== -1) openLightbox(idx);
                }}
              >
                <div className="bg-ivory-light p-3 sm:p-4 rounded-xl shadow-polaroid border border-gold/30 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  {/* Photo Paper Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-ivory-dark">
                    <Image
                      src={beginningPhotos[0].src}
                      alt={beginningPhotos[0].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/40 via-transparent to-transparent opacity-40" />
                  </div>
                  {/* Handwritten-style caption */}
                  <div className="pt-3 px-1 flex items-center justify-between">
                    <p className="font-handwriting text-xl sm:text-2xl text-darkbrown">
                      {beginningPhotos[0].caption}
                    </p>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-gold-dark px-2 py-0.5 rounded bg-gold/10">
                      2006 Era
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Side Column: Coastal Fort & Early In-Flight Flights */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {beginningPhotos.slice(1, 3).map((photo, i) => {
                if (!photo) return null;
                const photoIndex = allPhotos.findIndex((p) => p.id === photo.id);
                return (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      if (photoIndex !== -1) openLightbox(photoIndex);
                    }}
                  >
                    <div className="bg-ivory-light p-3 rounded-xl shadow-polaroid border border-gold/30 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                      <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-ivory-dark">
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="pt-2 px-1 flex items-center justify-between">
                        <p className="font-handwriting text-lg text-darkbrown truncate pr-2">
                          {photo.caption}
                        </p>
                        <Compass className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Vintage Photo Album Postcard Footnote */}
          <div className="mt-10 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-darkbrown/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Click on any photograph to view in full resolution</span>
            </div>
            <span className="italic font-serif">
              &ldquo;From that first day until today, your love has been our family&apos;s anchor.&rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
