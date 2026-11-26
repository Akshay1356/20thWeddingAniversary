'use client';

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import confetti from 'canvas-confetti';
import { ANNIVERSARY_CONFIG, PhotoItem } from '@/config/anniversaryData';
import { UNLOCK_TIMESTAMP } from '@/lib/timeConstants';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isUnlocked: boolean;
  hasInitialized: boolean;
}

interface AnniversaryContextType {
  // Audio state
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  audioDuration: number;
  audioCurrentTime: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (v: number) => void;
  ensureAudioPlaying: () => void;

  // Countdown & Unlock state
  countdown: CountdownState;
  isUnlocked: boolean;
  isSurpriseOpened: boolean;
  openSurprise: () => void;

  // Celebrations & Lightbox
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
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
    isUnlocked: false,
    hasInitialized: false,
  });

  const [isSurpriseOpened, setIsSurpriseOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const serverOffsetRef = useRef<number>(0);
  const allPhotos = ANNIVERSARY_CONFIG.photos;

  // Compute countdown from synchronized server time
  const calculateCountdown = useCallback(() => {
    const now = Date.now() + serverOffsetRef.current;
    const diffMs = UNLOCK_TIMESTAMP - now;

    if (diffMs <= 0) {
      setCountdown((prev) => {
        if (prev.isUnlocked && prev.hasInitialized) return prev;
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalSeconds: 0,
          isUnlocked: true,
          hasInitialized: true,
        };
      });
      return true;
    }

    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCountdown({
      days,
      hours,
      minutes,
      seconds,
      totalSeconds,
      isUnlocked: false,
      hasInitialized: true,
    });
    return false;
  }, []);

  // Fetch authoritative server time
  const syncServerTime = useCallback(async () => {
    try {
      const clientFetchStart = Date.now();
      const res = await fetch('/api/time', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        const clientFetchEnd = Date.now();
        const roundTripLatency = (clientFetchEnd - clientFetchStart) / 2;
        serverOffsetRef.current = data.serverTime + roundTripLatency - clientFetchEnd;
      }
    } catch (e) {
      console.warn('Using device time fallback:', e);
    }
    calculateCountdown();
  }, [calculateCountdown]);

  // Ensure audio is playing seamlessly
  const ensureAudioPlaying = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused || audio.muted) {
      audio.muted = false;
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, []);

  // Audio Lifecycle: Play always automatically without asking user
  useEffect(() => {
    const audio = new Audio(ANNIVERSARY_CONFIG.audio.src);
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.5; // Initial volume 50%
    audioRef.current = audio;

    const onLoadedMetadata = () => setAudioDuration(audio.duration || 0);
    const onTimeUpdate = () => setAudioCurrentTime(audio.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // 1. Attempt unmuted autoplay immediately on mount
    const playAttempt = audio.play();
    if (playAttempt !== undefined) {
      playAttempt
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser Autoplay policy restricts unmuted sound before gesture,
          // start muted autoplay so the audio engine is actively buffered and running
          audio.muted = true;
          audio.play().catch(() => {});
        });
    }

    // 2. Unmute and guarantee sound on ANY first interaction anywhere on page (pointerdown, touch, click, scroll)
    const unlockAndPlaySound = () => {
      if (audio.paused || audio.muted) {
        audio.muted = false;
        audio.volume = 0.5;
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    const gestureEvents = [
      'pointerdown',
      'touchstart',
      'touchend',
      'mousedown',
      'click',
      'keydown',
      'wheel',
      'scroll',
    ];

    gestureEvents.forEach((evt) => {
      window.addEventListener(evt, unlockAndPlaySound, { capture: true, passive: true });
      document.addEventListener(evt, unlockAndPlaySound, { capture: true, passive: true });
    });

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, unlockAndPlaySound, { capture: true });
        document.removeEventListener(evt, unlockAndPlaySound, { capture: true });
      });
    };
  }, []);

  // Timer loop & Visibility change handling
  useEffect(() => {
    syncServerTime();

    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        syncServerTime();
        // Ensure audio resumes if tab was backgrounded
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityOrFocus);
    window.addEventListener('focus', handleVisibilityOrFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('visibilitychange', handleVisibilityOrFocus);
      window.removeEventListener('focus', handleVisibilityOrFocus);
    };
  }, [syncServerTime, calculateCountdown]);

  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#C9A45C', '#E8D3A2', '#722F37', '#8F3E48', '#E8B4B8', '#FFFDF9'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 30, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const triggerFireworks = useCallback(() => {
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
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.muted = false;
      audioRef.current.play().catch((e) => console.warn(e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const setVolume = (v: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(1, v));
    audioRef.current.volume = clamped;
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  // Continue playing seamlessly without restarting
  const openSurprise = () => {
    setIsSurpriseOpened(true);
    triggerConfetti();

    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.muted = false;
        audioRef.current.volume = volume || 0.6;
        audioRef.current.play().catch((err) => console.warn('Audio play error:', err));
      }
    }
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
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
        isPlaying,
        isMuted,
        volume,
        audioDuration,
        audioCurrentTime,
        togglePlay,
        toggleMute,
        setVolume,
        ensureAudioPlaying,
        countdown,
        isUnlocked: countdown.isUnlocked,
        isSurpriseOpened,
        openSurprise,
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
