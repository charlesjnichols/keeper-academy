<template>
  <div :class="['p-4 rounded-lg border-l-4 my-4 shadow-sm backdrop-blur-sm', typeClasses]">
    <div class="flex items-center font-bold mb-2 text-lg">
      <span class="mr-2">{{ icon }}</span>
      {{ title }}
    </div>
    <div class="text-sm leading-relaxed opacity-90">
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
  info: { 
    classes: 'bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-300', 
    icon: '💡' 
  },
  warning: { 
    classes: 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-300', 
    icon: '⚠️' 
  },
  success: { 
    classes: 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300', 
    icon: '🎯' 
  },
  important: { 
    classes: 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300', 
    icon: '📌' 
  }
}

const currentType = computed(() => typeMap[props.type] || typeMap.info)
const typeClasses = computed(() => currentType.value.classes)
const icon = computed(() => currentType.value.icon)
</script>