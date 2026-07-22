import React from 'react';
/* Thin-stroke micro charts — 1.6px trend lines and azure bars from the dashboard/chat mocks */
const STROKES = {
  azure: 'var(--color-azure)',
  champagne: 'var(--color-champagne)',
  mist: 'var(--color-mist)',
  rouge: 'var(--color-rouge)',
};
export function Sparkline({ data = [], width = 140, height = 44, tone = 'azure', fill = false, dot = false, strokeWidth = 1.6, style }) {
  if (data.length < 2) return null;
  const min = Math.min(...data), maxV = Math.max(...data), span = maxV - min || 1;
  const pad = 3;
  const pts = data.map((v, i) => [
    pad + (i / (data.length - 1)) * (width - pad * 2),
    pad + (1 - (v - min) / span) * (height - pad * 2),
  ]);
  const line = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const c = STROKES[tone] || STROKES.azure;
  const last = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width, height, display: 'block', ...style }} aria-hidden="true">
      {fill ? <polygon points={`${pad},${height - pad} ${line} ${(width - pad).toFixed(1)},${height - pad}`} fill={c} fillOpacity="0.18" stroke="none" /> : null}
      <polyline points={line} fill="none" stroke={c} strokeWidth={strokeWidth} strokeLinecap="round" />
      {dot ? <circle cx={last[0].toFixed(1)} cy={last[1].toFixed(1)} r="2.2" fill={tone === 'azure' ? 'var(--color-azure-bright)' : c} /> : null}
    </svg>
  );
}
/* Mini bar chart — rounded 2px bars, opacity scales with value (from the AI-chat answer chart) */
export function SparkBars({ data = [], width = 140, height = 44, tone = 'azure', gap = 8, radius = 2, style }) {
  if (!data.length) return null;
  const maxV = Math.max(...data) || 1;
  const bw = (width - gap * (data.length - 1)) / data.length;
  const c = STROKES[tone] || STROKES.azure;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width, height, display: 'block', ...style }} aria-hidden="true">
      {data.map((v, i) => {
        const h = (v / maxV) * (height - 4);
        return <rect key={i} x={(i * (bw + gap)).toFixed(1)} y={(height - h).toFixed(1)} width={bw.toFixed(1)} height={h.toFixed(1)} rx={radius} fill={c} fillOpacity={0.35 + (v / maxV) * 0.5} />;
      })}
    </svg>
  );
}
