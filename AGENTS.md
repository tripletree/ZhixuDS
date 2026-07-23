# 知序 FabricMind Design System — Agent Instructions

This folder is a design system for 知序 FabricMind (Zhixu), a dark/light-theme B2B DATA+BI+AI decision platform for textile product development.

Before designing or coding anything for this brand:

1. Read `readme.md` — brand context, content fundamentals (copy tone, bilingual eyebrows, no emoji), visual foundations (colors, type, surfaces, motion), iconography rules.
2. Tokens: `tokens/*.css` (CSS custom properties, dark default + `html.light`/`.theme-light` inversion), entry point `styles.css`.
3. Production Vue 3 code: `templates/vue-package/` — Vue 3.5 + TS 5.8 (vue-tsc) + Vite 6 + Tailwind CSS 4 + motion-v + lucide-vue-next. Tokens live in its `src/style.css` `@theme`; UI primitives in `src/components/ui/` (core: BrandMark/Button/IconButton/SectionHeading/Reveal/CountUp; app-level: Panel, Tag/StatusDot, Stat, Progress, Sparkline/SparkBars, Tabs, Field/Input/TextArea/Select/Listbox, Checkbox/CheckboxGroup, Radio/RadioGroup, FilterChips, Collapse, Popover, DropdownMenu, DateRangeEditor, EmptyState, ProductCard/ThumbnailStrip, Pagination, AlphabetIndex, Fab, DataTable, Dialog — all exported from `src/index.ts`, exercised in `demo-ui.html`); landing sections + product mocks included. Use this for production work.
4. React mirror (for HTML prototypes/mocks): `components/core/*.jsx` + `components/ui/*.jsx` (same app-level component set as the Vue package) + `ui_kits/landing/`.
5. Assets: `assets/` (brand mark, hero visuals, scenario illustrations dark/light, lucide icon SVGs).

Rules: Lucide linear icons only (stroke 1.5–1.75), never emoji; pill buttons only; Simplified Chinese copy with italic Cormorant Garamond English accents; azure is the single working accent, champagne/rouge sparingly; keep root `tokens/*.css` and `templates/vue-package/src/style.css` in sync when changing tokens.
