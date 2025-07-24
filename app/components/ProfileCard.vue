<template>
  <div
    class="relative mx-auto w-full max-w-2xl rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg dark:border-[#1b2c68a0] dark:from-[#000000] dark:to-[#0a0d37]"
  >
    <!-- Top gradient line -->
    <div class="flex flex-row">
      <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
      <div class="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between bg-gray-200 px-4 py-4 lg:px-8 dark:bg-[#000000]">
      <div class="flex flex-row space-x-2">
        <div class="h-3 w-3 rounded-full bg-red-500" />
        <div class="h-3 w-3 rounded-full bg-orange-400" />
        <div class="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div class="font-mono text-sm text-gray-600 dark:text-gray-400">coder.js</div>
    </div>

    <!-- Code Area -->
    <div
      class="relative overflow-hidden border-t-[2px] border-gray-300 px-4 py-6 lg:px-8 dark:border-indigo-900"
    >
      <!-- Background blurs -->
      <div
        class="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-600 opacity-10 blur-3xl"
      />
      <div
        class="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-pink-600 opacity-10 blur-3xl"
      />

      <div class="relative flex font-mono text-xs leading-[1.75rem] md:text-sm lg:text-base">
        <!-- Line Numbers -->
        <div
          class="hidden flex-col items-end pr-4 text-gray-600 opacity-70 select-none md:flex dark:text-gray-500"
        >
          <div v-for="i in totalLines" :key="i" class="leading-[1.75rem]">{{ i }}</div>
        </div>

        <!-- Code Block -->
        <code class="w-full">
          <div>
            <span class="mr-2 text-pink-500 dark:text-pink-400">const</span>
            <span class="mr-2 text-violet-500 dark:text-violet-400">coder</span>
            <span class="mr-2 text-pink-500 dark:text-pink-400">=</span>
            <span class="text-gray-600 dark:text-gray-400">{</span>
          </div>

          <div class="pl-6">
            <span class="text-gray-800 dark:text-white">name:</span>
            <span class="text-gray-600 dark:text-gray-400">'</span>
            <span class="text-green-600 dark:text-green-400">{{ coder.name }}</span>
            <span class="text-gray-600 dark:text-gray-400">',</span>
          </div>

          <div class="pl-6">
            <span class="text-gray-800 dark:text-white">role:</span>
            <span class="text-gray-600 dark:text-gray-400">'</span>
            <span class="text-green-600 dark:text-green-400">{{ coder.role }}</span>
            <span class="text-gray-600 dark:text-gray-400">',</span>
          </div>

          <div class="pl-6">
            <span class="text-gray-800 dark:text-white">seniority:</span>
            <span class="text-gray-600 dark:text-gray-400">'</span>
            <span class="text-green-600 dark:text-green-400">{{ coder.seniority }}</span>
            <span class="text-gray-600 dark:text-gray-400">',</span>
          </div>

          <div class="pl-6">
            <span class="text-gray-800 dark:text-white">location:</span>
            <span class="text-gray-600 dark:text-gray-400">'</span>
            <span class="text-green-600 dark:text-green-400">{{ coder.location }}</span>
            <span class="text-gray-600 dark:text-gray-400">',</span>
          </div>

          <div class="pl-6">
            <span class="text-gray-800 dark:text-white">skills:</span>
            <span class="text-gray-600 dark:text-gray-400">[</span>
            <div class="flex flex-wrap pl-6">
              <span v-for="(skill, index) in coder.skills" :key="skill" class="mr-1">
                <span class="text-gray-600 dark:text-gray-400">'</span>
                <span class="text-cyan-600 dark:text-cyan-400">{{ skill }}</span>
                <span class="text-gray-600 dark:text-gray-400">'</span>
                <span
                  v-if="index < coder.skills.length - 1"
                  class="text-gray-600 dark:text-gray-400"
                  >,
                </span>
              </span>
            </div>
            <span class="text-gray-600 dark:text-gray-400">],</span>
          </div>

          <div>
            <span class="text-gray-600 dark:text-gray-400">};</span>
          </div>
        </code>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="mt-4 flex items-center justify-between border-t border-gray-300 px-4 pt-3 pb-4 text-sm text-gray-600 lg:px-8 dark:border-gray-800 dark:text-gray-500"
    >
      <span>UTF-8</span>
      <span>JavaScript</span>
      <span>Ln {{ totalLines }}, Col 2</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const coder = {
  name: 'Art 70x',
  role: 'Frontend Developer',
  seniority: 'Mid-Level',
  location: 'Pakistan',
  skills: [
    'Vuejs',
    'Nuxtjs',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'CSS',
    'Vitejs',
    'GitHub',
    'HTML',
    'Prettier',
  ],
}

// 7 base lines + coder.skills.length formatted over 2 lines
const totalLines = 8 + Math.ceil(coder.skills.length / 4)
</script>
