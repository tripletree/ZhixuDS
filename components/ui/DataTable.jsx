import React from 'react';
/* Hairline BI table — eyebrow-tracked header, hairline row rules, numerals emphasised via column strong flag */
export function DataTable({ columns = [], rows = [], dense = false, style }) {
  const [hovered, setHovered] = React.useState(null);
  const pad = dense ? '8px 12px' : '11px 14px';
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', ...style }}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key} style={{ padding: pad, textAlign: col.align || 'left', fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-bone-dim)', borderBottom: '1px solid var(--border-panel)', whiteSpace: 'nowrap' }}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            style={{ background: hovered === i ? 'color-mix(in srgb, var(--color-bone) 3%, transparent)' : 'transparent', transition: 'background 0.3s var(--ease-calm)' }}>
            {columns.map(col => (
              <td key={col.key} style={{ padding: pad, textAlign: col.align || 'left', fontSize: 12, lineHeight: 1.5, color: col.strong ? 'var(--color-bone)' : 'var(--color-bone-soft)', fontWeight: col.strong ? 500 : 400, borderBottom: '1px solid var(--border-hairline)' }}>
                {col.render ? col.render(row[col.key], row, i) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
