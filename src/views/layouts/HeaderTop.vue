<script setup lang="ts">
import MenuList from './components/MenuList.vue'

import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const route = useRoute()
// const { user } = storeToRefs(useAuth())

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <v-container class="py-2">
    <v-toolbar density="compact" color="transparent" height="80">
      <v-app-bar-nav-icon class="d-block d-md-none" variant="text" @click.stop="toggleMenu" />

      <v-toolbar-title style="max-width: 120px">
        <router-link to="/">
          <v-img max-width="120" src="@images/logo/logo.png" cover />
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-list
        class="align-items mx-auto parent d-none d-md-flex py-0 bg-transparent"
        active-class="font-weight-bold text-primary"
        density="compact"
        rounded="xl"
      >
        <MenuList />
      </v-list>

      <v-spacer v-show="mdAndUp" />

      <!-- <v-btn prepend-icon="mdi-account-outline" text="會員登入" variant="flat" to="/signin" /> -->

      <div class="d-flex align-center ga-2">
        <span>Hi! 艾創點工程師</span>
        <v-btn icon="mdi-account-outline" variant="outlined" to="/profile" size="small" />
        <v-btn icon="mdi-logout" variant="outlined" size="small" />
      </div>
    </v-toolbar>

    <v-navigation-drawer v-model="menuOpen" temporary>
      <v-card flat class="pa-4">
        <div class="d-flex align-center justify-between">
          <router-link to="/" class="w-100">
            <v-img max-width="120" src="@images/logo/logo.png" cover />
          </router-link>

          <v-icon icon="mdi-close" @click="toggleMenu" />
        </div>

        <v-list class="parent" active-class="font-weight-bold text-primary mt-5">
          <MenuList />
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped>
.header-sticky {
  box-shadow: 0px 1px 3px 0px rgba(17, 17, 17, 0.1);
}

:deep(.v-list-item--active:hover > .v-list-item__overlay),
:deep(.parent .v-list-item:hover > .v-list-item__overlay) {
  opacity: 0;
}

:deep(.v-list-item__prepend),
:deep(.v-list-item__append) {
  display: block;
}

.v-toolbar__content > .v-toolbar-title {
  margin-inline-start: 0;
}
</style>
