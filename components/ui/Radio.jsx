import React from 'react';
/* Radio — 16px circle, azure ring + 8px azure dot when selected */
export function Radio({ checked, onChange, name, disabled = false, children, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="radio" name={name} checked={!!checked} disabled={disabled}
        onChange={e => { if (e.target.checked && onChange) onChange(); }}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, margin: 0, pointerEvents: 'none' }} />
      <span aria-hidden="true" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16, flex: 'none',
        borderRadius: 999, transition: 'all 0.2s var(--ease-calm)',
        border: `1px solid ${checked ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
        background: 'var(--surface-control)',
        boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
      }}>
        {checked ? <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-azure)' }}></span> : null}
      </span>
      {children != null ? <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-bone-soft)' }}>{children}</span> : null}
    </label>
  );
}
export function RadioGroup({ options = [], value, onChange, direction = 'column', gap = 10, name, style }) {
  const autoName = React.useId();
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, flexWrap: 'wrap', gap, ...style }}>
      {options.map(o => (
        <Radio key={o.value} name={name || autoName} checked={o.value === value} disabled={o.disabled}
          onChange={() => onChange && onChange(o.value)}>{o.label}</Radio>
      ))}
    </div>
  );
}
