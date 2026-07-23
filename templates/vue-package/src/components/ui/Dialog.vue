<script setup lang="ts">
/** Modal — blurred ink overlay + frosted glass card, extracted from ContactDialog. Emits `close`. */
import { computed, onBeforeUnmount, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title?: string
    subtitle?: string
    size?: 'sm' | 'md' | 'lg'
    width?: number
    align?: 'center' | 'left'
    /** Show the corner close button and allow overlay/Escape close */
    closable?: boolean
    /** overflow clips floating panels (Listbox/Popover) — only opt into scrolling for long content */
    scrollBody?: boolean
  }>(),
  { open: false, size: 'sm', align: 'center', closable: true, scrollBody: false },
)

const emit = defineEmits<{ close: [] }>()

const SIZES = { sm: 384, md: 480, lg: 720 } as const
const maxWidth = computed(() => `${props.width ?? SIZES[props.size] ?? SIZES.sm}px`)

function requestClose() {
  if (props.closable) emit('close')
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') requestClose()
}
watch(
  () => props.open,
  (v) => {
    document.body.style.overflow = v ? 'hidden' : ''
    if (v) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
  { immediate: true },
)
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-if="open"
    role="dialog"
    aria-modal="true"
    style="position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center; padding: 0 24px"
  >
    <div
      style="position: absolute; inset: 0; background: color-mix(in srgb, var(--color-ink-950) 80%, transparent); backdrop-filter: blur(4px)"
      @click="requestClose"
    ></div>
    <div
      class="glass fm-dialog-in"
      :style="{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth,
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1rem',
        border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
        padding: '32px',
        textAlign: align,
      }"
    >
      <button
        v-if="closable"
        type="button"
        aria-label="关闭"
        style="position: absolute; right: 16px; top: 16px; border-radius: 999px; border: none; background: transparent; padding: 6px; color: var(--color-bone-dim); cursor: pointer"
        @click="emit('close')"
      >
        <X :size="16" :stroke-width="1.75" />
      </button>
      <h2
        v-if="title"
        style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; color: var(--color-bone)"
      >{{ title }}</h2>
      <p
        v-if="subtitle"
        style="margin: 8px 0 0; font-size: 13px; line-height: 1.625; color: var(--color-bone-dim)"
      >{{ subtitle }}</p>
      <div
        :style="
          scrollBody
            ? { flex: '1 1 auto', overflowY: 'auto', margin: '0 -8px', padding: '0 8px' }
            : { flex: '1 1 auto' }
        "
      >
        <slot />
      </div>
      <div
        v-if="$slots.footer"
        style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 10px; flex: none"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
