# 知序 FabricMind — Design System

**知序 FabricMind** (Zhixu) is a **DATA + BI + AI intelligent decision system for textile product development** — "Fashion Intelligence." A ToB (B2B) BI platform for the fashion/textile industry: trend research, product planning, material innovation, and client proposals. Tagline: 让趋势有序，让开发有据 · 让时尚判断成为可验证的 AI 决策 ("Order to trends, evidence to development — making fashion judgment a verifiable AI decision").

Supports **dark (default) and light themes** — toggled by adding class `light` to `<html>` (or `.theme-light` on a container, an addition here for per-card theming).

## Source

- GitHub: https://github.com/tripletree/Zhixu (branch `default`) — Vue 3 + Vite + Tailwind CSS v4 landing page. Tokens live in `src/style.css` `@theme`; sections in `src/components/`; product mock visuals in `src/components/visuals/`. Explore this repo for deeper fidelity when designing for this product.
- Icons: `lucide-vue-next` (linear icons, stroke 1.5–1.75). Copies in `assets/icons/`.

## Products represented

1. **Marketing landing page** (the source repo) — recreated in `ui_kits/landing/`.
2. The **BI platform itself** appears only as in-page mock visuals (dashboard, AI chat, try-on, report). No real product app UI exists in the source; the mocks are recreated as components of the landing kit, not invented product screens.

## CONTENT FUNDAMENTALS

- **Language**: Simplified Chinese first; English appears as *italic serif* (Cormorant Garamond) supporting text — module names ("Data Foundation"), eyebrows ("Solution · 解决方案"), brand name "FabricMind".
- **Voice**: confident, declarative B2B claims built on parallelism and four-character rhythm: 让趋势有序，让开发有据; 更快、更准、更有依据; 不打样，先看效果; 把分析师，装进对话框.
- **Person**: addresses the reader as 你 ("融入你的产品开发与提案流程"); the brand speaks as 知序, never 我们-heavy.
- **Eyebrows**: bilingual with a middot separator, uppercase-tracked: `Solution · 解决方案`, `Let's talk · 预约演示`.
- **Numbers as proof**: 机会指数 78/100, +18%, TOP 5 — data is the aesthetic. Material names stay in English (Lyocell, Recycled Nylon).
- **No emoji, ever.** Punctuation: Chinese 「」 corner quotes for coined terms (「市场感觉」), middots as separators.
- **CTAs**: short verb phrases — 预约演示, 了解产品, 生成上身效果, 导出 PPT.

## VISUAL FOUNDATIONS

- **Color**: obsidian-ink dark base (`--color-ink-950…700`), cool bone text (`--color-bone*`), metallic mist neutrals. One working accent: electric azure `#57b8d4`; champagne gold `#c9ad7c` and rouge `#9a4250` used *sparingly* as data-series / marker colors. Light theme inverts ink→white surfaces, bone→dark text, deepens azure for contrast.
- **Backgrounds**: page = subtle navy radial glow over a near-black vertical gradient; hero = full-bleed photographic visual anchored right, faded into a solid navy field (`--hero-base`) with layered left/bottom gradients. Overlays: fine 64px/28px hairline grids (`.bg-grid`, `.bg-grid-fine`), low-opacity SVG film grain (`.bg-noise`), soft radial azure/champagne halos with heavy blur.
- **Type**: Inter + Noto Sans SC for UI/body; Cormorant Garamond *italic* for English accents and numerals like slide "01". Hero 4.25rem/700; section h2 2.7rem/700 tight; body 15px relaxed; captions 13px; eyebrow 0.72rem uppercase, letter-spacing 0.22em.
- **Cards**: `.panel` (diagonal sheen gradient, 1px `rgba(255,255,255,0.14)` border, no blur) for content cards; `.glass` (12px blur frosted) for floating chips/dialogs/dashboard tiles. Light theme: near-white cards, hairline black borders, large diffuse shadows. Radii: 1rem cards, 1.5rem feature cards, 0.75rem inner panels, pills fully round.
- **Corner glow**: `.glow-blue` — radial azure glow bleeding from top-right corner of cards.
- **Motion**: calm and layered. Ease `cubic-bezier(0.22,1,0.36,1)` (`--ease-calm`). Scroll reveals: fade + rise 22–30px, 0.6–0.9s, stagger 0.1s. Continuous idle drift on floating annotations (6–9s sine loops). Shimmer sweep for "generating"; blinking caret; ping dot for live status. All motion honors `prefers-reduced-motion`.
- **Hover**: cards lift −4…−6px and border tints azure (`hover:border-azure/25`); links dim→bone; arrows nudge +x; primary CTA turns white with a bone glow shadow (`--cta-hover`, `--cta-glow`). Press states: none distinct.
- **Buttons**: pill-shaped always. Primary = bone-filled, ink text; secondary/ghost = hairline `border-bone/15` + transparent; icon button = 36px circle.
- **Borders**: hairline low-alpha everywhere (`rgba(236,234,225,0.08…0.15)` dark; `rgba(0,0,0,0.05-0.06)` light). Section separators `border-t border-bone/[0.06]`.
- **Transparency/blur**: frosted nav appears on scroll (`bg-ink-950/70 backdrop-blur-xl`); dialogs sit on `bg-ink-950/80 backdrop-blur-sm`.
- **Imagery**: fashion/runway photography, cool-toned, moody on dark; placeholder SVGs shipped for scenario cards (dark + `-light` variants in `assets/scenarios/`).
- **Data-viz**: thin 1.4–1.6px strokes; azure primary series, champagne/mist/rouge secondary at 0.6 opacity; radar polygons with 0.18 fill; gradient progress bars azure-deep→azure.

