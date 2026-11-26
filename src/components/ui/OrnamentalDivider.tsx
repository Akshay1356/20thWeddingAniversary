'use client';

import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'burgundy' | 'subtle';
  showDiamond?: boolean;
}

export default function OrnamentalDivider({
  className = '',
  variant = 'gold',
  showDiamond = true,
}: OrnamentalDividerProps) {
  const strokeColor =
    variant === 'gold'
      ? '#C9A45C'
      : variant === 'burgundy'
      ? '#722F37'
      : '#DFC58B';

  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      {/* Left Flourish Line */}
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-[#C9A45C]" />

      {/* Center Traditional Motif */}
      {showDiamond && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold shrink-0 opacity-90"
        >
          <path
            d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z"
            fill={strokeColor}
            fillOpacity="0.15"
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          <circle cx="14" cy="14" r="2.5" fill={strokeColor} />
          <circle cx="6" cy="14" r="1" fill={strokeColor} opacity="0.6" />
          <circle cx="22" cy="14" r="1" fill={strokeColor} opacity="0.6" />
          <circle cx="14" cy="6" r="1" fill={strokeColor} opacity="0.6" />
          <circle cx="14" cy="22" r="1" fill={strokeColor} opacity="0.6" />
        </svg>
      )}

      {/* Right Flourish Line */}
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#C9A45C] via-[#C9A45C]/60 to-transparent" />
    </div>
  );
}
