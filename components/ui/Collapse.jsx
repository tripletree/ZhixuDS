import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Collapsible filter group — bone title row, rotating chevron, calm grid-rows height animation */
export function Collapse({ title, count, defaultOpen = true, open, onToggle, children, style }) {
  const [inner, setInner] = React.useState(defaultOpen);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : inner;
  const toggle = () => { if (!controlled) setInner(!isOpen); if (onToggle) onToggle(!isOpen); };
  return (
    <div style={style}>
      <button type="button" aria-expanded={isOpen} onClick={toggle}
        style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 8, padding: '10px 0', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: 'var(--color-bone)' }}>{title}</span>
        {count != null ? <span style={{ fontSize: 11, color: 'var(--color-mist)' }}>{count}</span> : null}
        <span style={{ display: 'inline-flex', color: 'var(--color-mist)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s var(--ease-calm)' }}>
          <Icon name="chevron-down" size={14} />
        </span>
      </button>
      <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s var(--ease-calm)' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ paddingBottom: 12 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
