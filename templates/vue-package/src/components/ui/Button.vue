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
  const base = `group inline-flex items-center whitespace-nowrap rounded-full font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-azure/12 ${pad}`
  // Shared hairline (outline) interaction. Rest state is always fully
  // transparent — never a grey wash — so the button reads as pure outline on
  // both the dark and the light surface. On hover/focus the border, fill,
  // text and icon all shift to azure together, in both themes.
  const hairline =
    'border border-bone/15 bg-transparent text-bone hover:border-azure/40 hover:bg-azure/10 hover:text-azure-bright focus-visible:border-azure/40 focus-visible:bg-azure/10 focus-visible:text-azure-bright'
  // ghost and nav differ only in padding scale.
  if (props.variant === 'ghost' || props.variant === 'nav') return `${base} ${hairline}`
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
