<script setup lang="ts">
import { computed } from 'vue'
import { isDarkMode, mobileMenuOpen, scrollToSection, useTheme } from '@/utils'

const navigation = [
  { id: 1, text: 'Home', href: '#home' },
  { id: 2, text: 'Skills', href: '#skills' },
  { id: 3, text: 'Projects', href: '#projects' },
  { id: 4, text: 'Socials', href: '#socials' },
]
const themeIcon = computed(() => (isDarkMode.value ? 'mdi:weather-sunny' : 'mdi:weather-night'))
const toggleTheme = () => {
  useTheme(true)
}
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <div class="flex items-center">
        <a href="/"
          ><span
            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold tracking-tight text-transparent"
          >
            art70x
          </span></a
        >
      </div>
      <nav class="hidden space-x-6 md:flex">
        <a
          v-for="nav in navigation"
          :key="nav.id"
          class="font-medium text-foreground ta-120 hover:font-semibold hover:text-primary"
          :href="nav.href"
          @click.prevent="scrollToSection(nav.href)"
        >
          {{ nav.text }}
        </a>
      </nav>
      <div class="flex items-center gap-4">
        <button aria-label="Toggle Theme" class="group ic hover:rotate-24" @click="toggleTheme">
          <Icon class="text-xl ta-200 group-hover:text-2xl" :name="themeIcon" />
        </button>
        <button aria-label="Menu button" class="ic md:!hidden" @click="toggleMobileMenu">
          <Icon name="mdi:menu" class="text-xl ta-200" />
        </button>
      </div>
    </div>
    <div
      id="mobileMenu"
      class="absolute top-full right-0 left-0 bg-zinc-300 py-4 shadow-lg ta-300 md:hidden dark:bg-zinc-700"
      :class="{ hidden: !mobileMenuOpen }"
    >
      <div class="flex flex-col items-center space-y-2">
        <a
          v-for="nav in navigation"
          :key="'mobile-' + nav.id"
          class="nav-item w-full py-1 text-center font-medium text-foreground"
          :href="nav.href"
          @click.prevent="scrollToSection(nav.href)"
        >
          {{ nav.text }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference '@/main.css';

.ic {
  @apply grid size-9 place-items-center rounded-full bg-zinc-200 text-gray-700 ta-180 dark:bg-zinc-800 dark:text-gray-300;
}
</style>
