<template>
  <div
    ref="element"
    :class="className"
    :style="{
      opacity: inView ? 1 : initialOpacity,
      transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
      filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  blur?: boolean
  duration?: number
  easing?: string
  delay?: number
  threshold?: number
  initialOpacity?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  blur: false,
  duration: 1000,
  easing: 'ease-out',
  delay: 0,
  threshold: 0.1,
  initialOpacity: 0,
  className: '',
})

const element = ref<HTMLElement | null>(null)
const inView = ref(false)

useIntersectionObserver(
  element,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !inView.value) {
      setTimeout(() => {
        inView.value = true
      }, props.delay)
    }
  },
  {
    threshold: props.threshold,
  },
)
</script>
