import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Pill segmented control — pills only per readme; active pill lifts to bone 8%, idle tabs dim like nav links */
export function Tabs({ items = [], value, onChange, size = 'md', style }) {
  const [hovered, setHovered] = React.useState(null);
  const sz = size === 'sm' ? { padding: '5px 12px', fontSize: 12 } : { padding: '7px 16px', fontSize: 13 };
  return (
    <div role="tablist" style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)', ...style }}>
      {items.map(item => {
        const active = item.key === value;
        const hover = hovered === item.key;
        return (
          <button key={item.key} type="button" role="tab" aria-selected={active}
            onClick={() => onChange && onChange(item.key)}
            onMouseEnter={() => setHovered(item.key)} onMouseLeave={() => setHovered(null)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap',
              border: `1px solid ${active ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)' : 'transparent'}`,
              background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
              color: active ? 'var(--color-bone)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
              transition: 'all 0.3s var(--ease-calm)', ...sz,
            }}>
            {item.icon ? <Icon name={item.icon} size={size === 'sm' ? 12 : 14} /> : null}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
