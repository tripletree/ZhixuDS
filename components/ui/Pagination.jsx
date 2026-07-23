import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Pill pagination — 28px circles, current page lifts to bone 8% like the active tab */
function PageButton({ children, active = false, disabled = false, onClick, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={label} aria-current={active ? 'page' : undefined} disabled={disabled}
      onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 28, height: 28,
        padding: '0 6px', borderRadius: 999, cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, fontVariantNumeric: 'tabular-nums',
        border: `1px solid ${active ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)' : hover && !disabled ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)' : 'transparent'}`,
        background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
        color: active ? 'var(--color-bone)' : hover && !disabled ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
        opacity: disabled ? 0.4 : 1, transition: 'all 0.2s var(--ease-calm)',
      }}>
      {children}
    </button>
  );
}
export function Pagination({ page = 1, pageCount = 1, onChange, siblings = 1, showEnds = true, style }) {
  const go = (p) => { if (onChange && p >= 1 && p <= pageCount && p !== page) onChange(p); };
  const pages = [];
  const lo = Math.max(2, page - siblings), hi = Math.min(pageCount - 1, page + siblings);
  pages.push(1);
  if (lo > 2) pages.push('…l');
  for (let p = lo; p <= hi; p++) pages.push(p);
  if (hi < pageCount - 1) pages.push('…r');
  if (pageCount > 1) pages.push(pageCount);
  return (
    <nav aria-label="分页" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, ...style }}>
      {showEnds ? <PageButton label="第一页" disabled={page <= 1} onClick={() => go(1)}><Icon name="chevrons-left" size={13} /></PageButton> : null}
      <PageButton label="上一页" disabled={page <= 1} onClick={() => go(page - 1)}><Icon name="chevron-left" size={13} /></PageButton>
      {pages.map(p => typeof p === 'string'
        ? <span key={p} style={{ minWidth: 20, textAlign: 'center', fontSize: 12, color: 'var(--color-mist)' }}>…</span>
        : <PageButton key={p} active={p === page} label={`第 ${p} 页`} onClick={() => go(p)}>{p}</PageButton>)}
      <PageButton label="下一页" disabled={page >= pageCount} onClick={() => go(page + 1)}><Icon name="chevron-right" size={13} /></PageButton>
      {showEnds ? <PageButton label="最后一页" disabled={page >= pageCount} onClick={() => go(pageCount)}><Icon name="chevrons-right" size={13} /></PageButton> : null}
    </nav>
  );
}
