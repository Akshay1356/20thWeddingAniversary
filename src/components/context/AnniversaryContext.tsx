'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import { ANNIVERSARY_CONFIG, PhotoItem } from '@/config/anniversaryData';

interface AnniversaryContextType {
  isSurpriseOpened: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  audioDuration: number;
  audioCurrentTime: number;
  openSurprise: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  triggerConfetti: () => void;
  triggerFireworks: () => void;
  lightboxIndex: number | null;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
  allPhotos: PhotoItem[];
}

const AnniversaryContext = createContext<AnniversaryContextType | undefined>(undefined);

export function AnniversaryProvider({ children }: { children: ReactNode }) {
  const [isSurpriseOpened, setIsSurpriseOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const allPhotos = ANNIVERSARY_CONFIG.photos;

  useEffect(() => {
    // Instantiate audio object on client
    const audio = new Audio(ANNIVERSARY_CONFIG.audio.src);
    audio.preload = 'auto';
    audio.loop = true;
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      setAudioDuration(audio.duration || 0);
    };

    const onTimeUpdate = () => {
      setAudioCurrentTime(audio.currentTime || 0);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const triggerConfetti = () => {
    // Rich Golden & Burgundy Wedding Confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#C9A45C', '#E8D3A2', '#722F37', '#8F3E48', '#E8B4B8', '#FFFDF9'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const triggerFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 9999,
      colors: ['#C9A45C', '#E8D3A2', '#722F37', '#E8B4B8', '#FFF'],
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const openSurprise = () => {
    setIsSurpriseOpened(true);
    triggerConfetti();

    // Start audio playback
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.85;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio autoplay restriction:', err);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.warn(e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <AnniversaryContext.Provider
      value={{
        isSurpriseOpened,
        isPlaying,
        isMuted,
        audioDuration,
        audioCurrentTime,
        openSurprise,
        togglePlay,
        toggleMute,
        triggerConfetti,
        triggerFireworks,
        lightboxIndex,
        openLightbox,
        closeLightbox,
        nextPhoto,
        prevPhoto,
        allPhotos,
      }}
    >
      {children}
    </AnniversaryContext.Provider>
  );
}

export function useAnniversary() {
  const context = useContext(AnniversaryContext);
  if (!context) {
    throw new Error('useAnniversary must be used within an AnniversaryProvider');
  }
  return context;
}
