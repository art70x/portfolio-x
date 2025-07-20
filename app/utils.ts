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
      icon: 'mdi:language-javascript',
      bgColor:
        'bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:hover:bg-yellow-800/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      name: 'VueJS',
      level: 'Advanced',
      icon: 'mdi:vuejs',
      bgColor: 'bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/30',
      textColor: 'text-green-500 dark:text-green-400',
    },
    {
      name: 'NuxtJS',
      level: 'Advanced',
      icon: 'mdi:nuxt',
      bgColor:
        'bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:hover:bg-emerald-800/30',
      textColor: 'text-emerald-500 dark:text-emerald-400',
    },
    {
      name: 'TailwindCSS',
      level: 'Advanced',
      icon: 'mdi:tailwind',
      bgColor: 'bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:hover:bg-cyan-800/30',
      textColor: 'text-cyan-500 dark:text-cyan-400',
    },
    {
      name: 'TypeScript',
      level: 'Beginners',
      icon: 'mdi:language-typescript',
      bgColor: 'bg-sky-100 hover:bg-sky-200 dark:bg-sky-900/30 dark:hover:bg-sky-800/30',
      textColor: 'text-sky-600 dark:text-sky-400',
    },
    {
      name: 'HTML5',
      level: 'Expert',
      icon: 'mdi:language-html5',
      bgColor:
        'bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-800/30',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      name: 'CSS3',
      level: 'Expert',
      icon: 'mdi:language-css3',
      bgColor: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/30',
      textColor: 'text-blue-600 dark:text-blue-400',
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
