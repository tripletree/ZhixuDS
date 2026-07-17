import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// On GitHub Pages the site is served from a repo sub-path (/zhixu/).
// Local dev and root-domain hosts (e.g. Vercel) stay at '/'.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/zhixu/' : '/',
  plugins: [vue(), tailwindcss()],
})
