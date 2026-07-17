<script setup lang="ts">
import { watch } from 'vue'
import { X } from 'lucide-vue-next'
import { Motion, AnimatePresence } from '../lib/motion'
import { useContactDialog } from '../composables/useContactDialog'

const { isOpen, close } = useContactDialog()
const baseUrl = import.meta.env.BASE_URL

// Lock body scroll while the dialog is open and allow Esc to close.
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="isOpen"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.25 }"
      class="fixed inset-0 z-[100] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
      tabindex="-1"
      @keydown="onKeydown"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" @click="close" />

      <!-- Panel -->
      <Motion
        :initial="{ opacity: 0, scale: 0.95, y: 16 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.95, y: 16 }"
        :transition="{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }"
        class="glass relative z-10 w-full max-w-sm rounded-2xl border border-bone/10 p-8 text-center"
      >
        <button
          type="button"
          class="absolute right-4 top-4 rounded-full p-1.5 text-bone-dim transition-colors hover:bg-bone/[0.06] hover:text-bone"
          aria-label="关闭"
          @click="close"
        >
          <X class="size-4" />
        </button>

        <h2 id="contact-dialog-title" class="text-xl font-semibold tracking-tight text-bone">
          联系我们
        </h2>
        <p class="mt-2 text-[13px] leading-relaxed text-bone-dim">
          扫描下方二维码，添加微信预约产品演示
        </p>

        <div class="mt-6 flex justify-center">
          <!-- Stays white in both themes so the QR code keeps scan contrast -->
          <div class="rounded-xl bg-white p-3">
            <img
              :src="`${baseUrl}wechat-qr.png`"
              alt="知序 FabricMind 微信二维码"
              class="size-44 rounded-lg object-cover"
            />
          </div>
        </div>

        <p class="mt-5 text-[12px] tracking-wide text-mist">微信扫一扫，立即联系</p>
      </Motion>
    </Motion>
  </AnimatePresence>
</template>
