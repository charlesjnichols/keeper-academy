<template>
  <div :class="['p-4 rounded-lg border-l-4 my-4 shadow-sm', typeClasses]">
    <div class="flex items-center font-bold mb-2 text-lg">
      <span class="mr-2">{{ icon }}</span>
      {{ title }}
    </div>
    <div class="text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'info' },
  title: { type: String, required: true }
})

const typeMap = {
  info: { classes: 'bg-blue-50 border-blue-500 text-blue-900', icon: '💡' },
  warning: { classes: 'bg-yellow-50 border-yellow-500 text-yellow-900', icon: '⚠️' },
  success: { classes: 'bg-green-50 border-green-500 text-green-900', icon: '🎯' },
  important: { classes: 'bg-red-50 border-red-500 text-red-900', icon: '📌' }
}

const typeClasses = computed(() => typeMap[props.type].classes)
const icon = computed(() => typeMap[props.type].icon)
</script>