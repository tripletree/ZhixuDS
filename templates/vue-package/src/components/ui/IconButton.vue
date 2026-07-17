<script setup lang="ts">
/** 36px circular icon button (theme toggle in SiteNav). Put a lucide icon in the default slot. */
defineProps<{ label?: string }>()
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    class="inline-flex size-9 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.03] text-bone-soft transition-all hover:border-azure/40 hover:bg-azure/10 hover:text-bone"
  >
    <slot />
  </button>
</template>