## ICONOGRAPHY

- **System**: [Lucide](https://lucide.dev) linear icons only (`lucide-vue-next` in source). Stroke width 1.5 (feature icons) or 1.75 (nav); sizes 12–20px. No icon font, no emoji, no filled icons.
- Copies of every icon the site uses are in `assets/icons/*.svg`; the React `Icon` component (`components/core/Icon.jsx`) embeds the same lucide paths inline and colors via `currentColor`. Need more icons? Copy from the lucide repo/CDN — keep 2px-grid 24px viewBox linear style.
- **Logo**: `BrandMark` — a woven-grid SVG mark (three bone verticals × two azure horizontals + champagne dot, warp-and-weft motif) in a rounded ink square. Source of truth: `assets/favicon.svg` and `components/core/BrandMark.jsx`. Wordmark = 知序 (medium sans) + *FabricMind* (italic serif).
- Unicode used as micro-icons in data-viz labels only: `→`, `↑` axis arrows, `·` separators.

## Fonts

All three families load from Google Fonts via `tokens/typography.css` (as in the source `index.html`): Inter (300–700), Noto Sans SC (300–700), Cormorant Garamond (400–600 + italic). No self-hosted font binaries exist in the source.

## Index

- `styles.css` — entry; imports `tokens/{colors,typography,effects}.css`
- `assets/` — favicon/brand mark, hero visuals (dark png / light webp / placeholder svg), scenario illustrations (dark + light), WeChat QR, lucide icon copies
- `components/core/` — BrandMark, Icon, Button, SectionHeading, CountUp, Reveal (React mirror for this workspace's Design System tab)
- `components/ui/` — application-level components distilled from the landing mocks: Panel, Tag/StatusDot, Stat, Progress, Sparkline/SparkBars, Tabs, Field/Input/TextArea/Select/Listbox, Checkbox/Radio groups, FilterChips, Collapse, Popover, DropdownMenu, DateRangeEditor, EmptyState, ProductCard/ThumbnailStrip, Pagination, AlphabetIndex, Fab, DataTable, Dialog (React mirror for this workspace's cards; Vue SFC counterparts live in `templates/vue-package/src/components/ui/`)
- `templates/vue-package/` — **production Vue 3 package**: Vue 3.5 + TS 5.8 (vue-tsc) + Vite 6 + Tailwind 4 + motion-v + lucide-vue-next; vendored source (sections, visuals, composables, tokens in `src/style.css`) + extracted `Button.vue`/`IconButton.vue` + Vue ports of every app-level ui component above (`demo-ui.html` exercises them all). See its README.md.
- `ui_kits/landing/` — full landing-page recreation (`index.html` + section JSX), dark/light toggle, contact dialog
- `guidelines/` — foundation specimen cards (Design System tab)
- `templates/` — deck/doc starting templates for consuming projects
- `SKILL.md` — agent skill entry point

### Intentional additions
- `Icon` — wrapper embedding the lucide glyphs the product uses (source imports lucide components directly). Extended with `chevron-down`/`check`/`search`/`chevron-left`/`chevron-right`/`chevrons-left`/`chevrons-right`/`ellipsis-vertical`/`calendar` (lucide copies, also in `assets/icons/`) for the form/browse controls.
- `Button` — the source repeats pill-button markup inline; extracted here as primary/ghost/icon variants with exact classes/values.
- `.theme-light` container class — mirrors `html.light` for per-card theme demos.
- `components/ui/` — the source has no product app UI, so these are distilled from its mock visuals rather than copied: `Panel` (.panel/.glass/feature surfaces), `Tag` + `StatusDot` (chat suggestion chips, hero ping annotation), `Stat` (机会指数 numeral), `Progress` (TOP 5 gradient bars), `Sparkline`/`SparkBars` (1.6px trend strokes, chat bar chart), `Tabs` (pill segmented control), `Field`/`Input`/`TextArea`/`Select` (chat-input surface via `.fm-control` in `tokens/effects.css`; `invalid` swaps border/ring to rouge via `.fm-control-error`, `Field error` shows the rouge message, `:disabled` dims to 0.45), `Listbox` (fully branded dropdown panel — native select popups can’t be themed; `disabled`/`invalid` states), `Checkbox`/`CheckboxGroup` + `Radio`/`RadioGroup` (azure-filled filter controls), `FilterChips` (selectable pill group), `Collapse` (filter-sidebar group), `Popover` (anchored frosted panel — base for filter/date editors), `DropdownMenu` (action menu), `DateRangeEditor` (relative time-range presets), `EmptyState`, `ProductCard`/`ThumbnailStrip` (browse-grid media cards), `Pagination`, `AlphabetIndex` (A–Z picker rail), `Fab` (azure-glow AI entry), `DataTable` (hairline BI rows), `Dialog` (extracted from ContactDialog). Each ships `.jsx` + `.d.ts` + `.prompt.md` like core, plus a production Vue SFC port in `templates/vue-package/src/components/ui/` (same APIs, `v-model` in place of value/onChange, lucide-vue-next components in place of icon-name strings).
