import { ref } from 'vue'

const isDarkMode = ref(false)

const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const target = document.querySelector(sectionId)
  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 75,
      behavior: 'smooth',
    })
    mobileMenuOpen.value = false
  }
}

const applyTheme = (mode: 'dark' | 'light') => {
  const html = document.documentElement
  html.classList.remove('dark', 'light')
  html.classList.add(mode)
  localStorage.setItem('theme', mode)
  isDarkMode.value = mode === 'dark'
}

const useTheme = (toggle?: boolean) => {
  let mode: 'dark' | 'light'

  if (toggle) {
    mode = isDarkMode.value ? 'light' : 'dark'
  } else {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    mode = saved ?? (prefersDark ? 'dark' : 'light')
  }

  applyTheme(mode)
}

const data = {
  skills: [
    {
      name: 'JavaScript',
      level: 'Expert',
      icon: 'logos:javascript',
    },
    {
      name: 'VueJS',
      level: 'Advanced',
      icon: 'logos:vue',
    },
    {
      name: 'NuxtJS',
      level: 'Advanced',
      icon: 'logos:nuxt-icon',
    },
    {
      name: 'TailwindCSS',
      level: 'Advanced',
      icon: 'logos:tailwindcss-icon',
    },
    {
      name: 'TypeScript',
      level: 'Beginners',
      icon: 'logos:typescript-icon',
    },
    {
      name: 'HTML5',
      level: 'Expert',
      icon: 'logos:html-5',
    },
    {
      name: 'CSS3',
      level: 'Expert',
      icon: 'logos:css-3',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: 'Personal Website',
      description:
        'My personal portfolio website showcasing my skills, projects, and experience as a web developer.',
      tags: ['Nuxtjs', 'TailwindCSS'],
      link: 'https://art70x.vercel.app/?ref=art70x&utm_source=portfolio',
    },
    {
      id: 2,
      title: 'SEO Rush',
      subtitle: 'AI Driven SEO Analysis',
      description:
        'Get an instant, AI-powered SEO analysis of any website. Uncover insights, check your meta tags, and improve your ranking.',
      tags: ['Nextjs', 'ShadCN', 'TailwindCSS'],
      link: 'https://seo-rush.vercel.app/?ref=art70x&utm_source=portfolio',
    },
  ],
  socials: [
    {
      id: 1,
      name: 'GitHub',
      username: 'art70x',
      icon: 'mdi:github',
      iconColor: 'text-neutral-800 dark:text-neutral-200',
      bgColor: 'bg-neutral-200 dark:bg-neutral-950/25',
      link: 'https://github.com/art70x',
      action: 'Follow',
    },
    {
      id: 1,
      name: 'DevTo',
      username: 'art70x',
      icon: 'mdi:dev-to',
      iconColor: 'text-neutral-800 dark:text-neutral-200',
      bgColor: 'bg-neutral-200 dark:bg-neutral-950/25',
      link: 'https://dev.to/art70x',
      action: 'Follow',
    },
    {
      id: 2,
      name: 'Twitter',
      username: 'art70x',
      icon: 'mdi:twitter',
      iconColor: 'text-blue-600 dark:text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-950/30',
      link: 'https://twitter.com/art70x',
      action: 'Follow',
    },
    // {
    //   id: 3,
    //   name: 'Email',
    //   username: 'art70x@example.com',
    //   icon: 'mdi-email',
    //   iconColor: 'text-red-600 dark:text-red-500',
    //   bgColor: 'bg-red-100 dark:bg-red-950/30',
    //   link: 'mailto:art70x@example.com',
    //   action: 'Contact',
    // },
  ],
}

export { isDarkMode, useTheme, mobileMenuOpen, scrollToSection, data }
