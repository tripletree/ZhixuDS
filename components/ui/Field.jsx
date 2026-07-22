import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Form controls — chat-input surface (rounded 0.75rem, hairline bone/10, ink-850/80); azure focus ring via .fm-control */
export function Field({ label, hint, required, children, style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label ? (
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-bone-soft)' }}>
          {label}
          {required ? <span style={{ color: 'var(--color-azure)' }}>*</span> : null}
        </span>
      ) : null}
      {children}
      {hint ? <span style={{ fontSize: 11, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>{hint}</span> : null}
    </label>
  );
}
export function Input({ icon, style, ...rest }) {
  if (!icon) return <input className="fm-control" style={style} {...rest} />;
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', display: 'inline-flex', color: 'var(--color-mist)', pointerEvents: 'none' }}>
        <Icon name={icon} size={14} />
      </span>
      <input className="fm-control" style={{ paddingLeft: 38, ...style }} {...rest} />
    </span>
  );
}
export function TextArea({ rows = 4, style, ...rest }) {
  return <textarea className="fm-control" rows={rows} style={{ resize: 'vertical', ...style }} {...rest} />;
}
export function Select({ children, style, ...rest }) {
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <select className="fm-control" style={{ appearance: 'none', WebkitAppearance: 'none', paddingRight: 38, cursor: 'pointer', ...style }} {...rest}>{children}</select>
      <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', display: 'inline-flex', color: 'var(--color-mist)', pointerEvents: 'none' }}>
        <Icon name="chevron-down" size={14} />
      </span>
    </span>
  );
}
