# 知序 FabricMind — Design System

**知序 FabricMind** (Zhixu) is a **DATA + BI + AI intelligent decision system for textile product development** — "Fashion Intelligence." A ToB (B2B) BI platform for the fashion/textile industry: trend research, product planning, material innovation, and client proposals. Tagline: 让趋势有序，让开发有据 · 让时尚判断成为可验证的 AI 决策 ("Order to trends, evidence to development — making fashion judgment a verifiable AI decision").

Supports **dark (default) and light themes** — toggled by adding class `light` to `<html>` (or `.theme-light` on a container, an addition here for per-card theming).

## Source

- GitHub: https://github.com/tripletree/Zhixu (branch `default`) — Vue 3 + Vite + Tailwind CSS v4 landing page. Tokens live in `src/style.css` `@theme`; sections in `src/components/`; product mock visuals in `src/components/visuals/`. Explore this repo for deeper fidelity when designing for this product.
- Icons: `lucide-vue-next` (linear icons, stroke 1.5–1.75). Copies in `assets/icons/`.

## Products represented

1. **Marketing landing page** (the source repo) — recreated in Vue in `templates/vue-package/` (the showcase site's default view).
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

- **Color**: obsidian-ink dark base (`--color-ink-950…700`), cool bone text (`--color-bone*`), metallic mist neutrals. One working accent: electric azure `#57b8d4`; champagne gold `#c9ad7c` and rouge `#9a4250` used *sparingly* as data-series / marker colors. Light theme switches to the product-console palette (calibrated against the Normalization Studio admin UI): ink→cool near-white surfaces, bone→near-black text, and azure becomes a royal blue `#2563eb`.
- **Backgrounds**: page = subtle navy radial glow over a near-black vertical gradient; hero = full-bleed photographic visual anchored right, faded into a solid navy field (`--hero-base`) with layered left/bottom gradients. Overlays: fine 64px/28px hairline grids (`.bg-grid`, `.bg-grid-fine`), low-opacity SVG film grain (`.bg-noise`), soft radial azure/champagne halos with heavy blur.
- **Type**: Inter + Noto Sans SC for UI/body; Cormorant Garamond *italic* for English accents and numerals like slide "01". Hero 4.25rem/700; section h2 2.7rem/700 tight; body 15px relaxed; captions 13px; eyebrow 0.72rem uppercase, letter-spacing 0.22em.
- **Cards**: `.panel` (diagonal sheen gradient, 1px `rgba(255,255,255,0.14)` border, no blur) for content cards; `.glass` (12px blur frosted) for floating chips/dialogs/dashboard tiles. Light theme: near-white cards, hairline black borders, large diffuse shadows. Radii: 1rem cards, 1.5rem feature cards, 0.75rem inner panels, pills fully round.
- **Corner glow**: `.glow-blue` — radial azure glow bleeding from top-right corner of cards.
- **Motion**: calm and layered. Ease `cubic-bezier(0.22,1,0.36,1)` (`--ease-calm`). Scroll reveals: fade + rise 22–30px, 0.6–0.9s, stagger 0.1s. Continuous idle drift on floating annotations (6–9s sine loops). Shimmer sweep for "generating"; blinking caret; ping dot for live status. All motion honors `prefers-reduced-motion`.
- **Hover**: cards lift −4…−6px and border tints azure (`hover:border-azure/25`); links dim→bone; arrows nudge +x; primary CTA turns white with a bone glow shadow (`--cta-hover`, `--cta-glow`). Press states: none distinct.
- **Buttons**: pill-shaped always. Primary = bone-filled, ink text; secondary/ghost/nav = hairline `border-bone/15` + `bg-transparent`; icon button = 36px circle, also transparent. Hairline buttons never carry the `bg-bone/[0.03]` wash (that belongs to non-interactive chips), so they read white in the light theme. All of them share one hover/focus state in both themes: border `azure/40`, fill `azure/10`, text and icon `azure-bright` together, plus a 3px `azure/12` focus ring.
- **Borders**: hairline low-alpha everywhere (`rgba(236,234,225,0.08…0.15)` dark; `rgba(0,0,0,0.05-0.06)` light). Section separators `border-t border-bone/[0.06]`.
- **Transparency/blur**: frosted nav appears on scroll (`bg-ink-950/70 backdrop-blur-xl`); dialogs sit on `bg-ink-950/80 backdrop-blur-sm`.
- **Imagery**: fashion/runway photography, cool-toned, moody on dark; placeholder SVGs shipped for scenario cards (dark + `-light` variants in `assets/scenarios/`).
- **Data-viz**: thin 1.4–1.6px strokes; azure primary series, champagne/mist/rouge secondary at 0.6 opacity; radar polygons with 0.18 fill; gradient progress bars azure-deep→azure.

## ICONOGRAPHY

- **System**: [Lucide](https://lucide.dev) linear icons only (`lucide-vue-next` in source). Stroke width 1.5 (feature icons) or 1.75 (nav); sizes 12–20px. No icon font, no emoji, no filled icons.
- Copies of every icon the site uses are in `assets/icons/*.svg`; components import glyphs directly from `lucide-vue-next` and color via `currentColor` (see `templates/vue-package/src/components/ui/icons.prompt.md`). Need more icons? Copy from the lucide repo/CDN — keep 2px-grid 24px viewBox linear style.
- **Logo**: `BrandMark` — a woven-grid SVG mark (three bone verticals × two azure horizontals + champagne dot, warp-and-weft motif) in a rounded ink square. Source of truth: `assets/favicon.svg` and `templates/vue-package/src/components/ui/BrandMark.vue`. Wordmark = 知序 (medium sans) + *FabricMind* (italic serif).
- Unicode used as micro-icons in data-viz labels only: `→`, `↑` axis arrows, `·` separators.

## Fonts

All three families load from Google Fonts via `tokens/typography.css` (as in the source `index.html`): Inter (300–700), Noto Sans SC (300–700), Cormorant Garamond (400–600 + italic). No self-hosted font binaries exist in the source.

## Index

- `styles.css` — entry; imports `tokens/{colors,typography,effects}.css`
- `DESIGN.md` — the visual identity in the open [DESIGN.md format](https://github.com/google-labs-code/design.md) (YAML tokens + prose sections) for Stitch / coding-agent interop; mirrors the CSS tokens, which remain the source of truth
- `assets/` — favicon/brand mark, hero visuals (dark png / light webp / placeholder svg), scenario illustrations (dark + light), WeChat QR, lucide icon copies
- `templates/vue-package/` — **production Vue 3 package** (`@zhixu/fabricmind-ui`): Vue 3.5 + TS 5.8 (vue-tsc) + Vite 6 + Tailwind 4 + motion-v + lucide-vue-next; tokens in `src/style.css` `@theme`; core primitives (BrandMark, Button/IconButton, SectionHeading, Reveal, CountUp) + app-level components (Panel, Tag/StatusDot, Stat, Progress, Sparkline/SparkBars, Tabs, Field/Input/TextArea/Select/Listbox, Checkbox/Radio groups, Switch, FilterChips, Collapse, Popover, DropdownMenu, DatePicker, DateRangeEditor, EmptyState, ProductCard/ThumbnailStrip, Pagination, AlphabetIndex, Fab, DataTable, Dialog, Toast/ToastHost + useToast, Tooltip) — each SFC ships a `.prompt.md` usage guide beside it. See its README.md.
- `templates/vue-package/` — also the **showcase site** (deploy on Vercel with the project's Root Directory set to `templates/vue-package`; its `vercel.json` handles the rest): hash-routed views for the landing page (`#/`), the component gallery (`#/components`), and the foundations specimens (`#/guidelines`), all with the dark/light toggle
- `SKILL.md` — agent skill entry point

### Intentional additions
- `Button` — the source repeats pill-button markup inline; extracted as primary/ghost/nav variants (+ 36px `IconButton`) with exact classes/values.
- `.theme-light` container class — mirrors `html.light` for per-container theme demos.
- App-level ui components — the source has no product app UI, so these are distilled from its mock visuals rather than copied: `Panel` (.panel/.glass/feature surfaces), `Tag` + `StatusDot` (chat suggestion chips, hero ping annotation), `Stat` (机会指数 numeral), `Progress` (TOP 5 gradient bars), `Sparkline`/`SparkBars` (1.6px trend strokes, chat bar chart), `Tabs` (pill segmented control), `Field`/`Input`/`TextArea`/`Select` (chat-input surface via `.fm-control`; `invalid` swaps border/ring to rouge via `.fm-control-error`, `Field error` shows the rouge message, `:disabled` dims to 0.45), `Listbox` (fully branded dropdown panel — native select popups can’t be themed; `disabled`/`invalid` states), `Checkbox`/`CheckboxGroup` + `Radio`/`RadioGroup` (azure-filled filter controls), `FilterChips` (selectable pill group), `Collapse` (filter-sidebar group), `Popover` (anchored frosted panel — base for filter/date editors), `DropdownMenu` (action menu), `DateRangeEditor` (relative time-range presets), `EmptyState`, `ProductCard`/`ThumbnailStrip` (browse-grid media cards), `Pagination`, `AlphabetIndex` (A–Z picker rail), `Fab` (azure-glow AI entry), `DataTable` (hairline BI rows), `Dialog` (extracted from ContactDialog), `Toast`/`ToastHost` + `useToast` (frosted transient notices — info/success azure, warning champagne, error rouge; never green/yellow system colors), `Tooltip` (caption-scale hover/focus hint on the float surface). Each `.vue` SFC ships a `.prompt.md` usage guide beside it in `templates/vue-package/src/components/ui/`.
