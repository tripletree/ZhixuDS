import React from 'react';
/* Section heading: eyebrow with dash, bold title, dim copy — from SectionHeading.vue */
export function SectionHeading({ eyebrow, title, copy, align = 'center' }) {
  const center = align === 'center';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left' }}>
      {eyebrow ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ height: 1, width: 24, background: 'color-mix(in srgb, var(--color-azure) 50%, transparent)' }}></span>
          <span className="eyebrow" style={{ color: 'var(--color-azure)' }}>{eyebrow}</span>
        </div>
      ) : null}
      <h2 style={{ margin: 0, maxWidth: center ? '42rem' : '48rem', fontSize: 'var(--text-h2)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--color-bone)', textWrap: 'balance' }}>{title}</h2>
      {copy ? <p style={{ margin: 0, maxWidth: center ? '42rem' : '36rem', fontSize: 15, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>{copy}</p> : null}
    </div>
  );
}
