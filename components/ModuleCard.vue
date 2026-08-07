<template>
  <div 
    class="p-6 module-card border border-main rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all cursor-pointer flex flex-col h-full"
    @click="$slidev.nav.go(target)"
  >
    <div class="text-4xl mb-3">{{ icon }}</div>
    <h3 class="text-xl font-extrabold text-primary m-0">{{ title }}</h3>
    <p class="text-sm text-main opacity-80 mt-2 leading-relaxed flex-grow">
      <slot />
    </p>
    <div class="text-primary text-sm font-bold mt-4 flex items-center">
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

<style scoped>
.module-card {
  /* Uses theme background with a subtle surface contrast tint */
  background-color: var(--slidev-theme-accents-soft, rgba(125, 125, 125, 0.08));
}
</style>