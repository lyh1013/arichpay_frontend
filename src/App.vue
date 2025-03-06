<script lang="ts" setup>
import { navigation } from '@/navigation/index'
// import { createHead } from 'unhead/server'

const route = useRoute()

const LayoutInner = defineAsyncComponent({
  loader: () => import('./views/layouts/LayoutInner.vue'),
  delay: 0,
})

const LayoutMisc = defineAsyncComponent({
  loader: () => import('./views/layouts/LayoutMisc.vue'),
  delay: 0,
})

const layout = computed(() => {
  if (route.name === undefined) return ''

  if (route.meta.layout === 'misc') return LayoutMisc

  return LayoutInner
})
</script>

<template>
  <component :is="layout" />
</template>
