<script setup lang="ts">
import HeaderTop from './HeaderTop.vue'
</script>

<template>
  <v-layout class="d-flex flex-column" style="overflow: visible">
    <HeaderTop />

    <v-main>
      <RouterView />

      <FooterBottom />
    </v-main>
  </v-layout>
</template>
