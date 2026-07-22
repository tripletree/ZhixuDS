import React from 'react';
/* A–Z index rail for large pickers — active letter tints azure, unavailable letters dim out */
const DEFAULT_LETTERS = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
export function AlphabetIndex({ letters = DEFAULT_LETTERS, value, onChange, available, style }) {
  const [hovered, setHovered] = React.useState(null);
  return (
    <div role="navigation" aria-label="字母索引" style={{ display: 'flex', flexWrap: 'wrap', gap: 2, ...style }}>
      {letters.map(l => {
        const enabled = !available || available.includes(l);
        const on = l === value;
        const hover = hovered === l;
        return (
          <button key={l} type="button" disabled={!enabled} aria-pressed={on}
            onClick={() => onChange && onChange(l)}
            onMouseEnter={() => setHovered(l)} onMouseLeave={() => setHovered(null)}
            style={{
              minWidth: 22, height: 22, padding: '0 4px', borderRadius: 999, border: 'none',
              cursor: enabled ? 'pointer' : 'default', fontFamily: 'var(--font-sans)', fontSize: 11,
              fontWeight: 500, letterSpacing: '0.06em',
              background: on ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)' : 'transparent',
              color: !enabled ? 'color-mix(in srgb, var(--color-mist) 45%, transparent)'
                : on ? 'var(--color-azure-bright)' : hover ? 'var(--color-bone)' : 'var(--color-bone-dim)',
              transition: 'all 0.2s var(--ease-calm)',
            }}>
            {l}
          </button>
        );
      })}
    </div>
  );
}
