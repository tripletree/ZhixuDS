import React from 'react';
/* Floating panel — frosted ink surface (same recipe as the Listbox panel), fm-pop-in entrance,
   outside-click + Escape close. Base layer for menus, filter panels, date editors. */
const PLACE = {
  'bottom-start': { top: 'calc(100% + 8px)', left: 0 },
  'bottom-end': { top: 'calc(100% + 8px)', right: 0 },
  'top-start': { bottom: 'calc(100% + 8px)', left: 0 },
  'top-end': { bottom: 'calc(100% + 8px)', right: 0 },
};
export function Popover({ anchor, open, onOpenChange, placement = 'bottom-start', width = 320, padding = 16, children, style }) {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : innerOpen;
  const rootRef = React.useRef(null);
  const setOpen = (v) => { if (!controlled) setInnerOpen(v); if (onOpenChange) onOpenChange(v); };
  React.useEffect(() => {
    if (!isOpen) return;
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [isOpen]);
  return (
    <span ref={rootRef} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <span onClick={() => setOpen(!isOpen)} style={{ display: 'inline-block' }}>{anchor}</span>
      {isOpen ? (
        <div className="fm-pop-in" role="dialog" style={{
          position: 'absolute', zIndex: 60, width, padding,
          borderRadius: 'var(--radius-panel)', border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
          background: 'var(--surface-float)', backdropFilter: 'blur(12px)',
          boxShadow: 'var(--shadow-float)', ...PLACE[placement] || PLACE['bottom-start'],
        }}>
          {children}
        </div>
      ) : null}
    </span>
  );
}
