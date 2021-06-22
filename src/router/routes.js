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
    path: '/transaction/:id',
    name: 'Transaction',
    meta: { authRequired: true, mode: 'info' },
    component: () => import('./views/transaction/transaction')
  },
  {
    path: '/pembayaran-pending',
    name: 'pembayaran pending',
    meta: { authRequired: true },
    component: () => import('./views/pembayaran_pending/pembayaran-pending')
  },

  {
    path: '/pembayaran-berhasil',
    name: 'pembayaran berhasil',
    meta: { authRequired: true },
    component: () => import('./views/pembayaran_berhasil/pembayaran-berhasil')
  },

  {
    path: '/user',
    name: 'User',
    meta: { authRequired: true },
    component: () => import('./views/user/user')
  },

  // {
  //   path: '/subscription',
  //   name: 'Subscription',
  //   meta: { authRequired: true },
  //   component: () => import('./views/subscriptions/subscription')
  // },

  {
    path: '/donatur',
    name: 'donatur',
    meta: { authRequired: true },
    component: () => import('./views/donatur/donatur')
  },

  {
    path: '/privasi-persyaratan',
    name: 'privacy',
    meta: { authRequired: true },
    component: () => import('./views/privacy-policy/privasi-persyaratan')
  },
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
    path: '/thankyou',
    name: 'thankyou',
    meta: { authRequired: true },
    component: () => import('./views/template/thankyou')
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
    path: '/pingguru',
    name: 'ping_guru',
    meta: { authRequired: true },
    component: () => import('./views/ping_guru/ping_guru')
  },

  // {
  //   path: '/testAPI',
  //   name: 'testAPI',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/testAPI')
  // },

  {
    path: '/murid_kreatif',
    name: 'murid_kreatif',
    meta: { authRequired: true },
    component: () => import('./views/murid_kreatif/murid_kreatif')
  }
]
