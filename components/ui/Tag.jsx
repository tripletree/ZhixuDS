import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Pill chips — from the AI-chat suggestion chips; tone tints follow the data-series palette */
const TONES = {
  neutral: {
    border: 'color-mix(in srgb, var(--color-bone) 10%, transparent)',
    background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
    color: 'var(--color-bone-dim)',
  },
  azure: {
    border: 'color-mix(in srgb, var(--color-azure) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-azure) 10%, transparent)',
    color: 'var(--color-azure-bright)',
  },
  champagne: {
    border: 'color-mix(in srgb, var(--color-champagne) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-champagne) 10%, transparent)',
    color: 'var(--color-champagne)',
  },
  rouge: {
    border: 'color-mix(in srgb, var(--color-rouge) 35%, transparent)',
    background: 'color-mix(in srgb, var(--color-rouge) 12%, transparent)',
    color: 'color-mix(in srgb, var(--color-rouge) 55%, var(--color-bone))',
  },
};
export function Tag({ tone = 'neutral', size = 'md', icon, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const sz = size === 'sm' ? { padding: '4px 10px', fontSize: 10 } : { padding: '5px 12px', fontSize: 12 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999,
      border: `1px solid ${t.border}`, background: t.background, color: t.color,
      fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap', ...sz, ...style,
    }} {...rest}>
      {icon ? <Icon name={icon} size={size === 'sm' ? 10 : 12} strokeWidth={1.75} /> : null}
      {children}
    </span>
  );
}
/* Live status dot with ping halo — from the hero's floating annotations */
export function StatusDot({ tone = 'azure', label, style }) {
  const c = tone === 'champagne' ? 'var(--color-champagne)' : tone === 'rouge' ? 'var(--color-rouge)' : 'var(--color-azure)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}>
      <span style={{ position: 'relative', display: 'inline-flex', width: 6, height: 6 }}>
        <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: 999, background: `color-mix(in srgb, ${c} 60%, transparent)` }}></span>
        <span style={{ position: 'relative', display: 'inline-flex', width: 6, height: 6, borderRadius: 999, background: c }}></span>
      </span>
      {label ? <span style={{ fontSize: 12, letterSpacing: '0.02em', color: 'var(--color-bone-soft)' }}>{label}</span> : null}
    </span>
  );
}
