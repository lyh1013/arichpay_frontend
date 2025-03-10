<script setup lang="ts">
import NewsList from './NewsList.vue'
import CallToActions from './CallToActions.vue'
</script>

<template>
  <v-container class="py-md-10 py-8" style="height: calc(100vh - 80px)">
    <v-row class="ga-4">
      <v-col cols="12" class="order-2 order-md-1 animate__animated animate__fadeInDown">
        <v-chip class="mb-1 bg-white" variant="outlined" color="primary-darken-1">
          <v-icon icon="mdi-creation" start class="rounded-xl" />
          <span class="">Breaking news</span>
        </v-chip>
        <h1 class="text-primary">公告訊息</h1>
      </v-col>

      <v-col cols="12" md="8" class="order-3 order-md-2 animate__animated animate__fadeInUp">
        <NewsList />
      </v-col>

      <v-col cols="12" md="3" class="ms-0 ms-md-10 order-1 order-md-3">
        <CallToActions />
      </v-col>
    </v-row>
  </v-container>
</template>
