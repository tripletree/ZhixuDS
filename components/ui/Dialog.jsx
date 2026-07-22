import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Modal — blurred ink overlay + frosted glass card, extracted from ContactDialog */
export function Dialog({ open, onClose, title, subtitle, width = 384, align = 'center', children }) {
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }} role="dialog" aria-modal="true">
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--color-ink-950) 80%, transparent)', backdropFilter: 'blur(4px)' }}></div>
      <div className="glass fm-dialog-in" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: width, borderRadius: '1rem', border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', padding: 32, textAlign: align }}>
        {onClose ? (
          <button type="button" aria-label="关闭" onClick={onClose} style={{ position: 'absolute', right: 16, top: 16, borderRadius: 999, border: 'none', background: 'transparent', padding: 6, color: 'var(--color-bone-dim)', cursor: 'pointer' }}>
            <Icon name="x" size={16} />
          </button>
        ) : null}
        {title ? <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-bone)' }}>{title}</h2> : null}
        {subtitle ? <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>{subtitle}</p> : null}
        {children}
      </div>
    </div>
  );
}
