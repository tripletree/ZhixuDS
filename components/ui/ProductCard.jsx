import React from 'react';
/* Product media card — image, two-line clamped title, brand + date meta row.
   Cards lift and tint azure on hover per the brand hover language. */
export function ProductCard({ src, alt = '', aspectRatio = '3/4', title, brand, date, tags, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 10, borderRadius: 12, overflow: 'hidden',
        border: `1px solid ${hover ? 'color-mix(in srgb, var(--color-azure) 25%, transparent)' : 'var(--border-hairline)'}`,
        background: 'color-mix(in srgb, var(--color-ink-850) 70%, transparent)',
        transform: hover ? 'translateY(-4px)' : 'none', transition: 'all 0.3s var(--ease-calm)',
        cursor: onClick ? 'pointer' : 'default', ...style,
      }}>
      <div style={{ aspectRatio, width: '100%', overflow: 'hidden', background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))' }}>
        {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 12px 12px' }}>
        {title ? (
          <span style={{
            fontSize: 13, lineHeight: 1.5, color: 'var(--color-bone)',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{title}</span>
        ) : null}
        {tags ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{tags}</div> : null}
        {(brand || date) ? (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            {brand ? <span style={{ flex: 1, fontSize: 12, letterSpacing: '0.02em', color: 'var(--color-bone-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{brand}</span> : <span style={{ flex: 1 }}></span>}
            {date ? <span style={{ fontSize: 11, letterSpacing: '0.02em', color: 'var(--color-mist)', whiteSpace: 'nowrap' }}>{date}</span> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
/* Thumbnail selector row — 32px squares, selected frame tints azure */
export function ThumbnailStrip({ items = [], value = 0, onChange, size = 32, style }) {
  return (
    <div style={{ display: 'flex', gap: 6, ...style }}>
      {items.map((item, i) => {
        const on = i === value;
        return (
          <button key={i} type="button" aria-pressed={on} onClick={() => onChange && onChange(i)}
            style={{
              width: size, height: size, padding: 0, borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
              border: `2px solid ${on ? 'var(--color-azure)' : 'transparent'}`,
              outline: on ? 'none' : '1px solid var(--border-hairline)', outlineOffset: -1,
              background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))',
              transition: 'border-color 0.2s var(--ease-calm)',
            }}>
            {item && item.src ? <img src={item.src} alt={item.alt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : null}
          </button>
        );
      })}
    </div>
  );
}
