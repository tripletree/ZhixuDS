import { ref, type Component } from 'vue'

/** Toast queue entry — rendered by ToastHost. */
export interface ToastItem {
  id: number
  tone?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  description?: string
  icon?: Component
  /** Auto-dismiss ms; 0 = sticky @default the push default (4000) */
  duration?: number
}

const toasts = ref<ToastItem[]>([])
let nextId = 1

function dismiss(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

function push(toast: Omit<ToastItem, 'id'>): number {
  const id = nextId++
  toasts.value = [...toasts.value, { ...toast, id }]
  const duration = toast.duration ?? 4000
  if (duration > 0) setTimeout(() => dismiss(id), duration)
  return id
}

/**
 * App-wide toast queue — call `push()` from anywhere; render one `<ToastHost />`
 * near the app root. `push` returns the id; `duration: 0` keeps a toast until dismissed.
 */
export function useToast() {
  return { toasts, push, dismiss }
}
