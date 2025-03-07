export default [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/auth/SigninView.vue'),
    meta: {
      requiresAuth: true,
      resource: 'auth',
    },
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('@/views/auth/ForgetView.vue'),
    meta: {
      requiresAuth: true,
      resource: 'auth',
    },
  },
]
