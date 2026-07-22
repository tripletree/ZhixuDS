import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Popover } from './Popover.jsx';
/* Action menu on the Popover panel — for row/card actions (导出/收藏/删除) */
export function DropdownMenu({ items = [], onSelect, anchor, placement = 'bottom-end', width = 180, style }) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  return (
    <Popover open={open} onOpenChange={setOpen} anchor={anchor} placement={placement} width={width} padding={6} style={style}>
      <div role="menu" style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item, i) => {
          if (item.type === 'divider') {
            return <div key={`d${i}`} style={{ margin: '6px 4px', borderTop: '1px solid var(--border-hairline)' }}></div>;
          }
          const danger = item.danger;
          const hover = active === item.key;
          return (
            <button key={item.key} type="button" role="menuitem" disabled={item.disabled}
              onMouseEnter={() => setActive(item.key)} onMouseLeave={() => setActive(null)}
              onClick={() => { setOpen(false); if (onSelect) onSelect(item.key); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '8px 10px',
                border: 'none', borderRadius: 8, cursor: item.disabled ? 'not-allowed' : 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5, letterSpacing: '0.02em',
                opacity: item.disabled ? 0.45 : 1, transition: 'all 0.2s var(--ease-calm)',
                background: hover && !item.disabled
                  ? (danger ? 'color-mix(in srgb, var(--color-rouge) 14%, transparent)' : 'color-mix(in srgb, var(--color-azure) 10%, transparent)')
                  : 'transparent',
                color: danger
                  ? 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))'
                  : hover ? 'var(--color-bone)' : 'var(--color-bone-soft)',
              }}>
              {item.icon ? <Icon name={item.icon} size={14} strokeWidth={1.75} /> : null}
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.hint ? <span style={{ fontSize: 11, color: 'var(--color-mist)' }}>{item.hint}</span> : null}
            </button>
          );
        })}
      </div>
    </Popover>
  );
}
