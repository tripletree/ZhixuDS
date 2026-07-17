import { ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'fm-theme'

// index.html applies the saved theme to <html> before first paint,
// so the DOM is the source of truth on startup.
const theme = ref<Theme>(
  typeof document !== 'undefined' && document.documentElement.classList.contains('light')
    ? 'light'
    : 'dark',
)

function apply(next: Theme) {
  const root = document.documentElement
  // Briefly enable color transitions so the switch cross-fades instead of snapping.
  root.classList.add('theme-anim')
  root.classList.toggle('light', next === 'light')
  window.setTimeout(() => root.classList.remove('theme-anim'), 450)
}

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    apply(theme.value)
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch (e) {
      /* private mode etc. */
    }
  }

  return { theme, toggle }
}
