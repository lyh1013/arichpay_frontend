import { createRouter, createWebHistory } from 'vue-router'

import auth from './routes/auth'
import pages from './routes/pages'
import others from './routes/others'

const routes = [...auth, ...pages, ...others]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {})

export default router
