<script setup lang="ts">
import NewsList from './NewsList.vue'
import CallToActions from './CallToActions.vue'
</script>

<template>
  <v-container class="py-16" style="height: calc(100vh - 80px)">
    <v-row>
      <v-col cols="12">
        <v-chip class="mb-1 border" color="white" variant="flat">
          <v-icon icon="mdi-creation" start class="rounded-xl" />
          <span class="">Breaking news</span>
        </v-chip>
        <h1>公告訊息</h1>
      </v-col>

      <v-col cols="12" md="8">
        <NewsList />
      </v-col>

      <v-col cols="12" md="3" class="ms-0 ms-md-10">
        <CallToActions />
      </v-col>
    </v-row>
  </v-container>
</template>
