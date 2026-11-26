'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Sparkles, Heart, Music } from 'lucide-react';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import WaxSeal from '@/components/ui/WaxSeal';
import KolamMotif from '@/components/ui/KolamMotif';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';

interface CountdownScreenProps {
  onUnlockComplete?: () => void;
}

export default function CountdownScreen({ onUnlockComplete }: CountdownScreenProps) {
  const { countdown, isPlaying, ensureAudioPlaying, triggerConfetti, triggerFireworks } = useAnniversary();

  const [isUnlockingAnim, setIsUnlockingAnim] = useState(false);
  const [unlockFinished, setUnlockFinished] = useState(false);

  // Trigger celebration and sequence when midnight arrives
  useEffect(() => {
    if (countdown.isUnlocked && countdown.hasInitialized && !isUnlockingAnim && !unlockFinished) {
      setIsUnlockingAnim(true);
      triggerConfetti();
      triggerFireworks();

      const timer = setTimeout(() => {
        setUnlockFinished(true);
        if (onUnlockComplete) {
          onUnlockComplete();
        }
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [countdown.isUnlocked, countdown.hasInitialized, isUnlockingAnim, unlockFinished, triggerConfetti, triggerFireworks, onUnlockComplete]);

  if (unlockFinished) return null;

  const padZero = (n: number) => n.toString().padStart(2, '0');

  return (
    <motion.div
      key="countdown-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      onPointerDown={ensureAudioPlaying}
      onClick={ensureAudioPlaying}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gradient-to-b from-[#1C120E] via-[#2A181C] to-[#150D0A] text-ivory select-none cursor-pointer"
    >
      {/* Ambient Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#722F37]/35 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9A45C]/25 blur-[120px] pointer-events-none" />

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold-light/60 shadow-sm shadow-gold"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.85, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.4) % 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Traditional Tamil Kolam Corner Accents */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={96} color="#E8D3A2" />
      </div>
      <div className="absolute top-6 right-6 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={96} color="#E8D3A2" />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={96} color="#E8D3A2" />
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={96} color="#E8D3A2" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto py-8">
        {/* Top Mystery Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs font-serif uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span>Something Special Awaits</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-wide">
            Amma &amp; Appa
          </h1>

          <p className="font-serif italic text-gold-light/90 text-sm sm:text-base tracking-widest uppercase mt-2">
            A little surprise, made with lots of love.
          </p>
        </motion.div>

        <OrnamentalDivider className="my-2 max-w-xs" />

        {/* Sealed Envelope Graphic with Wax Seal & Golden Lock */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative my-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={ensureAudioPlaying}
        >
          {/* Miniature Ornate Ivory Envelope */}
          <div className="relative w-56 sm:w-64 aspect-[1.5/1] rounded-xl bg-[#FCF5E9] shadow-2xl border border-gold/50 flex flex-col items-center justify-center p-4 overflow-hidden">
            <div className="absolute inset-1.5 border border-gold/30 rounded-lg pointer-events-none" />

            {/* Subtle flap folds */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                background: 'linear-gradient(to bottom, #722F37 0%, transparent 60%)',
              }}
            />

            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-burgundy/80 mb-0.5">
              Secret Delivery
            </span>
            <span className="font-serif text-sm font-semibold text-darkbrown tracking-wider">
              M. Prakash &amp; P. Anitha
            </span>
            <span className="text-[10px] font-tamil text-gold-dark mt-0.5">
              நூறு வருஷம் • 20th Anniversary
            </span>

            {/* Wax Seal overlapping center bottom */}
            <div className="absolute -bottom-4 z-20">
              <WaxSeal size={52} />
            </div>
          </div>

          {/* Animated Golden Lock Badge */}
          <motion.div
            animate={
              isUnlockingAnim
                ? { scale: [1, 1.25, 0], rotate: [0, -10, 20], opacity: [1, 1, 0] }
                : { y: [0, -4, 0] }
            }
            transition={
              isUnlockingAnim
                ? { duration: 1.2, ease: 'easeInOut' }
                : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
            className="absolute -top-3 -right-3 sm:-right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E8D3A2] via-[#C9A45C] to-[#997836] p-0.5 shadow-xl shadow-gold/30 flex items-center justify-center text-darkbrown border border-ivory"
          >
            {isUnlockingAnim ? (
              <Unlock className="w-5 h-5 text-burgundy animate-bounce" />
            ) : (
              <Lock className="w-5 h-5 text-burgundy" />
            )}
          </motion.div>

          {/* Gentle reminder to tap anywhere for sound if browser restricted silent sound on first render */}
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-6 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif italic text-gold-light/90"
            >
              <Music className="w-3.5 h-3.5 text-gold-light" />
              <span>Tap anywhere to start the celebration music ♫</span>
            </motion.div>
          )}
        </motion.div>

        {/* Unlock Status / Announcement Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 mb-4"
        >
          {isUnlockingAnim ? (
            <div className="space-y-1">
              <span className="text-sm uppercase tracking-[0.3em] font-serif text-gold-light animate-pulse block">
                The Wait Is Over!
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gold-gradient font-bold drop-shadow">
                Happy 20th Wedding Anniversary!
              </h2>
            </div>
          ) : (
            <p className="font-serif italic text-gold-light text-base sm:text-lg tracking-wider">
              Your surprise unlocks in
            </p>
          )}
        </motion.div>

        {/* Live Countdown Display: DAYS : HOURS : MINUTES : SECONDS */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 my-4 w-full max-w-2xl px-2">
          {[
            { label: 'DAYS', value: padZero(countdown.days) },
            { label: 'HOURS', value: padZero(countdown.hours) },
            { label: 'MINUTES', value: padZero(countdown.minutes) },
            { label: 'SECONDS', value: padZero(countdown.seconds) },
          ].map((unit) => (
            <div
              key={unit.label}
              className={`relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-b from-[#FFFDF9]/10 to-[#F5EBDA]/5 border border-gold/35 backdrop-blur-md shadow-2xl transition-all duration-300 ${
                isUnlockingAnim ? 'ring-2 ring-gold shadow-gold-soft scale-105' : ''
              }`}
            >
              {/* Corner Accents */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-gold/60 pointer-events-none" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-gold/60 pointer-events-none" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-gold/60 pointer-events-none" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-gold/60 pointer-events-none" />

              {/* Number with smooth transition */}
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: 8, opacity: 0.6 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-gold-gradient tracking-tight leading-none drop-shadow"
                >
                  {unit.value}
                </motion.span>
              </AnimatePresence>

              {/* Unit Label */}
              <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-ivory/70 mt-2 sm:mt-3">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subtext and Reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 space-y-1.5 text-center"
        >
          <p className="font-serif italic text-sm sm:text-base text-ivory-light flex items-center justify-center gap-1.5">
            <span>A surprise worth waiting for</span>
            <Heart className="w-3.5 h-3.5 text-rose fill-rose inline" />
          </p>
          <p className="font-serif text-xs sm:text-sm text-gold tracking-widest uppercase">
            27 November 2026 · Midnight
          </p>
          <p className="font-serif text-xs text-ivory/50 italic tracking-wide">
            Good things are worth the wait.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
