import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueI18n } from '@/libs/i18n/index'
import vuetify from '@/libs/vuetify/index'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import { createHead } from '@unhead/vue'

import '@/libs/vee-validate/index'

import 'animate.css'
import './assets/styles/main.css'
import 'vue3-perfect-scrollbar/style.css'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(router)
app.use(pinia)
app.use(VueI18n)
app.use(vuetify)
app.use(PerfectScrollbarPlugin, { componentName: 'vscrollbar' })
app.use(head)

app.mount('#app')
