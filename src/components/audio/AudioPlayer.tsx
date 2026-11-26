'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Volume1 } from 'lucide-react';
import { useAnniversary } from '@/components/context/AnniversaryContext';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';

export default function AudioPlayer() {
  const { isPlaying, isMuted, volume, setVolume, togglePlay, toggleMute } = useAnniversary();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      aria-label="Background music controls"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 select-none"
    >
      {/* Expanded Pill with Volume Slider & Details */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out bg-ivory-light/95 backdrop-blur-md border border-gold/40 shadow-gold-soft rounded-full py-2 px-4 flex items-center gap-3 ${
          isExpanded ? 'max-w-[340px] opacity-100' : 'max-w-0 px-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
            <Music className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <p className="text-xs font-serif font-semibold text-burgundy tracking-wide leading-tight truncate max-w-[110px]">
              {ANNIVERSARY_CONFIG.audio.title}
            </p>
            <p className="text-[10px] text-darkbrown/60 uppercase tracking-widest">
              Theme Song
            </p>
          </div>
        </div>

        {/* Volume Slider */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <Volume1 className="w-3 h-3 text-gold-dark" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            aria-label="Volume slider"
            className="w-16 h-1 bg-gold/30 rounded-lg appearance-none cursor-pointer accent-gold"
          />
        </div>

        {/* Mute button inside expanded view */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          className="p-1.5 rounded-full hover:bg-gold/20 text-burgundy transition-colors shrink-0 cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <button
          onClick={togglePlay}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="w-12 h-12 sm:w-13 sm:h-13 p-3.5 rounded-full bg-gradient-to-br from-[#8F3E48] to-[#4E1F25] text-ivory shadow-burgundy-soft border border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold/60 cursor-pointer"
        >
          {/* Animated Gold Ring Pulsing while playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-30" />
          )}

          {/* Equalizer Waveform Bars when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-4">
              <span className="w-[3px] bg-gold rounded-full h-2 animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-[3px] bg-ivory rounded-full h-4 animate-[pulse_0.6s_ease-in-out_infinite_0.2s]" />
              <span className="w-[3px] bg-gold-light rounded-full h-3 animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
              <span className="w-[3px] bg-gold rounded-full h-1.5 animate-[pulse_0.7s_ease-in-out_infinite_0.1s]" />
            </div>
          ) : (
            <Play className="w-5 h-5 ml-0.5 text-gold-light fill-gold-light/40" />
          )}
        </button>

        {/* Quick tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-darkbrown/90 text-ivory text-[11px] px-2.5 py-1 rounded whitespace-nowrap font-serif tracking-wider hidden sm:block">
          {isPlaying ? 'Pause "Nooru Varusham"' : 'Play "Nooru Varusham"'}
        </div>
      </div>
    </aside>
  );
}
