<script setup lang="ts">
import { scrollToSection, data } from '@/utils'
import { ref } from 'vue'

const home = ref<HTMLElement | null>(null)
const skillsRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const socialsRef = ref<HTMLElement | null>(null)

useSeoMeta({
  title: 'art70x | Frontend Developer Portfolio',
  description:
    'Frontend developer skilled in modern frontend technologies, especially Nuxt.js. Focused on building fast, responsive, and accessible web interfaces.',
  ogTitle: 'art70x | Frontend Developer Portfolio',
  ogDescription:
    'Frontend developer skilled in modern frontend technologies, especially Nuxt.js. Focused on building fast, responsive, and accessible web interfaces.',
  twitterTitle: 'art70x | Frontend Developer Portfolio',
  twitterDescription:
    'Frontend developer skilled in modern frontend technologies, especially Nuxt.js.',
})
defineOgImageComponent('NuxtSeo', {
  colorMode: 'dark',
  title: 'art70x | Developer Portfolio',
  description: 'Frontend developer skilled in modern frontend technologies, especially Nuxt.js.',
  theme: '#615fff',
})
</script>

<template>
  <div>
    <section
      id="home"
      ref="home"
      aria-labelledby="hero-title"
      class="section bg-gradient-to-b from-background/80 to-background/85 py-12 text-foreground md:py-24"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center gap-10 md:flex-row">
          <div class="md:w-1/2">
            <h1 id="hero-title" class="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Hi, I'm <span class="text-indigo-600 dark:text-purple-500">art70x</span>
            </h1>
            <h2 class="mb-6 text-2xl font-semibold md:text-3xl">
              Software Engineer & Web Developer
            </h2>
            <p class="mb-8 max-w-2xl text-lg">
              I specialize in creating efficient, user-friendly web applications with modern
              technologies. Passionate about solving complex problems with elegant solutions.
            </p>
            <div class="flex flex-wrap gap-2">
              <a
                class="btn bg-primary text-gray-100 hover:bg-primary-hover focus:ring-primary"
                href="#projects"
                @click.prevent="scrollToSection('#projects')"
              >
                View Projects
              </a>
              <a
                class="btn border border-foreground/30 bg-muted hover:bg-muted-hover"
                href="#socials"
                @click.prevent="scrollToSection('#socials')"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div class="mt-6 flex justify-center md:mt-0 md:w-1/2">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
    <section
      id="projects"
      ref="projectsRef"
      aria-labelledby="projects-title"
      class="section bg-gradient-to-b from-background/85 to-background/90 py-12 text-foreground"
    >
      <div class="container mx-auto px-4">
        <h2 id="projects-title" class="title">Featured Projects</h2>
        <p class="desc">Some of my recent work and personal projects</p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            v-for="project in data.projects"
            :key="project.id"
            class="spotlight overflow-hidden rounded-xl border shadow-md ta-300"
          >
            <div class="p-6">
              <div class="mb-4 flex items-start justify-between">
                <div>
                  <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
                  <p>{{ project.subtitle }}</p>
                </div>
                <a
                  class="text-xl text-gray-800 dark:text-gray-200"
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  aria-label="Give it a Try"
                  ><Icon name="mdi:open-in-new"
                /></a>
              </div>
              <p class="mb-4 text-gray-700 dark:text-gray-300">
                {{ project.description }}
              </p>
              <div class="mb-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full bg-muted px-3 py-1 text-sm"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                class="font-medium text-blue-600 ta-200 hover:underline dark:text-blue-400"
                :href="project.link"
                target="_blank"
                rel="noopener"
              >
                Give it a Try
                <Icon class="ml-1" name="mdi:arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="skills"
      ref="skillsRef"
      aria-labelledby="skills-title"
      class="section bg-gradient-to-b from-background/90 to-background/95 py-12"
    >
      <div class="container mx-auto px-4">
        <h2 id="skills-title" class="title">Technical Skills</h2>
        <p class="desc">
          I've worked with a variety of technologies across the web development stack
        </p>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div v-for="skill in data.skills" :key="skill.name" class="flex flex-col items-center">
            <div
              class="group mb-4 flex size-24 items-center justify-center rounded-full hover:scale-105"
            >
              <Icon :name="skill.icon" :class="['scale-95 text-5xl group-hover:scale-105']" />
            </div>
            <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="socials"
      ref="socialsRef"
      aria-labelledby="socials-title"
      class="section bg-gradient-to-b from-background/95 to-background py-12 text-foreground md:py-24"
    >
      <div class="container mx-auto px-4">
        <h2 id="socials-title" class="title">Connect With Me</h2>
        <p class="desc">Feel free to reach out for collaborations or just a friendly hello</p>
        <div class="mx-auto max-w-2xl">
          <div
            v-for="social in data.socials"
            :key="social.id"
            class="social-item mb-4 rounded-lg border-[1px] bg-gray-100 p-4 shadow-sm hover:bg-gray-200 dark:bg-gray-950/80 dark:hover:bg-gray-900"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex size-16 items-center justify-center rounded-full"
                :class="social.bgColor"
              >
                <Icon :name="social.icon" :class="[social.iconColor, 'text-3xl']" />
              </div>
              <div>
                <h3 class="text-lg font-semibold">{{ social.name }}</h3>
                <p class="text-gray-700 dark:text-gray-300">{{ social.username }}</p>
              </div>
              <a
                class="ml-auto flex items-center font-medium text-blue-600 ta-200 hover:underline dark:text-blue-400"
                :href="social.link"
              >
                {{ social.action }}
                <Icon name="mdi:arrow-right" class="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
