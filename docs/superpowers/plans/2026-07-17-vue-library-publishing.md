# FabricMind Vue Library Publishing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn `templates/vue-package` into an npm-ready Vue 3 component package with ESM, CSS, and TypeScript declaration outputs while preserving the existing landing-page workflow.

**Architecture:** Keep the landing application and component package in the same project, but give the library a separate Vite config and public entry point. Vite builds ESM and CSS first, then `vue-tsc` emits declarations into the same `dist-lib` directory; package exports expose only that stable surface.

**Tech Stack:** Vue 3.5, TypeScript 5.8, vue-tsc, Vite 6 library mode, Tailwind CSS 4, motion-v

---

## File Map

- Create `templates/vue-package/src/index.ts`: stable public API and style side effect.
- Create `templates/vue-package/tsconfig.lib.json`: declaration-only compilation rooted at `src`.
- Create `templates/vue-package/vite.lib.config.ts`: ESM and CSS library build.
- Modify `templates/vue-package/package.json`: npm metadata, peer dependencies, exports, and scripts.
- Modify `templates/vue-package/README.md`: installation and consumer usage.
- Create `templates/vue-package/scripts/verify-package.mjs`: executable artifact contract checks.
- Create `templates/vue-package/tests/package-consumer.ts`: TypeScript consumer fixture.
- Create `templates/vue-package/tests/tsconfig.consumer.json`: isolated consumer type check.
- Modify `templates/vue-package/package-lock.json`: generated dependency classification changes.

The workspace is not a Git repository, so commit steps are replaced by explicit verification checkpoints.

### Task 1: Public API And Declaration Output

**Files:**
- Create: `templates/vue-package/src/index.ts`
- Create: `templates/vue-package/tsconfig.lib.json`

- [ ] **Step 1: Verify the public entry does not exist yet**

Run:

```powershell
Test-Path src/index.ts
Test-Path tsconfig.lib.json
```

Expected: both commands print `False`.

- [ ] **Step 2: Create the stable public entry**

Create `src/index.ts`:

```ts
import './style.css'

export { default as BrandMark } from './components/ui/BrandMark.vue'
export { default as Button } from './components/ui/Button.vue'
export { default as CountUp } from './components/ui/CountUp.vue'
export { default as IconButton } from './components/ui/IconButton.vue'
export { default as Reveal } from './components/ui/Reveal.vue'
export { default as SectionHeading } from './components/ui/SectionHeading.vue'

export { useContactDialog } from './composables/useContactDialog'
export { useTheme } from './composables/useTheme'
export type { Theme } from './composables/useTheme'
```

- [ ] **Step 3: Add declaration-only TypeScript configuration**

Create `tsconfig.lib.json`:

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "composite": false,
    "noEmit": false,
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationMap": true,
    "rootDir": "./src",
    "outDir": "./dist-lib",
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.lib.tsbuildinfo"
  },
  "include": ["src/index.ts", "env.d.ts"]
}
```

- [ ] **Step 4: Prove declaration generation works in isolation**

Run:

```powershell
npx vue-tsc -p tsconfig.lib.json
Test-Path dist-lib/index.d.ts
```

Expected: `vue-tsc` exits 0 and the path check prints `True`.

### Task 2: Library Build Configuration

**Files:**
- Create: `templates/vue-package/vite.lib.config.ts`

- [ ] **Step 1: Verify no library build configuration exists**

Run:

```powershell
Test-Path vite.lib.config.ts
```

Expected: `False`.

- [ ] **Step 2: Add the isolated Vite library build**

Create `vite.lib.config.ts`:

```ts
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(rootDir, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'dist-lib',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue', 'motion-v'],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'style.css' : 'assets/[name][extname]',
      },
    },
  },
})
```

- [ ] **Step 3: Run the JavaScript and CSS build**

Run:

```powershell
npx vite build --config vite.lib.config.ts
Get-ChildItem dist-lib
```

Expected: build exits 0 and `dist-lib/index.js` plus `dist-lib/style.css` exist.

- [ ] **Step 4: Re-run declarations after Vite cleans the output directory**

Run:

```powershell
npx vue-tsc -p tsconfig.lib.json
Test-Path dist-lib/index.js
Test-Path dist-lib/style.css
Test-Path dist-lib/index.d.ts
```

Expected: all three path checks print `True`.

### Task 3: Package Metadata And Consumer Contract

**Files:**
- Modify: `templates/vue-package/package.json`
- Modify: `templates/vue-package/package-lock.json`
- Create: `templates/vue-package/scripts/verify-package.mjs`

- [ ] **Step 1: Add a failing artifact contract check**

Create `scripts/verify-package.mjs`:

```js
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const distUrl = new URL('../dist-lib/', import.meta.url)

for (const file of ['index.js', 'index.d.ts', 'style.css']) {
  assert.ok(existsSync(new URL(file, distUrl)), `Missing dist-lib/${file}`)
}

assert.equal(packageJson.name, '@zhixu/fabricmind-ui')
assert.equal(packageJson.type, 'module')
assert.equal(packageJson.exports['.'].import, './dist-lib/index.js')
assert.equal(packageJson.exports['.'].types, './dist-lib/index.d.ts')
assert.equal(packageJson.exports['./style.css'], './dist-lib/style.css')
assert.equal(packageJson.peerDependencies.vue, '^3.5.0')
assert.equal(packageJson.peerDependencies['motion-v'], '^0.13.0')

