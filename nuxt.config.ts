import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  build: {
    minify: 'terser',
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['@/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/icon', '@nuxtjs/seo', '@nuxt/fonts'],

  site: {
    url: 'https://art70x.vercel.app',
    name: 'art70x',
    description:
      'Frontend developer skilled in modern frontend technologies, especially Nuxt.js. Focused on building fast, responsive, and accessible web interfaces.',
  },

  schemaOrg: {
    identity: definePerson({
      name: 'art70x',
      description: 'A frontend web developer currently working with UI/UX and a11y',

      // email: 'art70x@example.com',
      url: 'https://art70x.vercel.app',

      sameAs: [
        'https://twitter.com/art70x',
        'https://github.com/art70x',
        'https://dev.to/art70x',
        'https://art70x.vercel.app'
      ],
    }),
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
  },

  experimental: {
    renderJsonPayloads: true,
    inlineSSRStyles: true,
  },

  routeRules: {
    '/*.{svg,css,woff2,png}': {
      swr: true,
      cache: {
        maxAge: 432000,
      },
    },
  },
})
