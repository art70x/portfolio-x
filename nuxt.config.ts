import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['@/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
  ],

  site: {
    url: 'https://art70x.vercel.app',
    name: 'art70x',
    description:
      'Frontend developer skilled in modern frontend technologies, especially Nuxt.js. Focused on building fast, responsive, and accessible web interfaces.',
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://art70x.vercel.app/sitemap.xml',
    Disallow: ['/admin', '/_nuxt'],
  },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.9,
      changefreq: 'weekly',
    },
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
    ],
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
  },

  features: {
    inlineStyles: (vueComponent) => {
      return vueComponent.includes('layouts/') || vueComponent.includes('components/critical/')
    },
  },

  experimental: {
    renderJsonPayloads: true,
    browserDevtoolsTiming: true,
    buildCache: true,
  },

  routeRules: {
    '/': {
      sitemap: { priority: 0.9 },
    },
    '/*.{svg,css,woff2,png}': {
      swr: true,
      cache: {
        maxAge: 432000,
      },
    },
  },
})
