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

  {
    path:'/wilayah_cakupan',
    name:'wilayah cakupan',
    meta:{ authRequired: true, }, 
    component: () => import('./views/tentang-kami/wilayah_cakupan')
  },

  {
    path:'/mitra_kerja',
    name:'mitra kerja',
    meta:{ authRequired: true, }, 
    component: () => import('./views/tentang-kami/mitra_kerja')
  },

  {
    path:'/latar_belakang',
    name:'latar belakang',
    meta:{ authRequired: true, }, 
    component: () => import('./views/tentang-kami/latar_belakang')
  },
]
