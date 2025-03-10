export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/NewsView.vue'),
  },
  {
    path: '/statement',
    name: 'statement',
    component: () => import('@/views/bill/statement/StatementView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/credit-note',
    name: 'credit-note',
    component: () => import('@/views/bill/creditNote/CreditNoteView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]
