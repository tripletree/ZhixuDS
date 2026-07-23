import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Checkable filter control — 16px box, azure fill when checked; the check strokes in ink-950,
   which inverts to white in the light theme so contrast holds on both grounds. */
export function Checkbox({ checked, indeterminate = false, onChange, disabled = false, children, style }) {
  const [focus, setFocus] = React.useState(false);
  const on = checked || indeterminate;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="checkbox" checked={!!checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, margin: 0, pointerEvents: 'none' }} />
      <span aria-hidden="true" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16, flex: 'none',
        borderRadius: 4, transition: 'all 0.2s var(--ease-calm)',
        border: `1px solid ${on ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
        background: on ? 'var(--color-azure)' : 'var(--surface-control)',
        boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
        color: 'var(--color-ink-950)',
      }}>
        {indeterminate
          ? <span style={{ width: 8, height: 2, borderRadius: 1, background: 'currentColor' }}></span>
          : checked ? <Icon name="check" size={11} strokeWidth={3.5} /> : null}
      </span>
      {children != null ? <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-bone-soft)' }}>{children}</span> : null}
    </label>
  );
}
export function CheckboxGroup({ options = [], value = [], onChange, columns, gap = 10, style }) {
  const toggle = (v, on) => {
    if (!onChange) return;
    onChange(on ? [...value, v] : value.filter(x => x !== v));
  };
  const layout = columns
    ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap }
    : { display: 'flex', flexDirection: 'column', gap };
  return (
    <div role="group" style={{ ...layout, ...style }}>
      {options.map(o => (
        <Checkbox key={o.value} checked={value.includes(o.value)} disabled={o.disabled}
          onChange={on => toggle(o.value, on)}>{o.label}</Checkbox>
      ))}
    </div>
  );
}
