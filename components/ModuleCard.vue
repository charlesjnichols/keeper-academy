<template>
  <div 
    class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col h-full"
    @click="$slidev.nav.go(target)"
  >
    <div class="text-4xl mb-3">{{ icon }}</div>
    <h3 class="text-xl font-extrabold text-blue-900 m-0">{{ title }}</h3>
    <p class="text-sm text-gray-600 mt-2 leading-relaxed flex-grow">
      <slot />
    </p>
    <div class="text-blue-600 text-sm font-bold mt-4 flex items-center">
      Start Module <carbon-arrow-right class="ml-1" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  target: { type: [Number, String], required: true }
})
</script>