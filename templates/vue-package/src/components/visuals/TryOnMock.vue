<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
</script>

<template>
  <div class="relative flex h-full min-h-52 w-full items-center justify-center overflow-hidden rounded-xl">
    <!-- spotlight -->
    <div
      class="absolute left-1/2 top-0 size-56 -translate-x-1/2 -translate-y-1/4 rounded-full opacity-70 blur-2xl"
      style="background: radial-gradient(circle, rgba(201,173,124,0.18), transparent 65%)"
    />

    <!-- left → right single-to-onbody gradient hint -->
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-transparent to-azure/[0.04]" />

    <!-- garment card · top -->
    <div class="absolute left-3 top-6 w-16 rounded-lg border border-dashed border-champagne/30 bg-ink-850/70 p-1.5">
      <div class="aspect-square rounded bg-gradient-to-br from-bone/[0.10] to-bone/[0.02]" />
      <p class="mt-1 text-center text-[8px] tracking-wide text-bone-dim">上装</p>
    </div>
    <!-- garment card · bottom -->
    <div class="absolute left-3 bottom-6 w-16 rounded-lg border border-dashed border-champagne/30 bg-ink-850/70 p-1.5">
      <div class="aspect-square rounded bg-gradient-to-br from-azure/[0.12] to-bone/[0.02]" />
      <p class="mt-1 text-center text-[8px] tracking-wide text-bone-dim">下装</p>
    </div>

    <!-- model silhouette with generated outfit -->
    <svg viewBox="0 0 120 200" class="relative h-44 w-auto">
      <defs>
        <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
          <stop class="tryon-fig-0" offset="0" />
          <stop class="tryon-fig-1" offset="1" />
        </linearGradient>
        <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
          <stop class="tryon-top-0" offset="0" />
          <stop class="tryon-top-1" offset="1" />
        </linearGradient>
      </defs>
      <!-- head -->
      <circle cx="60" cy="26" r="14" fill="url(#figGrad)" />
      <!-- body silhouette -->
      <path d="M44 44 C 52 38, 68 38, 76 44 L 82 120 C 78 150, 74 178, 70 196 L 50 196 C 46 178, 42 150, 38 120 Z" fill="url(#figGrad)" />
      <!-- generated top -->
      <path d="M45 46 C 52 41, 68 41, 75 46 L 80 96 L 40 96 Z" fill="url(#topGrad)" />
      <!-- generated bottom -->
      <path d="M41 100 L 79 100 L 73 178 L 66 178 L 60 120 L 54 178 L 47 178 Z" class="fill-azure stroke-azure" fill-opacity="0.28" stroke-opacity="0.4" stroke-width="0.8" />
    </svg>

    <!-- generate button -->
    <button
      class="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-azure/40 bg-azure/15 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-azure-bright shadow-[0_0_24px_-6px_var(--azure-glow)]"
      type="button"
    >
      <Sparkles class="size-3" />
      生成上身效果
    </button>
  </div>
</template>

<style>
/* Model silhouette + generated-top gradients, themed via stop-color */
.tryon-fig-0 {
  stop-color: #2c313b;
}
.tryon-fig-1 {
  stop-color: #0e1117;
}
.tryon-top-0 {
  stop-color: #eceae1;
  stop-opacity: 0.85;
}
.tryon-top-1 {
  stop-color: #c8c7c0;
  stop-opacity: 0.5;
}

html.light .tryon-fig-0 {
  stop-color: #a2aab6;
}
html.light .tryon-fig-1 {
  stop-color: #6d7684;
}
html.light .tryon-top-0 {
  stop-color: #ffffff;
  stop-opacity: 0.95;
}
html.light .tryon-top-1 {
  stop-color: #e2ded2;
  stop-opacity: 0.85;
}
</style>
