import React from 'react';
/* Micro floating hint — frosted float surface at caption scale, shown on hover/focus after a short delay */
const PLACE = {
  top: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  bottom: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  left: { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  right: { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
};
export function Tooltip({ content, placement = 'top', delay = 150, maxWidth = 240, open, children, style }) {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const timer = React.useRef(null);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : innerOpen;
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setInnerOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setInnerOpen(false); };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <span style={{ position: 'relative', display: 'inline-block', ...style }}
      onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {isOpen && content ? (
        <span role="tooltip" className="fm-pop-in" style={{
          position: 'absolute', zIndex: 70, width: 'max-content', maxWidth, padding: '6px 10px',
          borderRadius: 8, border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
          background: 'var(--surface-float)', backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-float)',
          fontSize: 12, lineHeight: 1.6, letterSpacing: '0.02em', color: 'var(--color-bone-soft)',
          pointerEvents: 'none', ...(PLACE[placement] || PLACE.top),
        }}>
          {content}
        </span>
      ) : null}
    </span>
  );
}
