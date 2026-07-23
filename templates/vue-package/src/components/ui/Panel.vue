<script setup lang="ts">
/**
 * Surface card — `.panel` diagonal-sheen content card, `.glass` frosted tile,
 * or `feature` (panel surface at the larger 1.5rem radius).
 * Vue port of the React mirror's Panel (components/ui/Panel.jsx).
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** panel = content card, glass = frosted floating tile, feature = panel at 1.5rem radius */
    variant?: 'panel' | 'glass' | 'feature'
    /** Corner azure glow: true = .glow-blue, 'sm' = .glow-blue-sm */
    glow?: boolean | 'sm'
    padding?: number | string
    /** Override border-radius (defaults to --radius-card / --radius-feature) */
    radius?: number | string
  }>(),
  { variant: 'panel', glow: false, padding: 24 },
)

const cls = computed(() => [
  props.variant === 'glass' ? 'glass' : 'panel',
  props.glow === 'sm' ? 'glow-blue glow-blue-sm' : props.glow ? 'glow-blue' : '',
])

const style = computed(() => ({
  borderRadius:
    props.radius ?? (props.variant === 'feature' ? 'var(--radius-feature)' : 'var(--radius-card)'),
  padding: typeof props.padding === 'number' ? `${props.padding}px` : props.padding,
}))
</script>

<template>
  <div :class="cls" :style="style">
    <slot />
  </div>
</template>
