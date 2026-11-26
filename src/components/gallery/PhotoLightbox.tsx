'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { useAnniversary } from '@/components/context/AnniversaryContext';

export default function PhotoLightbox() {
  const { lightboxIndex, closeLightbox, nextPhoto, prevPhoto, allPhotos } = useAnniversary();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  if (lightboxIndex === null) return null;

  const currentPhoto = allPhotos[lightboxIndex];
  if (!currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl select-none"
        onClick={closeLightbox}
      >
        {/* Top Control Bar with high z-index */}
        <div
          className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-[110] bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="text-gold font-serif text-sm tracking-widest uppercase">
              {lightboxIndex + 1} of {allPhotos.length}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/15 text-gold-light border border-gold/30 text-xs font-serif">
              <Tag className="w-3 h-3" />
              <span>{currentPhoto.tag}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-ivory flex items-center justify-center transition-all border border-white/20 focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6 text-ivory" />
          </button>
        </div>

        {/* Previous Button with high z-index */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevPhoto();
          }}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-ivory border border-gold/40 flex items-center justify-center transition-all cursor-pointer focus:outline-none pointer-events-auto shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gold" />
        </button>

        {/* Next Button with high z-index */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextPhoto();
          }}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-ivory border border-gold/40 flex items-center justify-center transition-all cursor-pointer focus:outline-none pointer-events-auto shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gold" />
        </button>

        {/* Center Image Container */}
        <div
          className="relative max-w-4xl max-h-[75vh] w-full h-full p-4 flex flex-col items-center justify-center z-[105] pointer-events-none"
        >
          <motion.div
            key={currentPhoto.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-h-[68vh] flex items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Bottom Caption Pill */}
          <div
            className="mt-3 text-center max-w-xl px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-gold/30 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-sm sm:text-base text-ivory tracking-wide">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
