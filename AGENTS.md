# 知序 FabricMind Design System — Agent Instructions

This folder is a design system for 知序 FabricMind (Zhixu), a dark/light-theme B2B DATA+BI+AI decision platform for textile product development.

Before designing or coding anything for this brand:

1. Read `readme.md` — brand context, content fundamentals (copy tone, bilingual eyebrows, no emoji), visual foundations (colors, type, surfaces, motion), iconography rules. `DESIGN.md` is the same identity in the open DESIGN.md format (YAML tokens + nine sections) for Stitch/agent interop — it mirrors the CSS tokens, it is not the source of truth.
2. Tokens: `tokens/*.css` (CSS custom properties, dark default + `html.light`/`.theme-light` inversion), entry point `styles.css`.
3. Production Vue 3 code: `templates/vue-package/` — Vue 3.5 + TS 5.8 (vue-tsc) + Vite 6 + Tailwind CSS 4 + motion-v + lucide-vue-next. Tokens live in its `src/style.css` `@theme`; UI primitives in `src/components/ui/` (core: BrandMark/Button/IconButton/SectionHeading/Reveal/CountUp; app-level: Panel, Tag/StatusDot, Stat, Progress, Sparkline/SparkBars, Tabs, Field/Input/TextArea/Select/Listbox, Checkbox/CheckboxGroup, Radio/RadioGroup, Switch, FilterChips, Collapse, Popover, DropdownMenu, DatePicker, DateRangeEditor, EmptyState, ProductCard/ThumbnailStrip, Pagination, AlphabetIndex, Fab, DataTable, Dialog, Toast/ToastHost + useToast, Tooltip — all exported from `src/index.ts`, exercised in `demo-ui.html`); charts in `src/components/charts/` (ECharts as optional peer: ChartCard, BarChart, PieChart, ChartLegend, Chart + `theme.ts` reading the live `--chart-*` tokens; guide in `Charts.prompt.md`); landing sections + product mocks included. Use this for production work.
4. Per-component usage guides: `templates/vue-package/src/components/ui/*.prompt.md` — API examples in Vue syntax plus copywriting norms; read the relevant one before using a component.
5. Showcase site: the Vue package doubles as the deployable demo site (`npm run dev`, or Vercel with Root Directory = `templates/vue-package`) — landing at `#/`, component gallery at `#/components`, foundations at `#/guidelines`.
5. Assets: `assets/` (brand mark, hero visuals, scenario illustrations dark/light, lucide icon SVGs).

Rules: Lucide linear icons only (stroke 1.5–1.75), never emoji; pill buttons only; Simplified Chinese copy with italic Cormorant Garamond English accents; azure is the single working accent, champagne/rouge sparingly; keep root `tokens/*.css`, `templates/vue-package/src/style.css`, and the `DESIGN.md` YAML front matter in sync when changing tokens (CSS first — it is the source of truth).
