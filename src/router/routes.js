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

  {
    path:'/pimpinan_sinode',
    name:'pimpinan sinode',
    meta:{ authRequired: true, }, 
    component: () => import('./views/tentang-kami/pimpinan_sinode')
  },

  {
    path:'/tata_kelola',
    name:'tata kelola',
    meta:{ authRequired: true, }, 
    component: () => import('./views/tentang-kami/tata_kelola')
  },
]
