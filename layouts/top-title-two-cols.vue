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
  <div
    class="slidev-layout top-title-two-cols w-full h-full flex flex-col p-0 overflow-hidden"
  >
    <!-- Custom Title Area (Non-scrolling, fixed height based on content) -->
    <div
      class="w-full h-fit min-h-13 pt-2 pb-2 slidecolor flex-shrink-0"
      :class="colorscheme"
    >
      <div
        class="slidev-layout toptitle title p-0 ml-6 mr-6 mt-auto mb-auto"
        :class="alignment.t"
      >
        <slot name="title" />
      </div>
    </div>

    <!-- Two Columns Content Area (Takes up remaining height & enables scrollbars) -->
    <div class="grid grid-cols-2 gap-8 flex-1 min-h-0 p-8">
      <!-- Left Column with Scroll Bar -->
      <div class="overflow-y-auto pr-4 h-full">
        <div class="my-auto mx-auto flex flex-col items-center">
          <slot name="left" />
        </div>
      </div>

      <!-- Right Column with Scroll Bar -->
      <div class="overflow-y-auto pr-4 h-full">
        <div class="my-auto mx-auto flex flex-col items-center">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.top-title-two-cols {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
