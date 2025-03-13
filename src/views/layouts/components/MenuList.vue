<script setup lang="ts">
import { menus } from '@/navigation/menu'

const menuItems = ref(menus)
</script>

<template>
  <v-list-item
    v-for="{ to, title, icon, children } in menuItems"
    :key="title"
    :to
    :prepend-icon="icon"
    :append-icon="children ? 'mdi-menu-down' : ''"
  >
    <v-menu v-if="children">
      <template v-slot:activator="{ props }">
        <span v-bind="props"> {{ title }} </span>
      </template>

      <v-list class="mt-2" active-class="font-weight-bold text-primary" rounded="lg">
        <v-list-item v-for="{ to, title } in children" :key="title" :to :title />
      </v-list>
    </v-menu>

    <span v-else>{{ title }}</span>
  </v-list-item>
</template>

<style scoped>
:deep(.v-list-item--active:hover > .v-list-item__overlay),
:deep(.parent .v-list-item:hover > .v-list-item__overlay) {
  opacity: 0;
}

:deep(.v-list-item__prepend),
:deep(.v-list-item__append) {
  display: block;
}
</style>
