<script setup lang="ts">
import { data } from '@/utils'
</script>

<template>
  <footer class="bg-background py-12 text-foreground/90">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div class="mb-4 md:mb-0">
          <h3 class="mb-2 text-2xl font-bold text-foreground">art70x</h3>
          <p class="max-w-xs">Creating digital experiences that matter</p>
        </div>
        <div class="flex flex-col items-center md:items-end">
          <div class="mb-4 flex space-x-4">
            <a
              v-for="social in data.socials"
              :key="social.id"
              class="grid h-10 w-10 place-items-center rounded-full bg-muted/90 text-foreground/80 ta-200 hover:bg-muted hover:text-foreground"
              :href="social.link"
              :aria-label="`${social.action} on ${social.name}`"
            >
              <Icon :name="social.icon" class="text-xl" />
            </a>
          </div>
          <p>
            &copy; <NuxtTime :datetime="Date.now()" year="numeric" /> art70x. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
