import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* No-data placeholder — mist glyph in a hairline circle, quiet copy, optional action */
export function EmptyState({ icon = 'database', title, description, action, compact = false, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: compact ? '20px 16px' : '40px 24px', textAlign: 'center', ...style }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: compact ? 44 : 56, height: compact ? 44 : 56, borderRadius: 999,
        border: '1px solid var(--border-hairline)', background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
        color: 'var(--color-mist)',
      }}>
        <Icon name={icon} size={compact ? 18 : 22} strokeWidth={1.5} />
      </span>
      {title ? <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-bone-soft)' }}>{title}</span> : null}
      {description ? <span style={{ maxWidth: 320, fontSize: 12, lineHeight: 1.6, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>{description}</span> : null}
      {action ? <div style={{ marginTop: 6 }}>{action}</div> : null}
    </div>
  );
}
