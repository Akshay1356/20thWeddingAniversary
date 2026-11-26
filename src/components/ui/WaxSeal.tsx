'use client';

import React from 'react';

interface WaxSealProps {
  size?: number;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export default function WaxSeal({
  size = 72,
  className = '',
  onClick,
  interactive = false,
}: WaxSealProps) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none ${
        interactive ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md"
      >
        <defs>
          <radialGradient id="waxGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#8F3E48" />
            <stop offset="45%" stopColor="#722F37" />
            <stop offset="85%" stopColor="#4E1F25" />
            <stop offset="100%" stopColor="#301418" />
          </radialGradient>
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D3A2" />
            <stop offset="50%" stopColor="#C9A45C" />
            <stop offset="100%" stopColor="#8A6729" />
          </linearGradient>
          <filter id="innerBevel" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset dx="1" dy="2" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
            <feFlood floodColor="#000" floodOpacity="0.4" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Outer Organic Wax Edge */}
        <path
          d="M50 4 C65 2, 78 8, 88 18 C96 28, 98 42, 96 55 C94 68, 88 80, 78 89 C67 97, 52 98, 38 96 C24 93, 12 84, 6 71 C0 58, 2 44, 8 32 C14 18, 28 6, 50 4 Z"
          fill="url(#waxGrad)"
        />

        {/* Inner Ring with Subtle Golden Edge */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="#5E232B"
          stroke="url(#goldRim)"
          strokeWidth="1.8"
          strokeDasharray="1 0"
          filter="url(#innerBevel)"
        />

        {/* Laurel Wreath */}
        <path
          d="M32 40 C30 48, 32 58, 38 65 C44 71, 50 72, 50 72 M68 40 C70 48, 68 58, 62 65 C56 71, 50 72, 50 72"
          stroke="url(#goldRim)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Roman XX or 20 */}
        <text
          x="50"
          y="48"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="serif"
          fontWeight="bold"
          fontSize="20"
          fill="url(#goldRim)"
          letterSpacing="1.5"
          className="select-none"
        >
          20
        </text>

        {/* Subtitle Initials */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="serif"
          fontSize="7.5"
          fontWeight="600"
          fill="#E8D3A2"
          letterSpacing="2"
          opacity="0.9"
        >
          P &amp; A
        </text>
      </svg>
    </div>
  );
}
