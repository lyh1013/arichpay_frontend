<script setup lang="ts">
import { useDisplay } from 'vuetify'
import HeaderTop from './HeaderTop.vue'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-layout
    class="d-flex flex-column w-100 background"
    :style="{ overflow: mdAndUp ? 'hidden' : 'auto' }"
  >
    <HeaderTop />

    <v-main>
      <RouterView />
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
  width: 650px;
  height: 550px;
  border-radius: 50%;
  background-image: linear-gradient(260deg, #8750f7 0%, rgba(115, 67, 210, 0.1) 100%);
  -webkit-filter: blur(150px);
  filter: blur(150px);
  opacity: 0.3;
}
</style>
