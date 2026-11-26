'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnniversaryProvider, useAnniversary } from '@/components/context/AnniversaryContext';
import CountdownScreen from '@/components/countdown/CountdownScreen';
import OpeningSurprise from '@/components/opening/OpeningSurprise';
import AudioPlayer from '@/components/audio/AudioPlayer';
import AnniversaryHero from '@/components/hero/AnniversaryHero';
import WhereItAllBegan from '@/components/wedding/WhereItAllBegan';
import MilestonesSection from '@/components/milestones/MilestonesSection';
import ThenAndNow from '@/components/comparison/ThenAndNow';
import FamilySection from '@/components/family/FamilySection';
import MemoriesGallery from '@/components/gallery/MemoriesGallery';
import PersonalLetter from '@/components/letter/PersonalLetter';
import GrandFinale from '@/components/finale/GrandFinale';
import PhotoLightbox from '@/components/gallery/PhotoLightbox';

function MainAppContent() {
  const { isUnlocked, countdown } = useAnniversary();
  const [countdownFadeDone, setCountdownFadeDone] = useState(false);

  // Prevent flash of content before initial clock synchronization
  if (!countdown.hasInitialized) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1C120E] text-ivory">
        <div className="w-10 h-10 border-2 border-gold/40 border-t-gold rounded-full animate-spin mb-4" />
        <p className="font-serif italic text-gold-light text-sm tracking-widest uppercase">
          Preparing Celebration...
        </p>
      </div>
    );
  }

  // Before midnight: Show Countdown Screen
  const showCountdown = !isUnlocked || !countdownFadeDone;

  return (
    <main className="min-h-screen bg-ivory text-darkbrown relative selection:bg-gold-light selection:text-burgundy">
      {/* Persistent Global Audio Controller: NEVER unmounted during transitions */}
      <AudioPlayer />

      {/* Countdown Screen overlay before midnight */}
      <AnimatePresence>
        {!isUnlocked && (
          <CountdownScreen
            onUnlockComplete={() => {
              setCountdownFadeDone(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* When unlocked, display the complete Anniversary Experience */}
      {(isUnlocked || countdownFadeDone) && (
        <>
          {/* Full-Screen Interactive Opening Envelope Experience */}
          <OpeningSurprise />

          {/* Main Anniversary Celebration Chapters */}
          <div className="relative">
            {/* Grand Hero Section */}
            <AnniversaryHero />

            {/* Chapter I: Where It All Began (2006 Vintage Album) */}
            <WhereItAllBegan />

            {/* Twenty Years of Togetherness (Animated Milestones) */}
            <MilestonesSection />

            {/* Chapter II: From Then to Now (Interactive Comparison) */}
            <ThenAndNow />

            {/* Chapter III: The Beautiful Life You've Built Together (Family & Parenting) */}
            <FamilySection />

            {/* Chapter IV: 20 Years. Countless Memories. (Curated Living Archive Gallery) */}
            <MemoriesGallery />

            {/* Chapter V: A Little Letter for Amma & Appa (Personal Handwritten Letter) */}
            <PersonalLetter />

            {/* Grand Finale with Fireworks and Celebrate Again */}
            <GrandFinale />
          </div>

          {/* Global High-Resolution Touch Lightbox */}
          <PhotoLightbox />
        </>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <AnniversaryProvider>
      <MainAppContent />
    </AnniversaryProvider>
  );
}
