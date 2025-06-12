<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showBackToTop = ref(false)
const scrollProgress = ref(0)

const updateProgressBar = () => {
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  scrollProgress.value = (scrollTop / (scrollHeight - clientHeight)) * 100
}

const toggleBackToTop = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    updateProgressBar()
    toggleBackToTop()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgressBar)
  window.removeEventListener('scroll', toggleBackToTop)
})
</script>

<template>
  <div>
    <div
      class="fixed top-0 left-0 z-50 h-1 w-full bg-gradient-to-r from-primary to-secondary"
      :style="{ width: scrollProgress + '%' }"
    />
    <a
      class="sr-only rounded-2xl outline-offset-2 outline-primary focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-foreground/70 focus:px-4 focus:py-2 focus:text-background focus:shadow-xl focus:outline-2"
      href="#home"
      >Skip to content</a
    >
    <button
      id="backToTop"
      class="fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-full bg-indigo-600 text-gray-100 shadow-lg ta-300 dark:bg-purple-600"
      :class="{
        'translate-y-0 opacity-100': showBackToTop,
        'translate-y-10 opacity-0': !showBackToTop,
      }"
      aria-label="Back To Top"
      @click="scrollToTop"
    >
      <Icon name="mdi:arrow-up" class="text-xl" />
    </button>

    <div class="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
      <NavBar />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>
