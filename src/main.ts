import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vuetify from '@/libs/vuetify'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'

import './assets/styles/main.css'
import 'vue3-perfect-scrollbar/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(PerfectScrollbarPlugin, { componentName: 'vscrollbar' })

app.mount('#app')
