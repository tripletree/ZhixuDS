<script setup lang="ts">
/**
 * On/off toggle — pill track, azure when on (the knob turns ink-950 so it inverts with the theme
 * exactly like the Checkbox tick). Native checkbox underneath for keyboard + form semantics;
 * exposed as role="switch". Label in the default slot, optional description via `description`.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md'
    disabled?: boolean
    /** Secondary line under the label, mist */
    description?: string
    /** Put the control after the label (right-aligned rows in settings lists) */
    labelFirst?: boolean
  }>(),
  { size: 'md', disabled: false, labelFirst: false },
)

const model = defineModel<boolean>({ default: false })
const focus = ref(false)

const DIM = {
  sm: { w: 28, h: 16, knob: 12 },
  md: { w: 36, h: 20, knob: 16 },
} as const

const d = computed(() => DIM[props.size])

const trackStyle = computed(() => ({
  position: 'relative' as const,
  display: 'inline-flex',
  alignItems: 'center',
  flex: 'none',
  width: `${d.value.w}px`,
  height: `${d.value.h}px`,
  padding: '1px',
  boxSizing: 'border-box' as const,
  borderRadius: 'var(--radius-pill)',
  border: `1px solid ${model.value ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 20%, transparent)'}`,
  background: model.value ? 'var(--color-azure)' : 'var(--surface-control)',
  boxShadow: focus.value ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
  transition: 'all 0.2s var(--ease-calm)',
}))

const knobStyle = computed(() => ({
  width: `${d.value.knob}px`,
  height: `${d.value.knob}px`,
  borderRadius: '50%',
  background: model.value ? 'var(--color-ink-950)' : 'var(--color-mist)',
  transform: model.value ? `translateX(${d.value.w - d.value.knob - 4}px)` : 'translateX(0)',
  transition: 'transform 0.2s var(--ease-calm), background 0.2s var(--ease-calm)',
}))
</script>

<template>
  <label
    :style="{
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      flexDirection: labelFirst ? 'row-reverse' : 'row',
      justifyContent: labelFirst ? 'space-between' : 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
    }"
  >
    <input
      v-model="model"
      type="checkbox"
      role="switch"
      :aria-checked="model"
      :disabled="disabled"
      style="position: absolute; width: 1px; height: 1px; opacity: 0; margin: 0; pointer-events: none"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span aria-hidden="true" :style="{ ...trackStyle, marginTop: description ? '2px' : 0 }">
      <span :style="knobStyle"></span>
    </span>
    <span v-if="$slots.default || description" style="display: flex; flex-direction: column; gap: 2px; min-width: 0">
      <span v-if="$slots.default" style="font-size: 13px; line-height: 1.5; color: var(--color-bone-soft)">
        <slot />
      </span>
      <span v-if="description" style="font-size: 12px; line-height: 1.5; color: var(--color-mist)">
        {{ description }}
      </span>
    </span>
  </label>
</template>
