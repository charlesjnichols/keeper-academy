<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="slidev-layout section-layout w-full h-full flex flex-col justify-between p-0 m-0">
    
    <!-- Top Header -->
    <header class="flex justify-between items-center px-8 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0">
      <div class="text-lg font-extrabold text-blue-900">Keeper Academy</div>
      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Module Progress: {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </div>
    </header>

    <!-- Main Content Area: Centered vertically and horizontally -->
    <main class="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto p-8">
      
      <!-- 1 COLUMN: Rendered if NO named slots are present -->
      <template v-if="!slots.left && !slots.right && !slots.center">
        <div class="text-center w-full">
          <slot />
        </div>
      </template>

      <!-- MULTI-COLUMN: Rendered if ANY named slots are used -->
      <template v-else>
        <!-- Optional Top Header Slot (Content before columns) -->
        <div v-if="slots.default" class="mb-10 text-center w-full">
          <slot />
        </div>

        <!-- 3 COLUMNS: Triggered if left, center, AND right are all used -->
        <div v-if="slots.left && slots.center && slots.right" class="grid grid-cols-3 gap-8 items-center">
          <div><slot name="left" /></div>
          <div><slot name="center" /></div>
          <div align="center"><slot name="right" /></div>
        </div>

        <!-- 2 COLUMNS: Fallback if only left/right are used -->
        <div v-else class="grid grid-cols-2 gap-8 items-center">
          <div><slot name="left" /></div>
          <div align="center"><slot name="right" /></div>
        </div>
      </template>

    </main>

    <!-- Bottom Footer Navigation -->
    <footer class="flex justify-between items-center px-8 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
      <button @click="$slidev.nav.prev" class="px-4 py-1.5 text-xs font-bold bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">&larr; Previous</button>
      <button @click="$slidev.nav.go(1)" class="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Return to Home Menu</button>
      <button v-if="$slidev.nav.currentPage != $slidev.nav.total" @click="$slidev.nav.next" class="px-4 py-1.5 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">Next &rarr;</button>
    </footer>

  </div>
</template>

<style scoped>
.slidev-layout.section-layout {
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

/* Make section headers significantly larger by default */
.slidev-layout.section-layout :deep(h1) {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.slidev-layout.section-layout :deep(h2) {
  font-size: 2rem;
  font-weight: 400;
  opacity: 0.9;
}
</style>