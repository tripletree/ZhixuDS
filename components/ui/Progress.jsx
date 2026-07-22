import React from 'react';
/* Gradient meter row — the dashboard's 材料机会 TOP 5 bars (6px pill track, azure-deep→azure fill) */
const FILL = {
  azure: 'linear-gradient(to right, var(--color-azure-deep), var(--color-azure))',
  champagne: 'linear-gradient(to right, color-mix(in srgb, var(--color-champagne) 65%, var(--color-ink-700)), var(--color-champagne))',
  rouge: 'linear-gradient(to right, color-mix(in srgb, var(--color-rouge) 65%, var(--color-ink-700)), var(--color-rouge))',
  bone: 'color-mix(in srgb, var(--color-bone) 45%, transparent)',
};
export function Progress({ label, value, max = 100, tone = 'azure', showValue = true, labelWidth = 96, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      {label != null ? <span style={{ width: labelWidth, flex: 'none', fontSize: 11, color: 'var(--color-bone-soft)' }}>{label}</span> : null}
      <div style={{ height: 6, flex: 1, overflow: 'hidden', borderRadius: 999, background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)' }}>
        <div style={{ height: '100%', borderRadius: 999, width: `${pct}%`, background: FILL[tone] || FILL.azure, transition: 'width 0.9s var(--ease-calm)' }}></div>
      </div>
      {showValue ? <span style={{ width: 28, flex: 'none', textAlign: 'right', fontSize: 11, fontWeight: 500, color: 'var(--color-bone)' }}>{value}</span> : null}
    </div>
  );
}
