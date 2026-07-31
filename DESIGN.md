---
version: "alpha"
name: 知序 FabricMind
description: DATA + BI + AI intelligent decision system for textile product development — obsidian-ink dark surfaces, cool bone text, a single electric-azure working accent. Dark is the default theme; html.light inverts.
# Values mirror tokens/colors.css, tokens/typography.css, tokens/effects.css (dark default).
# Those CSS files are the source of truth — edit them first, then sync this file
# (and templates/vue-package/src/style.css) per AGENTS.md.
colors:
  ink-950: "#07080a"
  ink-900: "#0a0c10"
  ink-850: "#0e1117"
  ink-800: "#13171f"
  ink-750: "#181d27"
  ink-700: "#1f2531"
  bone: "#eceae1"
  bone-soft: "#c8c7c0"
  bone-dim: "#9a9a95"
  mist: "#8b8f99"
  mist-dark: "#565b66"
  azure: "#57b8d4"
  azure-bright: "#6fd0ec"
  azure-deep: "#2c7e98"
  champagne: "#c9ad7c"
  rouge: "#9a4250"
typography:
  hero:
    fontFamily: Inter, Noto Sans SC
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.025em
  h2:
    fontFamily: Inter, Noto Sans SC
    fontSize: 2.7rem
    fontWeight: 700
    lineHeight: 1.15
  h3:
    fontFamily: Inter, Noto Sans SC
    fontSize: 1.5rem
    fontWeight: 700
  lead:
    fontFamily: Inter, Noto Sans SC
    fontSize: 1.25rem
    fontWeight: 300
  body:
    fontFamily: Inter, Noto Sans SC
    fontSize: 15px
    lineHeight: 1.625
  caption:
    fontFamily: Inter, Noto Sans SC
    fontSize: 13px
  micro:
    fontFamily: Inter, Noto Sans SC
    fontSize: 12px
  eyebrow:
    fontFamily: Inter, Noto Sans SC
    fontSize: 0.72rem
    fontWeight: 500
    letterSpacing: 0.22em
  display-accent:
    fontFamily: Cormorant Garamond
    fontSize: 1em
    fontWeight: 400
    fontVariation: italic
rounded:
  panel: 0.75rem
  card: 1rem
  feature: 1.5rem
  pill: 999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink-950}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  input:
    backgroundColor: "rgba(14, 17, 23, 0.8)"
    textColor: "{colors.bone}"
    typography: "{typography.caption}"
    rounded: "{rounded.panel}"
    padding: 10px 14px
  panel:
    backgroundColor: "rgba(255, 255, 255, 0.02)"
    textColor: "{colors.bone-soft}"
    rounded: "{rounded.card}"
    padding: 24px
  tag:
    backgroundColor: "rgba(87, 184, 212, 0.1)"
    textColor: "{colors.azure-bright}"
    rounded: "{rounded.pill}"
    padding: 5px 12px
  fab:
    backgroundColor: "rgba(87, 184, 212, 0.15)"
    textColor: "{colors.azure-bright}"
    rounded: "{rounded.pill}"
    size: 48px
---

## Overview

知序 FabricMind ("Fashion Intelligence") is a B2B DATA + BI + AI decision platform for textile product development. The visual identity fuses 高级时尚 (fashion) with 智能科技 (intelligence): obsidian-ink dark surfaces, cool bone text, hairline borders, one electric-azure working accent, and data as the aesthetic (机会指数 78/100, +18%, TOP 5). Tagline: 让趋势有序，让开发有据. Voice is confident and declarative, Simplified Chinese first with *italic Cormorant Garamond* English accents. The reader is addressed as 你; the brand speaks as 知序.

Dark is the default theme. Adding class `light` to `<html>` (or `.theme-light` on a container) switches to the product-console palette, calibrated against the Normalization Studio admin UI: ink scale → cool near-whites (`#ffffff` page/detail, `#f5f6f8` sidebar rails, `#eef0f4` insets), bone → near-black text (`#16181d`) over cool grays, and the accent shifts from electric azure to a royal blue `#2563eb` (nav icons, row markers, focus rings), with `#1d4ed8` for text on azure tints. Champagne warms to an amber gold `#b07818` (review/warning markers) and rouge brightens to `#b03a4c`.

## Colors

Three neutral families and one working accent:

- **曜石黑 ink (950→700)** — page and surface scale, near-black with a cool navy cast. Page sits on `ink-950` under a subtle navy radial glow; cards on `ink-800`/`ink-850`.
- **冷米白 bone** — text scale: `bone` for body, `bone-soft` for secondary, `bone-dim` for tertiary/labels. Pure white `#ffffff` only for strong emphasis.
- **金属雾灰 mist** — placeholders, faint annotations, disabled hints.
- **电光青蓝 azure** — the *single* working accent: links, focus rings, selection states, primary data series, live indicators. `azure-bright` for text on tinted chips, `azure-deep` as gradient start. Hue is theme-specific: electric cyan-blue `#57b8d4` on dark, royal blue `#2563eb` on light (matching the product console) — one accent per theme, never two at once.
- **香槟金 champagne / 胭脂红 rouge** — sparingly: secondary data series and markers only. Rouge doubles as the error/danger tone (mixed 55–70% toward bone for legible text).

