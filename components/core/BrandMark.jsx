import React from 'react';
export function BrandMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0a0c10" />
      <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" stroke="#57b8d4" strokeOpacity="0.3" />
      <g stroke="#eceae1" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <path d="M20 18 V46" /><path d="M32 18 V46" /><path d="M44 18 V46" />
      </g>
      <g stroke="#57b8d4" strokeWidth="2" strokeLinecap="round">
        <path d="M16 26 H48" /><path d="M16 38 H48" />
      </g>
      <circle cx="44" cy="26" r="3.2" fill="#c9ad7c" />
    </svg>
  );
}
