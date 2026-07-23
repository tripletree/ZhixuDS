import React from 'react';
/* Selectable chip group — pills only per readme; selected chips tint azure like the nav hover */
export function FilterChips({ options = [], value, onChange, multiple = false, title, size = 'md', style }) {
  const [hovered, setHovered] = React.useState(null);
  const sz = size === 'sm' ? { padding: '4px 12px', fontSize: 12 } : { padding: '6px 14px', fontSize: 13 };
  const isOn = (v) => (multiple ? Array.isArray(value) && value.includes(v) : v === value);
  const pick = (v) => {
    if (!onChange) return;
    if (multiple) {
      const cur = Array.isArray(value) ? value : [];
      onChange(cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]);
    } else onChange(v);
  };
  return (
    <div style={style}>
      {title ? <div style={{ marginBottom: 8, fontSize: 12, letterSpacing: '0.02em', color: 'var(--color-bone-dim)' }}>{title}</div> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map(o => {
          const on = isOn(o.value);
          const hover = hovered === o.value && !o.disabled;
          return (
            <button key={o.value} type="button" aria-pressed={on} disabled={o.disabled} onClick={() => pick(o.value)}
              onMouseEnter={() => setHovered(o.value)} onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 999, cursor: o.disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500,
                letterSpacing: '0.02em', whiteSpace: 'nowrap', transition: 'all 0.3s var(--ease-calm)', opacity: o.disabled ? 0.45 : 1,
                border: `1px solid ${on ? 'color-mix(in srgb, var(--color-azure) 40%, transparent)' : hover ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)' : 'color-mix(in srgb, var(--color-bone) 12%, transparent)'}`,
                background: on ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)' : 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
                color: on ? 'var(--color-azure-bright)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
                ...sz,
              }}>
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
