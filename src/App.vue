<script lang="ts" setup>
import { navigation } from '@/navigation/index'
// import { createHead } from 'unhead/server'

const route = useRoute()

const LayoutAuth = defineAsyncComponent({
  loader: () => import('./views/layouts/LayoutAuth.vue'),
  delay: 0,
})

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

  switch (route.meta.layout) {
    case 'auth':
      return LayoutAuth
    case 'misc':
      return LayoutMisc
    default:
      return LayoutInner
  }
})
</script>

<template>
  <VLocaleProvider locale="zhHant">
    <VApp>
      <component :is="layout" />
    </VApp>
  </VLocaleProvider>
</template>
