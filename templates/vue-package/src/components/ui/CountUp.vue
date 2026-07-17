<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<{ to: number; duration?: number }>(), { duration: 1.6 })

const el = ref<HTMLElement | null>(null)
const val = ref(0)
let started = false
let observer: IntersectionObserver | null = null

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function run() {
  if (reduced) {
    val.value = props.to
    return
  }
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / (props.duration * 1000))
    const eased = 1 - Math.pow(1 - t, 3)
    val.value = Math.round(eased * props.to)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true
        run()
      }
    },
    { threshold: 0.6 },
  )
  if (el.value) observer.observe(el.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <span ref="el">{{ val }}</span>
</template>
