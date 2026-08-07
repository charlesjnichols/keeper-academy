<!-- global-bottom.vue -->
<template>
  <footer class="fixed bottom-3 right-3 z-50 pointer-events-none select-none">
    <div
      class="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-md border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-100 backdrop-blur-md font-mono text-xs"
    >
      <span class="font-semibold opacity-90">
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </span>

      <span class="opacity-30">|</span>

      <div class="flex items-center gap-1.5">
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
