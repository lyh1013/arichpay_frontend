<script setup lang="ts">
import MenuList from './components/MenuList.vue'

import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const { y: windowY } = useWindowScroll()

const { /* user, */ isLoggedIn } = storeToRefs(useAuth())
const { logout } = useAuth()

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <v-container class="py-2 d-print-none header" :class="{ 'header-sticky': windowY > 100 }">
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

      <v-btn
        v-if="!isLoggedIn"
        prepend-icon="mdi-account-outline"
        text="會員登入"
        variant="flat"
        to="/signin"
      />

      <div v-else class="d-flex align-center ga-2">
        <span class="d-none d-md-block">Hi! 艾創點工程師</span>
        <v-btn icon="mdi-account-outline" variant="outlined" to="/profile" size="small" />
        <v-btn icon="mdi-logout" variant="outlined" size="small" @click="logout" />
      </div>
    </v-toolbar>

    <v-navigation-drawer v-model="menuOpen" temporary>
      <v-card variant="flat" class="pa-4 h-screen" rounded="sm">
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
.header {
  z-index: 10;
}

.header-sticky {
  position: sticky;
  top: 0;
  left: 0;
  animation-name: menuSticky;
  -webkit-animation-name: menuSticky;
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  box-shadow: 0px 1px 3px 0px rgba(17, 17, 17, 0.1);
  background: rgba(255, 255, 255);
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

@keyframes menuSticky {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

:deep(.v-navigation-drawer__content) {
  overflow-y: unset;
  overflow-x: unset;
}

:deep(.v-navigation-drawer__scrim) {
  height: 100vh;
}
</style>
