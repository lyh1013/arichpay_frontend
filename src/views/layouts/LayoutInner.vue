<script setup lang="ts">
import { useDisplay } from 'vuetify'

import HeaderTop from './HeaderTop.vue'
import CookieToast from './components/CookieToast.vue'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-layout
    class="d-flex flex-column background"
    :style="{ overflow: mdAndUp ? 'hidden' : 'visible' }"
  >
    <HeaderTop />

    <v-main>
      <RouterView />
      <CookieToast />
    </v-main>
  </v-layout>
</template>

<style scoped>
.background {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, #e5e5f3 100%);
  position: relative;
}

.background::before {
  content: '';
  position: absolute;
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 650px;
  width: 100%;
  height: 550px;
  border-radius: 50%;
  background-image: linear-gradient(260deg, #8750f7 0%, rgba(115, 67, 210, 0.1) 100%);
  -webkit-filter: blur(150px);
  filter: blur(150px);
  opacity: 0.3;
}
</style>
