<script setup lang="ts">
/** 36px circular icon button (theme toggle in SiteNav). Put a lucide icon in the default slot. */
defineProps<{ label?: string }>()
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    class="inline-flex size-9 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.03] text-bone-soft transition-all hover:border-azure/40 hover:bg-azure/10 hover:text-azure-bright focus-visible:border-azure/40 focus-visible:bg-azure/10 focus-visible:text-azure-bright focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-azure/12"
  >
    <slot />
  </button>
</template>