const library = await import(new URL('index.js', distUrl).href)
const expectedExports = [
  'BrandMark',
  'Button',
  'CountUp',
  'IconButton',
  'Reveal',
  'SectionHeading',
  'useContactDialog',
  'useTheme',
]

assert.deepEqual(Object.keys(library).sort(), expectedExports.sort())

const bundledSource = readFileSync(new URL('index.js', distUrl), 'utf8')
assert.match(bundledSource, /from\s*["']vue["']/)
assert.match(bundledSource, /from\s*["']motion-v["']/)

console.log('Package artifact contract verified.')
```

Run:

```powershell
node scripts/verify-package.mjs
```

Expected: FAIL because the package metadata has not yet been updated.

- [ ] **Step 2: Configure npm-facing metadata**

Update `package.json` so its relevant fields are:

```json
{
  "name": "@zhixu/fabricmind-ui",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "main": "./dist-lib/index.js",
  "module": "./dist-lib/index.js",
  "types": "./dist-lib/index.d.ts",
  "files": ["dist-lib", "README.md"],
  "sideEffects": ["**/*.css"],
  "exports": {
    ".": {
      "types": "./dist-lib/index.d.ts",
      "import": "./dist-lib/index.js"
    },
    "./style.css": "./dist-lib/style.css",
    "./package.json": "./package.json"
  },
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "build:lib": "vite build --config vite.lib.config.ts && vue-tsc -p tsconfig.lib.json",
    "preview": "vite preview",
    "typecheck": "vue-tsc -b",
    "verify:package": "npm run build:lib && node scripts/verify-package.mjs && vue-tsc -p tests/tsconfig.consumer.json && npm pack --dry-run"
  },
  "peerDependencies": {
    "motion-v": "^0.13.0",
    "vue": "^3.5.0"
  }
}
```

Move `vue`, `motion-v`, and `lucide-vue-next` into `devDependencies`. Keep the existing direct `motion-dom@^12.5.0` and `motion-utils@^12.5.0` compatibility pins.

- [ ] **Step 3: Refresh the lockfile without changing resolved versions unnecessarily**

Run:

```powershell
npm install --package-lock-only
```

Expected: exits 0, reports no vulnerabilities, and updates the root package metadata in `package-lock.json`.

- [ ] **Step 4: Build and pass the artifact contract**

Run:

```powershell
npm run build:lib
node scripts/verify-package.mjs
```

Expected: both commands exit 0 and print `Package artifact contract verified.`.

### Task 4: Real Consumer Verification And Documentation

**Files:**
- Create: `templates/vue-package/tests/package-consumer.ts`
- Create: `templates/vue-package/tests/tsconfig.consumer.json`
- Modify: `templates/vue-package/README.md`

- [ ] **Step 1: Add a consumer that imports only the published package surface**

Create `tests/package-consumer.ts`:

```ts
import type { Component } from 'vue'
import {
  BrandMark,
  Button,
  CountUp,
  IconButton,
  Reveal,
  SectionHeading,
  useContactDialog,
  useTheme,
  type Theme,
} from '@zhixu/fabricmind-ui'

const components: Component[] = [
  BrandMark,
  Button,
  CountUp,
  IconButton,
  Reveal,
  SectionHeading,
]

const theme: Theme = 'dark'
const themeApi = useTheme()
const contactDialogApi = useContactDialog()

void components
void theme
void themeApi
void contactDialogApi
```

- [ ] **Step 2: Add the isolated consumer type-check config**

Create `tests/tsconfig.consumer.json`:

```json
{
  "extends": "../tsconfig.app.json",
  "compilerOptions": {
    "composite": false,
    "noEmit": true,
    "tsBuildInfoFile": "../node_modules/.tmp/tsconfig.consumer.tsbuildinfo"
  },
  "include": ["./package-consumer.ts"]
}
```

- [ ] **Step 3: Prove package-name imports resolve through `exports` and declarations**

Run:

```powershell
npx vue-tsc -p tests/tsconfig.consumer.json
```

Expected: exits 0 with no diagnostics.

- [ ] **Step 4: Document installation and usage**

Append these sections to `README.md`:

```markdown
## Install as a component library

The package is npm-ready but remains private until a registry and publishing policy are selected.

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
```

- [ ] **Step 5: Run the complete package verification**

Run:

```powershell
npm run verify:package
```

Expected:

- Library build succeeds.
- Artifact contract prints `Package artifact contract verified.`.
- Consumer type check exits 0.
- `npm pack --dry-run` lists only `dist-lib`, `README.md`, and `package.json` files.

- [ ] **Step 6: Confirm the existing landing page still builds**

Run:

```powershell
npm run build
```

Expected: `vue-tsc -b && vite build` exits 0 and produces the existing landing-page `dist` output.

- [ ] **Step 7: Final scope check**

Run:

```powershell
$unexpected = Select-String -Path src/index.ts -Pattern "from './components/" |
  Where-Object { $_.Line -notmatch "from './components/ui/" }
if ($unexpected) { $unexpected; exit 1 }
```

Expected: no matches. Landing sections and product mocks are not part of the public API.


