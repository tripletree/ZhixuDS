import React from 'react';
import { CountUp } from '../core/Reveal.jsx';
/* Metric block — numeral treatment from the dashboard's 机会指数 tile; ↑/↓ delta arrows are unicode per readme */
export function Stat({ label, value, suffix, delta, trend = 'up', size = 'md', animate = true, style }) {
  const num = { sm: 28, md: 36, lg: 48 }[size] || 36;
  const deltaColor = trend === 'down'
    ? 'color-mix(in srgb, var(--color-rouge) 70%, var(--color-bone))'
    : 'var(--color-azure-bright)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label ? <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--color-bone-dim)' }}>{label}</span> : null}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontSize: num, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--color-bone)' }}>
          {animate && typeof value === 'number' ? <CountUp to={value} /> : value}
        </span>
        {suffix ? <span style={{ fontSize: 14, color: 'var(--color-bone-dim)' }}>{suffix}</span> : null}
        {delta ? <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.02em', color: deltaColor }}>{trend === 'down' ? '↓' : '↑'} {delta}</span> : null}
      </div>
    </div>
  );
}
