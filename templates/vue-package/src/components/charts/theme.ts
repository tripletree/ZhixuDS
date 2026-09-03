/**
 * ECharts theme for 知序 FabricMind, resolved from the live CSS tokens.
 *
 * ECharts cannot read `var(--x)` strings, so the theme is computed from
 * `getComputedStyle(html)` every time a chart (re)renders. That is what makes
 * the light/dark toggle flip chart colours in step with the rest of the page.
 */
import type { EChartsOption } from 'echarts'

export interface ChartTokens {
  palette: string[]
  text: string
  textSoft: string
  textDim: string
  grid: string
  axis: string
  float: string
  floatBorder: string
  fontFamily: string
}

const FALLBACK: ChartTokens = {
  palette: ['#57b8d4', '#6d7fc2', '#6fb896', '#c9ad7c', '#b2586a', '#c98a6b', '#7aa5c9', '#8b8f99'],
  text: '#eceae1',
  textSoft: '#c8c7c0',
  textDim: '#9a9a95',
  grid: 'rgba(236,234,225,0.07)',
  axis: 'rgba(236,234,225,0.16)',
  float: '#181d27',
  floatBorder: 'rgba(236,234,225,0.08)',
  fontFamily: 'Inter, "Noto Sans SC", system-ui, sans-serif',
}

export const PALETTE_SIZE = FALLBACK.palette.length

/** CSS `var()` for the i-th categorical colour — for DOM swatches that must track the theme live. */
export function paletteVar(i: number): string {
  return `var(--chart-${(i % PALETTE_SIZE) + 1})`
}

export function readChartTokens(): ChartTokens {
  if (typeof window === 'undefined') return FALLBACK
  const cs = getComputedStyle(document.documentElement)
  const v = (name: string, fb: string) => cs.getPropertyValue(name).trim() || fb
  return {
    palette: FALLBACK.palette.map((fb, i) => v(`--chart-${i + 1}`, fb)),
    text: v('--color-bone', FALLBACK.text),
    textSoft: v('--color-bone-soft', FALLBACK.textSoft),
    textDim: v('--color-bone-dim', FALLBACK.textDim),
    grid: v('--chart-grid', FALLBACK.grid),
    axis: v('--chart-axis', FALLBACK.axis),
    float: v('--surface-float', FALLBACK.float),
    floatBorder: v('--border-float', FALLBACK.floatBorder),
    fontFamily: v('--font-sans', FALLBACK.fontFamily),
  }
}

/** Shared tooltip chrome — the `.fm-float` recipe expressed as an ECharts tooltip. */
export function tooltipBase(t: ChartTokens): NonNullable<EChartsOption['tooltip']> {
  return {
    backgroundColor: t.float,
    borderColor: t.floatBorder,
    borderWidth: 1,
    borderRadius: 12,
    padding: [10, 14],
    extraCssText: 'box-shadow: var(--shadow-float);',
    textStyle: { color: t.text, fontFamily: t.fontFamily, fontSize: 13 },
    transitionDuration: 0.15,
  }
}

/** Markup for one tooltip row: swatch dot, name, right-aligned value. */
export function tooltipRow(color: string, name: string, value: string, t: ChartTokens): string {
  return (
    `<div style="display:flex;align-items:center;gap:8px;min-width:160px">` +
    `<span style="width:8px;height:8px;border-radius:999px;background:${color};flex:none"></span>` +
    `<span style="color:${t.textSoft};flex:1">${name}</span>` +
    `<span style="font-weight:600;font-variant-numeric:tabular-nums;color:${t.text}">${value}</span>` +
    `</div>`
  )
}

export function tooltipTitle(text: string, t: ChartTokens): string {
  return `<div style="font-weight:600;margin-bottom:6px;color:${t.text}">${text}</div>`
}

/** Compact number formatting shared by axes and tooltips: 1200 → 1.2k */
export function formatCompact(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `${+(n / 1_000_000).toFixed(1)}M`
  if (Math.abs(n) >= 1_000) return `${+(n / 1_000).toFixed(1)}k`
  return `${n}`
}
