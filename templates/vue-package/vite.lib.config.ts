import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  publicDir: false,
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