Semantic mapping: info/success → azure; warning → champagne; error/danger → rouge. Never introduce system green, yellow, or any second accent hue.

## Typography

Inter + Noto Sans SC carry all UI and body text; Cormorant Garamond *italic* is reserved for English accents — module names ("Data Foundation"), the FabricMind wordmark, oversized numerals like "01". Hierarchy runs hero 4.25rem/700 tight → section h2 2.7rem/700 → h3 1.5rem/700 → body 15px/1.625 → caption 13px → micro 12px. Eyebrow labels are bilingual with a middot separator, uppercase, 0.72rem with 0.22em tracking: `Solution · 解决方案`. Numerals in stats use tight tracking (-0.025em) at 28–48px weight 600.

## Layout

Base-4 spacing (Tailwind scale). Cards pad 24px (20px compact), controls 10px × 14px, section separators are hairline `border-t` at bone 6% alpha. Content honors a max-width container with generous vertical rhythm; floating panels offset 6–8px from their anchors.

## Elevation & Depth

Depth comes from layered translucency, not heavy shadows:

- `.panel` — content card: diagonal white sheen gradient stack + 1px `rgba(255,255,255,0.14)` border, no blur.
- `.glass` — floating tile: frosted 12px backdrop-blur, hairline bone/8 border.
- Floating layer (menus, listbox panels, toasts, tooltips) — `--surface-float` (ink-750 at 97%) + 12px blur + `--shadow-float` (soft 20px/44px drop).
- Corner glow `.glow-blue` — radial azure bleed from a card's top-right corner.
- Background overlays: 64px/28px hairline grids, low-opacity SVG film grain, blurred azure/champagne halos.

Light theme swaps to flat white cards on cool hairline borders (`rgba(16,24,40,0.07)`) with tight, low-spread shadows — console chrome, not floating glassware.

## Shapes

Radii: 0.75rem inner panels/controls, 1rem content cards, 1.5rem feature cards, fully-round pills for every button, chip, tab, and pagination dot. Buttons are **always pills** — never rectangles. Borders are hairline low-alpha everywhere (bone 8–15% on dark, black 5–6% on light); no 2px+ strokes.

## Components

Production Vue 3 components live in `templates/vue-package/src/components/ui/` (npm: `@zhixu/fabricmind-ui`); a React mirror for prototypes sits in `components/ui/`. Key patterns:

- **button-primary** — bone-filled pill, ink text; hover turns white with a bone glow shadow. Ghost/nav variants are hairline pills. CTAs are short verb phrases: 预约演示, 了解产品.
- **input** (`.fm-control`) — translucent ink-850 surface, hairline border, azure focus ring; `invalid` swaps border/ring to rouge, `:disabled` dims to 0.45 opacity.
- **panel / glass** — see Elevation.
- **tag / filter chips** — pill chips; selected state tints azure 12% fill + azure-bright text.
- **toast** — frosted float surface, tone icon leads (azure/champagne/rouge), 4s auto-dismiss.
- **fab** — 48px azure-glow circle, the AI entry point (sparkles glyph).
- **data-viz** — 1.4–1.6px strokes, azure primary series, champagne/mist/rouge secondary at 0.6 opacity, gradient progress bars azure-deep→azure.

## Motion

Calm and layered. Ease `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-calm`). Scroll reveals fade + rise 22–30px over 0.6–0.9s with 0.1s stagger. Idle drift on floating annotations (6–9s sine loops); shimmer sweep for "generating"; blinking caret; ping dot for live status. Hover: cards lift −4…−6px and tint their border azure. All motion honors `prefers-reduced-motion`.

## Do's and Don'ts

**Do**

- Keep azure as the only working accent; champagne/rouge only as data-series or semantic markers.
- Write Simplified Chinese first; set English accents in italic Cormorant Garamond.
- Use lucide linear icons only, stroke 1.5–1.75, sized 12–20px, colored via `currentColor`.
- Use 「」 corner quotes for coined terms, middots as separators, numbers as proof points.
- Keep both themes working: design against tokens, never hard-coded hex in components.

**Don't**

- No emoji, ever. No icon fonts, no filled icons.
- No rectangular buttons — pills only.
- No system green/yellow/red; semantic states stay in the brand palette.
- No heavy borders, no opaque drop shadows on dark surfaces.
- No exclamation marks or apologies in UI copy; errors state what's wrong and how to fix it.

## Source of Truth

This file mirrors the repo's canonical tokens for interoperability with DESIGN.md-aware tools (Stitch, coding agents). The authority chain is: `tokens/{colors,typography,effects}.css` (and `templates/vue-package/src/style.css` `@theme`) → this file. When tokens change, update the CSS first, then re-sync the YAML above. Deeper guidance: `readme.md` (full foundations), `AGENTS.md` (agent workflow), `components/ui/*.prompt.md` (per-component usage).
