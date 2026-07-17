<script setup lang="ts">
import { Download } from 'lucide-vue-next'

// fanned PPT slides: cover / data page / material board
const slides = [
  { rotate: -10, x: -42, y: 10, z: 1 },
  { rotate: -3, x: -14, y: 4, z: 2 },
  { rotate: 5, x: 16, y: 0, z: 3 },
]
</script>

<template>
  <div class="relative flex h-full min-h-52 w-full items-center justify-center overflow-hidden rounded-xl">
    <!-- auto-generation shimmer sweep -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="animate-shimmer absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-azure/[0.07] to-transparent"
      />
    </div>

    <!-- fanned slides -->
    <div class="relative h-40 w-48">
      <div
        v-for="(s, i) in slides"
        :key="i"
        class="absolute left-1/2 top-1/2 h-32 w-40 rounded-lg border border-bone/10 bg-ink-800/90 p-3 shadow-xl backdrop-blur light:border-bone/[0.08] light:bg-white light:shadow-[0_14px_30px_-14px_rgba(0,0,0,0.25)]"
        :style="{
          transform: `translate(-50%,-50%) translate(${s.x}px, ${s.y}px) rotate(${s.rotate}deg)`,
          zIndex: s.z,
        }"
      >
        <!-- cover -->
        <template v-if="i === 0">
          <div class="h-1.5 w-12 rounded bg-champagne/60" />
          <div class="mt-2 h-2 w-24 rounded bg-bone/30" />
          <div class="mt-1 h-2 w-16 rounded bg-bone/15" />
          <div class="mt-auto" />
          <div class="absolute bottom-3 left-3 font-display text-[10px] italic text-bone-dim">FabricMind Report</div>
        </template>
        <!-- data page -->
        <template v-else-if="i === 1">
          <div class="h-1.5 w-10 rounded bg-azure/60" />
          <svg viewBox="0 0 120 60" class="mt-2 h-12 w-full">
            <g v-for="(h, n) in [18, 26, 22, 34, 30]" :key="n">
              <rect :x="n * 22 + 4" :y="52 - h" width="9" :height="h" rx="1.5" class="fill-bone-soft" fill-opacity="0.16" />
            </g>
            <polyline points="8,30 30,22 52,26 74,12 96,16 113,6" fill="none" class="stroke-azure" stroke-width="1.6" />
          </svg>
        </template>
        <!-- material board -->
        <template v-else>
          <div class="h-1.5 w-10 rounded bg-rouge/60" />
          <div class="mt-2 grid grid-cols-3 gap-1.5">
            <div class="aspect-square rounded bg-gradient-to-br from-champagne/30 to-ink-700" />
            <div class="aspect-square rounded bg-gradient-to-br from-azure/25 to-ink-700" />
            <div class="aspect-square rounded bg-gradient-to-br from-bone/20 to-ink-700" />
            <div class="aspect-square rounded bg-gradient-to-br from-rouge/25 to-ink-700" />
            <div class="aspect-square rounded bg-gradient-to-br from-mist/25 to-ink-700" />
            <div class="aspect-square rounded bg-gradient-to-br from-champagne/20 to-ink-700" />
          </div>
        </template>
      </div>
    </div>

    <!-- export button -->
    <button
      class="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-bone/15 bg-bone/[0.05] px-3 py-1.5 text-[11px] font-medium tracking-wide text-bone backdrop-blur transition-colors hover:border-azure/40"
      type="button"
    >
      <Download class="size-3" />
      导出 PPT
    </button>
  </div>
</template>
