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
    path: '/dashboards/index',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/dashboards/index'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('./views/account/login'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/account/register'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'dashboard' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/products',
    name: 'Product',
    meta: { authRequired: true },
    component: () => import('./views/products/products')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    meta: { authRequired: true },
    component: () => import('./views/checkout/checkout')
  },

  {
    path: '/user',
    name: 'User',
    meta: { authRequired: true },
    component: () => import('./views/user/user')
  },

  {
    path: '/subscription',
    name: 'Subscription',
    meta: { authRequired: true },
    component: () => import('./views/subscriptions/subscription')
  },

  {
    path: '/strategic',
    name: 'List of Strategic',
    meta: { authRequired: true },
    component: () => import('./views/strategics/strategic')
  },
  {
    path: '/strategic/add',
    name: 'Add Strategic',
    meta: { authRequired: true, mode: 'add' },
    component: () => import('./views/strategics/form-strategic')
  },
  {
    path: '/strategic/edit/:id',
    name: 'Edit Strategic',
    meta: { authRequired: true, mode: 'edit' },
    component: () => import('./views/strategics/form-strategic')
  },
  {
    path: '/silabus',
    name: 'List of Silabus',
    meta: { authRequired: true },
    component: () => import('./views/silabus/silabus')
  },
  {
    path: '/silabus/add',
    name: 'Add Silabus',
    meta: { authRequired: true, mode: 'add' },
    component: () => import('./views/silabus/form-silabus')
  },
  {
    path: '/silabus/edit/:id',
    name: 'Edit Silabus',
    meta: { authRequired: true, mode: 'edit' },
    component: () => import('./views/silabus/form-silabus')
  },
  {
    path: '/rubrik',
    name: 'List of Rubrik',
    meta: { authRequired: true },
    component: () => import('./views/rubrik/rubrik')
  },
  {
    path: '/rubrik/add',
    name: 'Add Rubrik',
    meta: { authRequired: true, mode: 'add' },
    component: () => import('./views/rubrik/form-rubrik')
  },
  {
    path: '/rubrik/edit/:id',
    name: 'Edit Rubrik',
    meta: { authRequired: true, mode: 'edit' },
    component: () => import('./views/rubrik/form-rubrik')
  },
  {
    path: '/penilaian',
    name: 'List of Penilaian',
    meta: { authRequired: true },
    component: () => import('./views/penilaian/penilaian')
  },
  {
    path: '/lessonplan',
    name: 'List of Lesson Plan',
    meta: { authRequired: true },
    component: () => import('./views/lessonplan/lessonplan')
  },
  {
    path: '/lessonplan/add',
    name: 'Add Lessonplan',
    meta: { authRequired: true, mode: 'add' },
    component: () => import('./views/lessonplan/form-lessonplan')
  },
  {
    path: '/lessonplan/edit/:id',
    name: 'Edit Lessonplan',
    meta: { authRequired: true, mode: 'edit' },
    component: () => import('./views/lessonplan/form-lessonplan')
  },
  {
    path: '/files',
    name: 'List of Files',
    meta: { authRequired: true },
    component: () => import('./views/files/files')
  },
  {
    path: '/provinsi',
    name: 'List of Provinsi',
    meta: { authRequired: true },
    component: () => import('./views/provinsi/provinsi')
  },
  {
    path: '/provinsi/add',
    name: 'Add Provinsu',
    meta: { authRequired: true },
    component: () => import('./views/provinsi/add-provinsi')
  },
  {
    path: '/city',
    name: 'List of City',
    meta: { authRequired: true },
    component: () => import('./views/city/city')
  },
  {
    path: '/ki',
    name: 'List of Kompetensi Inti',
    meta: { authRequired: true },
    component: () => import('./views/ki/ki')
  },
  {
    path: '/ki/add',
    name: 'Add Kompetensi Inti',
    meta: { authRequired: true },
    component: () => import('./views/ki/add-ki')
  },
  {
    path: '/kd',
    name: 'List of Kompetensi Dasar',
    meta: { authRequired: true },
    component: () => import('./views/kd/kd')
  },
  {
    path: '/kd/add',
    name: 'Add Kompetensi Dasar',
    meta: { authRequired: true },
    component: () => import('./views/kd/add-kd')
  },
  {
    path: '/rumpun',
    name: 'List of Rumpun',
    meta: { authRequired: true },
    component: () => import('./views/rumpun/rumpun')
  },
  {
    path: '/rumpun/add',
    name: 'Add Rumpun',
    meta: { authRequired: true },
    component: () => import('./views/rumpun/add-rumpun')
  },
  {
    path: '/mapel',
    name: 'List of Mata Pelajaran',
    meta: { authRequired: true },
    component: () => import('./views/mapel/mapel')
  },
  {
    path: '/mapel/add',
    name: 'Add Mapel',
    meta: { authRequired: true },
    component: () => import('./views/mapel/add-mapel')
  },
  {
    path: '/materi',
    name: 'List of Materi',
    meta: { authRequired: true },
    component: () => import('./views/materi/materi')
  },
  {
    path: '/materi/add',
    name: 'Add Materi',
    meta: { authRequired: true },
    component: () => import('./views/materi/add-materi')
  },
  {
    path: '/profil_pembelajaran',
    name: 'List of Profil Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/profil_pembelajaran/profil_pembelajaran')
  },
  {
    path: '/profil_pembelajaran/add',
    name: 'Add Profil Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/profil_pembelajaran/add-profil_pembelajaran')
  },
  {
    path: '/domain_pembelajaran',
    name: 'List of Domain Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/domain_pembelajaran/domain_pembelajaran')
  },
  {
    path: '/domain_pembelajaran/add',
    name: 'Add Domain Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/domain_pembelajaran/add-domain_pembelajaran')
  },  {
    path: '/kunci_pembelajaran',
    name: 'List of Kunci Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/kunci_pembelajaran/kunci_pembelajaran')
  },
  {
    path: '/kunci_pembelajaran/add',
    name: 'Add Kunci Pembelajaran',
    meta: { authRequired: true },
    component: () => import('./views/kunci_pembelajaran/add-kunci_pembelajaran')
  },
  // {
  //   path: '/ruang_lingkup',
  //   name: 'List of Ruang Lingkup',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ruang_lingkup/ruang_lingkup')
  // },
  {
    path: '/kompetensi',
    name: 'List of Kompetensi',
    meta: { authRequired: true },
    component: () => import('./views/kompetensi/kompetensi')
  },
  {
    path: '/kompetensi/add',
    name: 'Add Kompetensi',
    meta: { authRequired: true },
    component: () => import('./views/kompetensi/add-kompetensi')
  },
  {
    path: '/tema',
    name: 'List of Tema',
    meta: { authRequired: true },
    component: () => import('./views/tema/tema')
  },
  {
    path: '/tema/add',
    name: 'Add Tema',
    meta: { authRequired: true },
    component: () => import('./views/tema/add-tema')
  },
  {
    path: '/subtema',
    name: 'List of Sub Tema',
    meta: { authRequired: true },
    component: () => import('./views/subtema/subtema')
  },
  {
    path: '/subtema/add',
    name: 'Add SubTema',
    meta: { authRequired: true },
    component: () => import('./views/subtema/add-subtema')
  },

  // {
  //   path: '/home/index',
  //   name: 'home gurukreator',
  //   meta: { authRequired: true },
  //   component: () => import('./views/home/index.vue')
  // },

  {
    path: '/features/features',
    name: 'features',
    meta: { authRequired:true },
    component: () => import('./views/features/features')
  },

  {
    path: '/sign_up/sign-up',
    name: 'sign up',
    meta: { authRequired: true },
    component: () => import('./views/sign_up/sign-up')
  },   

  {
    path: '/sign_in/sign-in',
    name: 'sign in',
    meta: { authRequired: true },
    component: () => import('./views/sign_in/sign-in')
  },   

  {
    path: '/reset_password/reset-password',
    name: 'reset password',
    meta: { authRequired: true },
    component: () => import('./views/reset_password/reset-password')
  },    
  
  {
    path: '/change_password/change-password',
    name: 'change password',
    meta: { authRequired: true },
    component: () => import('./views/change_password/change-password')
  },   

  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: () => import('./views/account/forgot-password'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'dashboard' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch('auth/logOut')
        } else {
          store.dispatch('authfack/logout')
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.push('/login')
        )
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: 'dashboard' } : { ...routeFrom })
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/utility/404').default,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
  {
    path: '/dashboard/saas',
    name: 'saas-dashboard',
    meta: { authRequired: true },
    component: () => import('./views/dashboards/saas/index')
  },
  {
    path: '/dashboard/crypto',
    name: 'crypto-dashboard',
    meta: { authRequired: true },
    component: () => import('./views/dashboards/crypto/index')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: { authRequired: true },
    component: () => import('./views/calendar/calendar')
  },
  {
    path: '/chat',
    name: 'chat',
    meta: { authRequired: true },
    component: () => import('./views/chat/index')
  },
  {
    path: '/ecommerce/products',
    name: 'Products',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/products')
  },
  {
    path: '/ecommerce/product-detail/:id',
    name: 'Product Detail',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/product-detail')
  },
  {
    path: '/ecommerce/orders',
    name: 'Orders',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/orders')
  },
  {
    path: '/ecommerce/customers',
    name: 'Customers',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/customers')
  },
  {
    path: '/ecommerce/cart',
    name: 'Cart',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/cart')
  },
  {
    path: '/ecommerce/checkout',
    name: 'Checkout',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/checkout')
  },
  {
    path: '/ecommerce/shops',
    name: 'Shops',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/shops')
  },
  {
    path: '/ecommerce/add-product',
    name: 'Add Product',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/add-product')
  },
  {
    path: '/crypto/wallet',
    name: 'Wallet',
    meta: { authRequired: true },
    component: () => import('./views/crypto/wallet/index')
  },
  {
    path: '/crypto/buy-sell',
    name: 'Buy/sell',
    meta: { authRequired: true },
    component: () => import('./views/crypto/buysell/index')
  },
  {
    path: '/crypto/exchange',
    name: 'Exchange',
    meta: { authRequired: true },
    component: () => import('./views/crypto/exchange/index')
  },
  {
    path: '/crypto/lending',
    name: 'Lending',
    meta: { authRequired: true },
    component: () => import('./views/crypto/lending/index')
  },
  {
    path: '/crypto/orders',
    name: 'crypto-orders',
    meta: { authRequired: true },
    component: () => import('./views/crypto/orders/index')
  },
  {
    path: '/crypto/kyc-application',
    name: 'kyc-application',
    meta: { authRequired: true },
    component: () => import('./views/crypto/kycapplication/index')
  },
  {
    path: '/crypto/ico-landing',
    name: 'Ico-landing',
    meta: { authRequired: true },
    component: () => import('./views/crypto/ico-landing')
  },
  {
    path: '/invoices/detail',
    name: 'Invoice Detail',
    meta: { authRequired: true },
    component: () => import('./views/invoices/detail')
  },
  {
    path: '/invoices/list',
    name: 'Invoice List',
    meta: { authRequired: true },
    component: () => import('./views/invoices/list')
  },
  {
    path: '/ui/alerts',
    name: 'Alerts',
    meta: {
      authRequired: true
    },
    component: () => import('./views/ui/alerts')
  },
  {
    path: '/ui/buttons',
    name: 'Buttons',
    meta: {
      authRequired: true
    },
    component: () => import('./views/ui/buttons')
  },
  {
    path: '/ui/cards',
    name: 'Cards',
    meta: { authRequired: true },
    component: () => import('./views/ui/cards')
  },
  {
    path: '/ui/carousel',
    name: 'Carousel',
    meta: { authRequired: true },
    component: () => import('./views/ui/carousel')
  },
  {
    path: '/ui/dropdowns',
    name: 'Dropdowns',
    meta: { authRequired: true },
    component: () => import('./views/ui/dropdowns')
  },
  {
    path: '/ui/grid',
    name: 'Grid',
    meta: { authRequired: true },
    component: () => import('./views/ui/grid')
  },
  {
    path: '/ui/images',
    name: 'Images',
    meta: { authRequired: true },
    component: () => import('./views/ui/images')
  },
  {
    path: '/ui/modals',
    name: 'Modals',
    meta: { authRequired: true },
    component: () => import('./views/ui/modals')
  },
  {
    path: '/ui/rangeslider',
    name: 'Rangeslider',
    meta: { authRequired: true },
    component: () => import('./views/ui/rangeslider')
  },
  {
    path: '/ui/progressbars',
    name: 'Progressbars',
    meta: { authRequired: true },
    component: () => import('./views/ui/progressbars')
  },
  {
    path: '/ui/sweet-alert',
    name: 'Sweet-alert',
    meta: { authRequired: true },
    component: () => import('./views/ui/sweet-alert')
  },
  {
    path: '/ui/tabs-accordions',
    name: 'Tabs-accordions',
    meta: { authRequired: true },
    component: () => import('./views/ui/tabs-accordions')
  },
  {
    path: '/ui/typography',
    name: 'Typography',
    meta: { authRequired: true },
    component: () => import('./views/ui/typography')
  },
  {
    path: '/ui/video',
    name: 'Video',
    meta: { authRequired: true },
    component: () => import('./views/ui/video')
  },
  {
    path: '/ui/general',
    name: 'General',
    meta: { authRequired: true },
    component: () => import('./views/ui/general')
  },
  {
    path: '/ui/colors',
    name: 'Colors',
    meta: { authRequired: true },
    component: () => import('./views/ui/colors')
  },
  {
    path: '/ui/lightbox',
    name: 'Lightbox',
    meta: { authRequired: true },
    component: () => import('./views/ui/lightbox')
  },
  {
    path: '/ui/image-cropper',
    name: 'Image Cropper',
    meta: { authRequired: true },
    component: () => import('./views/ui/cropper')
  },
  {
    path: '/projects/grid',
    name: 'Projects Grid',
    meta: { authRequired: true },
    component: () => import('./views/projects/projects-grid')
  },
  {
    path: '/projects/list',
    name: 'Projects List',
    meta: { authRequired: true },
    component: () => import('./views/projects/projects-list')
  },
  {
    path: '/projects/overview',
    name: 'Project Overview',
    meta: { authRequired: true },
    component: () => import('./views/projects/overview')
  },
  {
    path: '/projects/create',
    name: 'Create New',
    meta: { authRequired: true },
    component: () => import('./views/projects/create')
  },
  {
    path: '/contacts/grid',
    name: 'User Grid',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-grid')
  },
  {
    path: '/contacts/list',
    name: 'User List',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-list')
  },
  {
    path: '/contacts/profile',
    name: 'Profile',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-profile')
  },
  {
    path: '/charts/apex',
    name: 'Apex chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/apex')
  },
  {
    path: '/charts/chartjs',
    name: 'Chartjs chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/chartjs/index')
  },
  {
    path: '/charts/chartist',
    name: 'Chartist chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/chartist')
  },
  {
    path: '/charts/echart',
    name: 'Echart chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/echart/index')
  },
  {
    path: '/icons/boxicons',
    name: 'Boxicons Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/boxicons')
  },
  {
    path: '/icons/materialdesign',
    name: 'Materialdesign Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/materialdesign')
  },
  {
    path: '/icons/dripicons',
    name: 'Dripicons Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/dripicons')
  },
  {
    path: '/icons/fontawesome',
    name: 'Fontawesome Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/fontawesome')
  },
  {
    path: '/maps/google',
    name: 'Google Maps',
    meta: { authRequired: true },
    component: () => import('./views/maps/google')
  },
  {
    path: '/maps/leaflet',
    name: 'Leaflet Maps',
    meta: { authRequired: true },
    component: () => import('./views/maps/leaflet/index')
  },
  {
    path: '/tables/basic',
    name: 'Basic Tables',
    meta: { authRequired: true },
    component: () => import('./views/tables/basictable')
  },
  {
    path: '/tables/advanced',
    name: 'Advanced Tables',
    meta: { authRequired: true },
    component: () => import('./views/tables/advancedtable')
  },
  {
    path: '/form/advanced',
    name: 'Form Advanced',
    meta: { authRequired: true },
    component: () => import('./views/forms/advanced')
  },
  {
    path: '/form/elements',
    name: 'Form Elements',
    meta: { authRequired: true },
    component: () => import('./views/forms/elements')
  },
  {
    path: '/form/layouts',
    name: 'Form Layouts',
    meta: { authRequired: true },
    component: () => import('./views/forms/layouts')
  },
  {
    path: '/form/editor',
    name: 'Form Editors',
    meta: { authRequired: true },
    component: () => import('./views/forms/editors')
  },
  {
    path: '/form/uploads',
    name: 'File Uploads',
    meta: { authRequired: true },
    component: () => import('./views/forms/uploads')
  },
  {
    path: '/form/validation',
    name: 'Form Validation',
    meta: { authRequired: true },
    component: () => import('./views/forms/validation')
  },
  {
    path: '/form/wizard',
    name: 'Form Wizard',
    meta: { authRequired: true },
    component: () => import('./views/forms/wizard')
  },
  {
    path: '/form/repeater',
    name: 'Form Repeater',
    meta: { authRequired: true },
    component: () => import('./views/forms/repeater')
  },
  {
    path: '/form/mask',
    name: 'Form Mask',
    meta: { authRequired: true },
    component: () => import('./views/forms/mask')
  },
  {
    path: '/pages/starter',
    name: 'Starter',
    meta: { authRequired: true },
    component: () => import('./views/utility/starter')
  },
  {
    path: '/pages/maintenance',
    name: 'Maintenance',
    meta: { authRequired: true },
    component: () => import('./views/utility/maintenance')
  },
  {
    path: '/pages/timeline',
    name: 'Timeline',
    meta: { authRequired: true },
    component: () => import('./views/utility/timeline')
  },
  {
    path: '/pages/faqs',
    name: 'FAQs',
    meta: { authRequired: true },
    component: () => import('./views/utility/faqs')
  },
  {
    path: '/pages/pricing',
    name: 'Pricing',
    meta: { authRequired: true },
    component: () => import('./views/utility/pricing')
  },
  {
    path: '/pages/404',
    name: 'Error-404',
    meta: { authRequired: true },
    component: () => import('./views/utility/404')
  },
  {
    path: '/pages/500',
    name: 'Error-500',
    meta: { authRequired: true },
    component: () => import('./views/utility/500')
  },
  {
    path: '/email/inbox',
    name: 'Inbox',
    meta: { authRequired: true },
    component: () => import('./views/email/inbox')
  },
  {
    path: '/email/reademail/:id',
    name: 'Read Email',
    meta: { authRequired: true },
    component: () => import('./views/email/reademail')
  },
  {
    path: '/tasks/list',
    name: 'Task list',
    meta: { authRequired: true },
    component: () => import('./views/tasks/task-list')
  },
  {
    path: '/tasks/kanban',
    name: 'Kanbanboard',
    meta: { authRequired: true },
    component: () => import('./views/tasks/kanbanboard')
  },
  {
    path: '/tasks/create',
    name: 'Create Task',
    meta: { authRequired: true },
    component: () => import('./views/tasks/task-create')
  },
  {
    path: '/auth/login-1',
    name: 'Login sample',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/login-sample')
  },
  {
    path: '/auth/register-1',
    name: 'Register sample',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/register-sample')
  },
  {
    path: '/auth/recoverpwd',
    name: 'Recover pwd',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/recoverpw-sample')
  },
  {
    path: '/auth/lock-screen',
    name: 'Lock screen',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/lockscreen')
  },
  {
    path: '/level2.2',
    name: 'Level 2.2',
    meta: { authRequired: true },
    component: () => import('./views/multilevel/level2.2')
  }
]