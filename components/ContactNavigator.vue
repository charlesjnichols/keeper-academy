<template>
  <div class="flex flex-col items-center gap-8">
    <div
      class="flex items-start gap-4 p-6 w-full max-w-xl rounded-xl border border-primary/30 bg-white/80 dark:bg-neutral-900/80 shadow-sm"
    >
      <div class="text-5xl">👋</div>
      <div class="flex flex-col gap-1">
        <p class="text-sm text-main opacity-70 uppercase tracking-wide font-bold m-0">Questions or Feedback</p>
        <h3 class="text-2xl font-extrabold text-primary m-0">CJ Nichols</h3>
        <p class="text-main text-base m-0 leading-relaxed">
          Reach out with any questions about the drills, session plans, or how to adapt them to your squad.
        </p>
        <p class="text-main text-base font-semibold m-0">
          📧 <a :href="mailto" class="text-primary underline decoration-primary/40 hover:decoration-primary">{{ email }}</a>
        </p>
      </div>
    </div>

    <div v-if="showNav" class="flex flex-wrap items-center justify-center gap-4">
      <button
        @click="$slidev.nav.next()"
        class="px-6 py-3 rounded-lg bg-primary text-white font-bold shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
      >
        Continue to Next Module ↗
      </button>
      <button
        @click="$slidev.nav.go(libraryTarget)"
        class="px-6 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
      >
        Skip to Reference Library ↘
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showNav: { type: Boolean, default: true },
  libraryTarget: { type: Number, default: 34 }
})

const email = 'charlesjnichols@gmail.com'
const mailto = `mailto:${email}`
</script>