<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/utils'

onMounted(() => {
  useTheme()
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  author: 'art70x',
  ogType: 'website',
  ogUrl: 'https://art70x.vercel.app/',
  twitterCard: 'summary',
  themeColor: '#615fff',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: null,
})
</script>

<template>
  <NuxtRouteAnnouncer atomic politeness="assertive" />
  <NuxtLoadingIndicator color="#615fff" :height="5" :duration="3000" :throttle="300" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
