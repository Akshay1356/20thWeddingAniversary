'use client';

import React from 'react';
import { AnniversaryProvider } from '@/components/context/AnniversaryContext';
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

export default function Home() {
  return (
    <AnniversaryProvider>
      <main className="min-h-screen bg-ivory text-darkbrown relative selection:bg-gold-light selection:text-burgundy">
        {/* Full-Screen Interactive Opening Experience */}
        <OpeningSurprise />

        {/* Persistent Floating Background Music Controller */}
        <AudioPlayer />

        {/* Main Anniversary Digital Celebration Content */}
        <div className="relative">
          {/* Hero Section */}
          <AnniversaryHero />

          {/* Section 7: Where It All Began (2006 Wedding & Early Beginnings) */}
          <WhereItAllBegan />

          {/* Section 8: Twenty Years of Togetherness (Milestones with counters) */}
          <MilestonesSection />

          {/* Section 10: From Then to Now (Interactive comparison) */}
          <ThenAndNow />

          {/* Section 11: The Beautiful Life You've Built Together (Family & Parenting) */}
          <FamilySection />

          {/* Section 9: A Walk Down Memory Lane (Editorial Photo Gallery) */}
          <MemoriesGallery />

          {/* Section 12: A Little Letter for Amma & Appa (Interactive handwritten letter) */}
          <PersonalLetter />

          {/* Section 13: Grand Finale (Closing fireworks & celebration) */}
          <GrandFinale />
        </div>

        {/* Global Photo Lightbox for full-resolution view */}
        <PhotoLightbox />
      </main>
    </AnniversaryProvider>
  );
}
