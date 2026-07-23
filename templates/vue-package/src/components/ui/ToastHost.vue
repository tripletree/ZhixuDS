<script setup lang="ts">
/** Fixed-position stack rendering the useToast() queue — newest at the bottom, 10px gap. */
import { computed } from 'vue'
import Toast from './Toast.vue'
import { useToast } from '../../composables/useToast'

const props = withDefaults(
  defineProps<{
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
    /** Distance from the viewport corner */
    offset?: number
  }>(),
  { position: 'bottom-right', offset: 24 },
)

const { toasts, dismiss } = useToast()

const CORNERS = {
  'bottom-right': { right: 0, bottom: 0, alignItems: 'flex-end' },
  'bottom-left': { left: 0, bottom: 0, alignItems: 'flex-start' },
  'top-right': { right: 0, top: 0, alignItems: 'flex-end' },
  'top-left': { left: 0, top: 0, alignItems: 'flex-start' },
} as const

const stackStyle = computed(() => ({
  position: 'fixed' as const,
  zIndex: 110,
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px',
  padding: `${props.offset}px`,
  pointerEvents: 'none' as const,
  ...(CORNERS[props.position] ?? CORNERS['bottom-right']),
}))
</script>

<template>
  <div :style="stackStyle">
    <div v-for="t in toasts" :key="t.id" style="pointer-events: auto">
      <Toast
        :tone="t.tone"
        :title="t.title"
        :description="t.description"
        :icon="t.icon"
        closable
        @close="dismiss(t.id)"
      />
    </div>
  </div>
</template>
