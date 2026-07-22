import React from 'react';
/* Surface cards — .panel sheen / .glass frost from effects.css; radii 1rem card, 1.5rem feature */
export function Panel({ variant = 'panel', glow = false, padding = 24, radius, className = '', style, children, ...rest }) {
  const surface = variant === 'glass' ? 'glass' : 'panel';
  const glowCls = glow === 'sm' ? 'glow-blue glow-blue-sm' : glow ? 'glow-blue' : '';
  return (
    <div className={[surface, glowCls, className].filter(Boolean).join(' ')}
      style={{ borderRadius: radius ?? (variant === 'feature' ? 'var(--radius-feature)' : 'var(--radius-card)'), padding, ...style }} {...rest}>
      {children}
    </div>
  );
}
