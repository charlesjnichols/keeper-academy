<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="slidev-layout course-page-layout w-full h-full flex flex-col justify-between bg-white text-gray-800 p-0 m-0">
    
    <!-- Top Header -->
    <header class="flex justify-between items-center px-8 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0">
      <div class="text-lg font-extrabold text-blue-900">Keeper Academy</div>
      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Module Progress: {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 p-8 overflow-y-auto">
      
      <!-- 1 COLUMN: Rendered if NO named slots are present -->
      <template v-if="!slots.left && !slots.right && !slots.center">
        <slot />
      </template>

      <!-- MULTI-COLUMN: Rendered if ANY named slots are used -->
      <template v-else>
        <!-- Optional Top Header Slot (Content before columns) -->
        <div v-if="slots.default" class="mb-6">
          <slot />
        </div>

        <!-- 3 COLUMNS: Triggered if left, center, AND right are all used -->
        <div v-if="slots.left && slots.center && slots.right" class="grid grid-cols-3 gap-6">
          <div><slot name="left" /></div>
          <div><slot name="center" /></div>
          <div align="center"><slot name="right" /></div>
        </div>

        <!-- 2 COLUMNS: Fallback if only left/right are used -->
        <div v-else class="grid grid-cols-2 gap-6">
          <div><slot name="left" /></div>
          <div align="center"><slot name="right" /></div>
        </div>
      </template>

    </main>

    <!-- Bottom Footer -->
    <footer class="flex justify-between items-center px-8 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
      <button @click="$slidev.nav.prev" class="px-4 py-1.5 text-xs font-bold bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">&larr; Previous</button>
      <button @click="$slidev.nav.go(1)" class="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Return to Home Menu</button>
      <button v-if="$slidev.nav.currentPage != $slidev.nav.total" @click="$slidev.nav.next" class="px-4 py-1.5 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">Next Module &rarr;</button>
    </footer>

  </div>
</template>

<style scoped>
.slidev-layout.course-page-layout {
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
.slidev-layout.two-columns {
  grid-template-columns: 65% 35%;
}
.slidev-layout.two-cols-header {
  column-gap: 20px; /* Adjust the gap size as needed */
}
</style>

