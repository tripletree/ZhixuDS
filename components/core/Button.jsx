import React from 'react';
import { Icon } from './Icon.jsx';
/* Pill buttons — exact values from HeroSection/SiteNav/CtaFooter.vue */
export function Button({ variant = 'primary', size = 'md', icon, children, style, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: size === 'lg' ? 10 : 8,
    borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap',
    fontWeight: 500, letterSpacing: '0.025em', transition: 'all 0.3s var(--ease-calm)',
    textDecoration: 'none',
  };
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '14px 24px', fontSize: 14 },
    lg: { padding: '16px 32px', fontSize: 15 },
  };
  const variants = {
    primary: { background: 'var(--color-bone)', color: 'var(--color-ink-950)', border: '1px solid transparent' },
    ghost: { background: 'transparent', color: 'var(--color-bone)', border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)' },
    nav: { background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)', color: 'var(--color-bone)', border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)', padding: '8px 16px', fontSize: 13 },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: 'var(--cta-hover)', boxShadow: '0 0 36px -8px var(--cta-glow)', color: hover && 'var(--color-ink-950)' },
    ghost: { borderColor: 'color-mix(in srgb, var(--color-bone) 35%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 4%, transparent)' },
    nav: { borderColor: 'color-mix(in srgb, var(--color-azure) 40%, transparent)', background: 'color-mix(in srgb, var(--color-azure) 10%, transparent)' },
  };
  const hv = hover ? hoverStyles[variant] : {};
  if (variant === 'primary' && hover) hv.color = document.documentElement.classList.contains('light') ? '#ffffff' : 'var(--color-ink-950)';
  return (
    <button type="button" style={{ ...base, ...sizes[size], ...variants[variant], ...hv, ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
      {icon ? <Icon name={icon} size={size === 'sm' ? 14 : 16} style={{ transform: hover ? (icon === 'arrow-up-right' ? 'translate(2px,-2px)' : 'translateX(4px)') : 'none', transition: 'transform 0.3s var(--ease-calm)' }} /> : null}
    </button>
  );
}
/* 36px circular icon button (theme toggle in SiteNav) */
export function IconButton({ name, label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={label}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 36, height: 36, borderRadius: 999, cursor: 'pointer',
        border: `1px solid color-mix(in srgb, var(--color-${hover ? 'azure) 40%' : 'bone) 15%'}, transparent)`,
        background: hover ? 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
        color: hover ? 'var(--color-bone)' : 'var(--color-bone-soft)',
        transition: 'all 0.3s var(--ease-calm)', ...style,
      }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      <Icon name={name} size={16} />
    </button>
  );
}
