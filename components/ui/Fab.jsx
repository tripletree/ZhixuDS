import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Floating action button — the azure glow treatment from 生成上身效果, as a 48px circle.
   Default AI entry: sparkles glyph. */
export function Fab({ icon = 'sparkles', label, onClick, fixed = false, offset = 24, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48,
        borderRadius: 999, cursor: 'pointer',
        border: `1px solid color-mix(in srgb, var(--color-azure) ${hover ? 55 : 40}%, transparent)`,
        background: `color-mix(in srgb, var(--color-azure) ${hover ? 24 : 15}%, transparent)`,
        color: 'var(--color-azure-bright)', backdropFilter: 'blur(8px)',
        boxShadow: hover ? '0 0 34px -4px rgba(87,184,212,0.7)' : '0 0 24px -6px rgba(87,184,212,0.6)',
        transform: hover ? 'translateY(-2px)' : 'none', transition: 'all 0.3s var(--ease-calm)',
        ...(fixed ? { position: 'fixed', right: offset, bottom: offset, zIndex: 90 } : {}),
        ...style,
      }}>
      <Icon name={icon} size={20} strokeWidth={1.5} />
    </button>
  );
}
