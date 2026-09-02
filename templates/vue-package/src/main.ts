import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Normalize legacy "#/route" hashes (e.g. "#/guidelines") to selector-safe
// "#route" ("#guidelines") as early as possible. A hash containing "/" is an
// invalid CSS selector, so any global on-load handler that calls
// document.querySelector(location.hash) throws a SyntaxError. Rewriting the
// URL before the app mounts prevents that even when the page is opened
// directly at an old "#/..." URL.
if (typeof window !== 'undefined' && /^#\/+/.test(window.location.hash)) {
  const normalized = '#' + window.location.hash.replace(/^#\/+/, '')
  window.history.replaceState(
    window.history.state,
    '',
    window.location.pathname + window.location.search + (normalized === '#' ? '' : normalized),
  )
}

createApp(App).mount('#app')
