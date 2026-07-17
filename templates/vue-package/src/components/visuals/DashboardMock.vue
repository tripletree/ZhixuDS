<script setup lang="ts">
import CountUp from '../ui/CountUp.vue'

// 「材料机会 TOP 5」
const materials = [
  { name: 'Lyocell', score: 86 },
  { name: 'Recycled Nylon', score: 82 },
  { name: 'Linen Blend', score: 78 },
  { name: 'Merino Wool', score: 71 },
  { name: 'Tencel Modal', score: 66 },
]

// 五维雷达（市场潜力 / 增长潜力 / 竞争格局 / 可行性 / 趋势热度）
const radarAxes = ['市场潜力', '增长潜力', '竞争格局', '可行性', '趋势热度']
const radarValues = [0.82, 0.74, 0.58, 0.7, 0.9]

function radarPoint(i: number, r: number) {
  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
  const cx = 50,
    cy = 50,
    radius = 38 * r
  return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
}
const radarPolygon = radarValues.map((v, i) => radarPoint(i, v)).join(' ')
const radarGrid = [1, 0.66, 0.33].map((ring) =>
  radarValues.map((_, i) => radarPoint(i, ring)).join(' '),
)

// 趋势热度走势（4 条去饱和曲线）— stroke via token classes so they follow the theme
const trendLines = [
  { cls: 'stroke-azure', d: 'M4 78 C 40 70, 70 52, 110 48 C 150 44, 190 30, 236 18' },
  { cls: 'stroke-champagne', d: 'M4 84 C 50 80, 80 70, 120 66 C 160 62, 200 56, 236 44' },
  { cls: 'stroke-mist', d: 'M4 70 C 40 72, 80 66, 120 70 C 160 74, 200 60, 236 58' },
  { cls: 'stroke-rouge', d: 'M4 90 C 50 88, 90 86, 130 80 C 170 74, 205 78, 236 70' },
]

// 「品类机会分布」气泡散点
const bubbles = [
  { x: 28, y: 64, r: 7, hot: false },
  { x: 52, y: 40, r: 11, hot: true },
  { x: 74, y: 30, r: 8, hot: true },
  { x: 40, y: 78, r: 5, hot: false },
  { x: 86, y: 56, r: 6, hot: false },
  { x: 64, y: 70, r: 9, hot: false },
]
</script>

<template>
  <div class="relative h-full w-full">
    <!-- Layered ghost cards behind: brand grid + runway looks -->
    <div
      class="absolute -left-4 top-6 hidden h-44 w-40 rotate-[-6deg] rounded-xl border border-bone/[0.06] bg-ink-800/60 p-2 blur-[1.5px] sm:block"
    >
      <div class="grid grid-cols-2 gap-1.5">
        <div v-for="n in 6" :key="n" class="aspect-[3/4] rounded bg-bone/[0.04]" />
      </div>
    </div>
    <div
      class="absolute -left-2 top-28 hidden h-40 w-24 rotate-[5deg] rounded-xl border border-bone/[0.06] bg-gradient-to-b from-champagne/10 to-ink-850 blur-[1px] sm:block"
    />

    <!-- Foreground dashboard grid (right side brighter) -->
    <div class="relative grid grid-cols-1 gap-3 sm:grid-cols-12">
      <!-- Trend lines -->
      <div class="glass rounded-xl p-4 sm:col-span-7">
        <div class="mb-2 flex items-center justify-between">
          <span class="eyebrow text-[10px] text-bone-dim">趋势热度走势</span>
          <span class="text-[10px] tracking-wide text-mist">2023 Q1 → 2025 Q1</span>
        </div>
        <svg viewBox="0 0 240 100" class="h-20 w-full" preserveAspectRatio="none">
          <line v-for="y in [22, 48, 74]" :key="y" x1="0" :y1="y" x2="240" :y2="y" class="stroke-mist" stroke-opacity="0.1" />
          <path
            v-for="(l, i) in trendLines"
            :key="i"
            :d="l.d"
            fill="none"
            :class="l.cls"
            stroke-width="1.6"
            stroke-linecap="round"
            :opacity="i === 0 ? 0.95 : 0.6"
          />
        </svg>
      </div>

      <!-- Opportunity index + radar -->
      <div class="glass rounded-xl p-4 sm:col-span-5">
        <span class="eyebrow text-[10px] text-bone-dim">机会指数 · 综合</span>
        <div class="mt-1 flex items-center gap-3">
          <div class="flex items-baseline">
            <span class="text-4xl font-semibold tracking-tight text-bone"><CountUp :to="78" /></span>
            <span class="ml-1 text-sm text-bone-dim">/100</span>
          </div>
          <svg viewBox="0 0 100 100" class="size-16">
            <polygon
              v-for="(g, i) in radarGrid"
              :key="i"
              :points="g"
              fill="none"
              class="stroke-mist"
              stroke-opacity="0.16"
            />
            <polygon :points="radarPolygon" class="fill-azure stroke-azure" fill-opacity="0.18" stroke-width="1.4" />
            <circle
              v-for="(v, i) in radarValues"
              :key="i"
              :cx="radarPoint(i, v).split(',')[0]"
              :cy="radarPoint(i, v).split(',')[1]"
              r="1.6"
              class="fill-azure-bright"
            />
          </svg>
        </div>
        <div class="mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
          <span v-for="a in radarAxes" :key="a" class="text-[9px] tracking-wide text-mist">{{ a }}</span>
        </div>
      </div>

      <!-- Category bubble scatter -->
      <div class="glass rounded-xl p-4 sm:col-span-5">
        <div class="mb-1 flex items-center justify-between">
          <span class="eyebrow text-[10px] text-bone-dim">品类机会分布</span>
        </div>
        <svg viewBox="0 0 100 90" class="h-20 w-full">
          <line x1="8" y1="82" x2="98" y2="82" class="stroke-mist" stroke-opacity="0.18" />
          <line x1="8" y1="6" x2="8" y2="82" class="stroke-mist" stroke-opacity="0.18" />
          <circle
            v-for="(b, i) in bubbles"
            :key="i"
            :cx="b.x"
            :cy="b.y"
            :r="b.r"
            :class="b.hot ? 'fill-azure stroke-azure' : 'fill-bone-soft stroke-mist'"
            :fill-opacity="b.hot ? 0.32 : 0.14"
            stroke-opacity="0.5"
          />
        </svg>
        <div class="flex justify-between text-[9px] tracking-wide text-mist">
          <span>竞争强度 →</span>
          <span>↑ 市场潜力</span>
        </div>
      </div>

      <!-- Material TOP 5 -->
      <div class="glass rounded-xl p-4 sm:col-span-7">
        <span class="eyebrow text-[10px] text-bone-dim">材料机会 TOP 5</span>
        <div class="mt-2.5 space-y-1.5">
          <div v-for="m in materials" :key="m.name" class="flex items-center gap-2.5">
            <span class="w-24 shrink-0 text-[11px] text-bone-soft">{{ m.name }}</span>
            <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-bone/[0.06]">
              <div
                class="h-full rounded-full bg-gradient-to-r from-azure-deep to-azure"
                :style="{ width: m.score + '%' }"
              />
            </div>
            <span class="w-6 text-right text-[11px] font-medium text-bone">{{ m.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
