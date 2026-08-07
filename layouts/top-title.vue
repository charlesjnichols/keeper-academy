<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'light',
  },
  align: {
    default: 'l',
  },
  margin: {
    default: 'normal',
  },
})

// Local helpers so you don't hit import path issues from node_modules
const alignment = computed(() => {
  const a = props.align
  if (a === 'c' || a === 'center') return 'text-center'
  if (a === 'r' || a === 'right') return 'text-right'
  if (a === 'l' || a === 'left') return 'text-left'
  return 'text-left'
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})

const marginClass = computed(() => {
  if (props.margin === 'compact') return 'p-2'
  if (props.margin === 'none') return 'p-0'
  return ''
})
</script>

<template>
  <div v-if="alignment == 'error'" class="slidev-layout default error">
    <span class="ns-c-warning"><b>Error</b>: invalid layout params.</span>
  </div>

  <!-- Outer container constrained to full slide height -->
  <div v-else class="flex flex-col h-full w-full max-h-full overflow-hidden">
    <!-- Fixed Header (flex-none prevents it from shrinking) -->
    <div
      class="w-full h-fit min-h-13 pt-2 pb-2 slidecolor flex-none"
      :class="colorscheme"
    >
      <div
        class="slidev-layout toptitle title p-0 pt-0 ml-6 mr-6 mt-auto mb-auto"
        :class="alignment"
      >
        <slot name="title" />
      </div>
    </div>

    <!-- Scrollable Body (flex-1 + min-h-0 allows overflow scrolling) -->
    <div class="flex-1 min-h-0 overflow-y-auto w-full p-6" :class="marginClass">
      <div v-if="$slots.content" class="slidev-layout toptitle content w-full mb-4">
        <slot name="content" />
      </div>

      <div v-if="$slots.default" class="slidev-layout default w-full">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>
