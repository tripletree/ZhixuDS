import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Form controls — chat-input surface (rounded 0.75rem, hairline bone/10, ink-850/80); azure focus ring via .fm-control.
   Error state: pass `invalid` to the control (rouge border/ring via .fm-control-error) + `error` to Field (rouge message). */
export function Field({ label, hint, error, required, children, style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label ? (
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-bone-soft)' }}>
          {label}
          {required ? <span style={{ color: 'var(--color-azure)' }}>*</span> : null}
        </span>
      ) : null}
      {children}
      {error ? (
        <span role="alert" style={{ fontSize: 11, letterSpacing: '0.02em', color: 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 11, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>{hint}</span>
      ) : null}
    </label>
  );
}
const controlCls = (invalid) => (invalid ? 'fm-control fm-control-error' : 'fm-control');
export function Input({ icon, invalid = false, style, ...rest }) {
  if (!icon) return <input className={controlCls(invalid)} aria-invalid={invalid || undefined} style={style} {...rest} />;
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', display: 'inline-flex', color: 'var(--color-mist)', pointerEvents: 'none' }}>
        <Icon name={icon} size={14} />
      </span>
      <input className={controlCls(invalid)} aria-invalid={invalid || undefined} style={{ paddingLeft: 38, ...style }} {...rest} />
    </span>
  );
}
export function TextArea({ rows = 4, invalid = false, style, ...rest }) {
  return <textarea className={controlCls(invalid)} aria-invalid={invalid || undefined} rows={rows} style={{ resize: 'vertical', ...style }} {...rest} />;
}
export function Select({ children, invalid = false, style, ...rest }) {
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <select className={controlCls(invalid)} aria-invalid={invalid || undefined} style={{ appearance: 'none', WebkitAppearance: 'none', paddingRight: 38, cursor: 'pointer', ...style }} {...rest}>{children}</select>
      <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', display: 'inline-flex', color: 'var(--color-mist)', pointerEvents: 'none' }}>
        <Icon name="chevron-down" size={14} />
      </span>
    </span>
  );
}
