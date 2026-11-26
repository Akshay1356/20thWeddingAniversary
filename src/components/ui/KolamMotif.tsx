'use client';

import React from 'react';

interface KolamMotifProps {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
}

export default function KolamMotif({
  className = '',
  size = 48,
  opacity = 0.4,
  color = '#C9A45C',
}: KolamMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Central auspicious floral kolam */}
      <circle cx="50" cy="50" r="4" fill={color} />
      <circle cx="35" cy="50" r="2.5" fill={color} />
      <circle cx="65" cy="50" r="2.5" fill={color} />
      <circle cx="50" cy="35" r="2.5" fill={color} />
      <circle cx="50" cy="65" r="2.5" fill={color} />
      
      {/* Diagonals */}
      <circle cx="39" cy="39" r="2" fill={color} />
      <circle cx="61" cy="39" r="2" fill={color} />
      <circle cx="39" cy="61" r="2" fill={color} />
      <circle cx="61" cy="61" r="2" fill={color} />

      {/* Interlacing Kolam Loops */}
      <path
        d="M50 20 C65 20, 80 35, 80 50 C80 65, 65 80, 50 80 C35 80, 20 65, 20 50 C20 35, 35 20, 50 20 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <path
        d="M50 28 C62 28, 72 38, 72 50 C72 62, 62 72, 50 72 C38 72, 28 62, 28 50 C28 38, 38 28, 50 28 Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M50 12 L50 88 M12 50 L88 50"
        stroke={color}
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />
      
      {/* Corner Lotus Petals */}
      <path
        d="M50 15 C45 25, 45 35, 50 45 C55 35, 55 25, 50 15 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M50 85 C45 75, 45 65, 50 55 C55 65, 55 75, 50 85 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M15 50 C25 45, 35 45, 45 50 C35 55, 25 55, 15 50 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M85 50 C75 45, 65 45, 55 50 C65 55, 75 55, 85 50 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="0.8"
      />
    </svg>
  );
}
