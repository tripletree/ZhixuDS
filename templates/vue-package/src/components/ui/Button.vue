<script setup lang="ts">
/**
 * FabricMind pill button — extracted from the inline markup repeated in
 * HeroSection / SiteNav / CtaFooter. Always a pill, never a rectangle.
 * variant: primary (bone fill) | ghost (hairline) | nav (compact pill)
 * size:    sm (nav) | md (hero CTA) | lg (footer CTA)
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost' | 'nav'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { variant: 'primary', size: 'md' },
)

const cls = computed(() => {
  const pad =
    props.size === 'lg' ? 'gap-2.5 px-8 py-4 text-[15px]'
    : props.size === 'sm' ? 'gap-1.5 px-4 py-2 text-[13px]'
    : 'gap-2 px-6 py-3.5 text-[14px]'
  const base = `group inline-flex items-center whitespace-nowrap rounded-full font-medium tracking-wide transition-all ${pad}`
  if (props.variant === 'ghost')
    return `${base} border border-bone/15 text-bone hover:border-bone/35 hover:bg-bone/[0.04]`
  if (props.variant === 'nav')
    return `${base} border border-bone/15 bg-bone/[0.03] text-bone hover:border-azure/40 hover:bg-azure/10`
  return `${base} bg-bone text-ink-950 hover:bg-(--cta-hover) hover:shadow-[0_0_36px_-8px_var(--cta-glow)]`
})
</script>

<template>
  <button type="button" :class="cls">
    <slot />
    <!-- trailing icon, e.g. <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" /> -->
    <slot name="icon" />
  </button>
</template>
