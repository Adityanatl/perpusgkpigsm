import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'index',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/home/default'),
  },
]
