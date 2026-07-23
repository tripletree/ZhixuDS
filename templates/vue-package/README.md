# 知序 FabricMind — Vue 3 Package

Production-grade Vue implementation of the design system — the canonical source stack, vendored from https://github.com/tripletree/Zhixu plus extracted UI primitives.

## Stack

- **Vue 3.5** + **TypeScript 5.8** (`vue-tsc` for type-checking: `npm run typecheck`)
- **Vite 6** + `@vitejs/plugin-vue`
- **Tailwind CSS 4** (`@tailwindcss/vite`, CSS-first tokens in `src/style.css` `@theme`)
- **motion-v** (Motion for Vue) — scroll reveals, layered fades, idle drift
- **lucide-vue-next** — linear icons

```bash
npm install
npm run dev        # dev server
npm run build      # vue-tsc type-check + production build
```

## Layout

- `src/style.css` — all design tokens (`@theme`): ink/bone/mist/azure/champagne/rouge, fonts, `--ease-calm`; light theme via `html.light`; `.glass` / `.panel` / `.bg-grid` / `.glow-blue` utilities.
- `src/components/ui/` — primitives: `BrandMark`, `Button` + `IconButton` (extracted from repeated inline pill markup — additions to the source), `SectionHeading`, `Reveal`, `CountUp`; plus Vue ports of the root React mirror's app-level components: `Panel`, `Tag`/`StatusDot`, `Stat`, `Progress`, `Sparkline`/`SparkBars`, `Tabs`, `Field`/`Input`/`TextArea`/`Select`, `Listbox`, `Checkbox`/`CheckboxGroup`, `Radio`/`RadioGroup`, `FilterChips`, `Collapse`, `Popover`, `DropdownMenu`, `DateRangeEditor`, `EmptyState`, `ProductCard`/`ThumbnailStrip`, `Pagination`, `AlphabetIndex`, `Fab`, `DataTable`, `Dialog`, `Toast`/`ToastHost` (+ `useToast` composable — app-wide queue, auto-dismiss, `duration: 0` for sticky), `Tooltip`. Same APIs as the React versions with Vue idioms: `v-model` (`v-model:open` on Popover, `v-model:page` on Pagination) instead of value/onChange, slots (`anchor`, `footer`, `tags`, `action`, `cell-<key>`) instead of render props, and lucide-vue-next components instead of icon-name strings. `demo-ui.html` (`npx vite` then open `/demo-ui.html`) exercises all of them in both themes.
- `src/components/` — landing sections: `SiteNav`, `HeroSection`, `SystemFramework`, `FeatureMatrix`, `BusinessScenarios`, `CtaFooter`, `ContactDialog`.
- `src/components/visuals/` — product mocks: `DashboardMock`, `ChatMock`, `ReportMock`, `TryOnMock`.
- `src/composables/` — `useTheme` (dark/light, localStorage `fm-theme`, cross-fade), `useContactDialog`.
- `public/` — hero visuals, scenario illustrations (dark + `-light`), favicon/brand mark, WeChat QR.

Usage:

```vue
<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import Button from './components/ui/Button.vue'
</script>
<template>
  <Button size="md">
    预约演示
    <template #icon><ArrowRight class="size-4 transition-transform group-hover:translate-x-1" /></template>
  </Button>
</template>
```

Note: the interactive Design System tab in this workspace renders the React mirror (`components/`, `ui_kits/` at the project root); this folder is the Vue source of truth for production work. Keep the two in sync when tokens change (root `tokens/*.css` ↔ `src/style.css`).

## Install as a component library

```bash
npm install @zhixu/fabricmind-ui vue motion-v
```

Import components and the shared design-system styles:

```vue
<script setup lang="ts">
import { Button } from '@zhixu/fabricmind-ui'
import '@zhixu/fabricmind-ui/style.css'
</script>

<template>
  <Button>预约演示</Button>
</template>
```

Run `npm run build:lib` to create the publishable output in `dist-lib/`, and run `npm run verify:package` before publishing or sharing a tarball.

## Publishing

The package is publish-ready: metadata (`license`, `repository`, `publishConfig`) is set and `prepublishOnly` runs the full `verify:package` contract (lib build, export check, consumer type check, pack dry-run).

Two ways to publish:

1. **Tag-driven CI** — push a `ui-v<version>` tag matching `package.json` (e.g. `ui-v0.1.0`); `.github/workflows/publish-vue-package.yml` verifies and publishes. Requires the `NPM_TOKEN` repository secret (npm automation token with publish rights on the `@zhixu` scope).
2. **Manual** — `npm publish` from this directory with an authenticated npm account.

Notes for the package owner:

- Publishing under the `@zhixu` scope requires that org to exist on npmjs.com; `publishConfig.access` is `restricted` (private package, needs a paid npm org). Switch to `"access": "public"` for a public package.
- `license` is `UNLICENSED` (all rights reserved) — deliberate for a proprietary brand system. Replace with an SPDX id (e.g. `MIT`) plus a `LICENSE` file if the owner decides to open-source it.
- No-registry option: `npm pack` produces a tarball consumers can install directly (`npm install ./zhixu-fabricmind-ui-<version>.tgz vue motion-v`) — verified to resolve and SSR-render.
