import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Feedback toast — the frosted float surface (Listbox panel recipe) as a transient notice.
   Tones follow the data palette: info/success azure, warning champagne, error rouge. */
const TONES = {
  info: { color: 'var(--color-azure-bright)', icon: 'info' },
  success: { color: 'var(--color-azure-bright)', icon: 'circle-check' },
  warning: { color: 'var(--color-champagne)', icon: 'circle-alert' },
  error: { color: 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))', icon: 'circle-alert' },
};
export function Toast({ tone = 'info', title, description, icon, onClose, style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" className="fm-pop-in" style={{
      display: 'flex', alignItems: 'flex-start', gap: 10, width: 320, padding: '12px 14px',
      borderRadius: 'var(--radius-panel)', border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
      background: 'var(--surface-float)', backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-float)', ...style,
    }}>
      <span style={{ display: 'inline-flex', flex: 'none', marginTop: 1, color: t.color }}>
        <Icon name={icon || t.icon} size={15} strokeWidth={1.75} />
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {title ? <span style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5, color: 'var(--color-bone)' }}>{title}</span> : null}
        {description ? <span style={{ fontSize: 12, lineHeight: 1.6, letterSpacing: '0.02em', color: 'var(--color-bone-dim)' }}>{description}</span> : null}
      </div>
      {onClose ? (
        <button type="button" aria-label="关闭" onClick={onClose}
          style={{ display: 'inline-flex', flex: 'none', padding: 2, margin: '-2px -4px 0 0', border: 'none', borderRadius: 999, background: 'transparent', color: 'var(--color-bone-dim)', cursor: 'pointer' }}>
          <Icon name="x" size={13} />
        </button>
      ) : null}
    </div>
  );
}
/* Fixed-position stack for Toasts — newest at the bottom, 10px gap */
const CORNERS = {
  'bottom-right': { right: 0, bottom: 0, alignItems: 'flex-end' },
  'bottom-left': { left: 0, bottom: 0, alignItems: 'flex-start' },
  'top-right': { right: 0, top: 0, alignItems: 'flex-end' },
  'top-left': { left: 0, top: 0, alignItems: 'flex-start' },
};
export function ToastStack({ toasts = [], onDismiss, position = 'bottom-right', offset = 24, style }) {
  return (
    <div style={{
      position: 'fixed', zIndex: 110, display: 'flex', flexDirection: 'column', gap: 10,
      padding: offset, pointerEvents: 'none', ...(CORNERS[position] || CORNERS['bottom-right']), ...style,
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{ pointerEvents: 'auto' }}>
          <Toast tone={t.tone} title={t.title} description={t.description} icon={t.icon}
            onClose={onDismiss ? () => onDismiss(t.id) : undefined} />
        </div>
      ))}
    </div>
  );
}
/* Toast state hook — push() auto-dismisses after `duration` ms (0 = sticky) */
export function useToasts(defaultDuration = 4000) {
  const [toasts, setToasts] = React.useState([]);
  const nextId = React.useRef(1);
  const dismiss = React.useCallback((id) => setToasts(ts => ts.filter(t => t.id !== id)), []);
  const push = React.useCallback((toast) => {
    const id = nextId.current++;
    setToasts(ts => [...ts, { ...toast, id }]);
    const duration = toast.duration ?? defaultDuration;
    if (duration > 0) setTimeout(() => dismiss(id), duration);
    return id;
  }, [defaultDuration, dismiss]);
  return { toasts, push, dismiss };
}
