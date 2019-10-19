import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/common',
    name: 'common',
    component: () => import('@/views/common/common.vue')
  }
]
