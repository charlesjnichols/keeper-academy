<!-- global-bottom.vue -->
<template>
  <footer class="fixed top-3 right-3 z-50 pointer-events-none select-none slide-bottom">
    <div
      class="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-md text-neutral-800 dark:text-neutral-100 font-mono text-base leading-none"
    >
      <div class="flex items-center gap-4">
        <button
          v-if="$slidev.nav.hasPrev"
          @click="$slidev.nav.prev"
          title="Previous Slide"
          class="hover:scale-110 opacity-75 hover:opacity-100 transition-all focus:outline-none"
        >
          ◀️
        </button>

        <button
          v-if="$slidev.nav.currentPage > 2"
          @click="$slidev.nav.go(2)"
          title="Home Menu"
          class="hover:scale-110 opacity-75 hover:opacity-100 transition-all focus:outline-none"
        >
          🏠
        </button>

        <button
          v-if="$slidev.nav.hasNext"
          @click="$slidev.nav.next"
          title="Next Slide"
          class="hover:scale-110 opacity-75 hover:opacity-100 transition-all focus:outline-none"
        >
          ▶️
        </button>
      </div>
    </div>
  </footer>
</template>
