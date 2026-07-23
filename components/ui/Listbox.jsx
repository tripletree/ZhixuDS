import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Custom dropdown — .fm-control trigger + fully branded panel (native <select> popups can't be themed).
   Keyboard: ↑↓ move, Enter/Space select, Esc closes, Home/End jump. */
export function Listbox({ options = [], value, onChange, placeholder = '请选择', disabled = false, invalid = false, size, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const rootRef = React.useRef(null);
  const listRef = React.useRef(null);
  const id = React.useId();
  const selectedIndex = options.findIndex(o => o.value === value);
  const selected = options[selectedIndex];

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  React.useEffect(() => {
    if (open && active >= 0 && listRef.current) {
      const el = listRef.current.children[active];
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [open, active]);

  const openList = () => { if (disabled) return; setOpen(true); setActive(selectedIndex >= 0 ? selectedIndex : 0); };
  const commit = (i) => {
    const opt = options[i];
    if (!opt) return;
    if (onChange) onChange(opt.value);
    setOpen(false);
  };
  const onKeyDown = (e) => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); openList(); }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(options.length - 1, i + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(0, i - 1)); }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0); }
    else if (e.key === 'End') { e.preventDefault(); setActive(options.length - 1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); commit(active); }
    else if (e.key === 'Tab') setOpen(false);
  };

  return (
    <span ref={rootRef} style={{ position: 'relative', display: 'block', ...style }} onKeyDown={onKeyDown}>
      <button type="button" className={invalid ? 'fm-control fm-control-error' : 'fm-control'}
        disabled={disabled} aria-invalid={invalid || undefined}
        aria-haspopup="listbox" aria-expanded={open}
        aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        style={{
          display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left', cursor: disabled ? 'not-allowed' : 'pointer',
          /* surface inlined too — native button chrome (black square border) must never leak through */
          appearance: 'none', WebkitAppearance: 'none', width: '100%', boxSizing: 'border-box',
          borderRadius: 'var(--radius-panel)',
          border: `1px solid color-mix(in srgb, ${invalid ? 'var(--color-rouge) 50%' : 'var(--color-bone) 10%'}, transparent)`,
          background: 'var(--surface-control)', padding: '10px 14px', opacity: disabled ? 0.45 : 1,
          fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5,
        }} {...rest}>
        <span style={{ flex: 1, color: selected ? 'var(--color-bone)' : 'var(--color-mist)' }}>
          {selected ? selected.label : placeholder}
        </span>
        <span style={{ display: 'inline-flex', color: 'var(--color-mist)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s var(--ease-calm)' }}>
          <Icon name="chevron-down" size={14} />
        </span>
      </button>
      {open ? (
        <ul ref={listRef} role="listbox" className="fm-pop-in" aria-labelledby={rest['aria-labelledby']}
          style={{
            position: 'absolute', left: 0, right: 0, top: 'calc(100% + 6px)', zIndex: 50,
            margin: 0, padding: 6, listStyle: 'none', maxHeight: 240, overflowY: 'auto',
            borderRadius: 'var(--radius-panel)', border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
            background: 'var(--surface-float)', backdropFilter: 'blur(12px)',
            boxShadow: 'var(--shadow-float)',
          }}>
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isActive = i === active;
            return (
              <li key={opt.value} id={`${id}-opt-${i}`} role="option" aria-selected={isSelected}
                onMouseEnter={() => setActive(i)} onMouseDown={(e) => e.preventDefault()} onClick={() => commit(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8,
                  fontSize: 13, lineHeight: 1.5, cursor: 'pointer',
                  background: isActive ? 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'transparent',
                  color: isActive || isSelected ? 'var(--color-bone)' : 'var(--color-bone-soft)',
                }}>
                <span style={{ flex: 1 }}>{opt.label}</span>
                {opt.hint ? <span style={{ fontSize: 11, color: 'var(--color-mist)' }}>{opt.hint}</span> : null}
                {isSelected ? <span style={{ display: 'inline-flex', color: 'var(--color-azure-bright)' }}><Icon name="check" size={14} /></span> : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </span>
  );
}
