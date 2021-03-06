import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import Scrollspy from 'vue2-scrollspy';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

import "@/design/index.scss"
import "@/assets/css/animate.css"
import "@/assets/css/flaticon.css"
import "@/assets/css/magnific-popup.css"
import "@/assets/css/main.css"
import "@/assets/css/nice-select.css"
// import "@/assets/css/style.css"

import store from '@/state/store'
// import store2 from './store'

import App from './App.vue'

import { initFirebaseBackend } from './authUtils'
import i18n from './i18n'

import { configureFakeBackend } from './helpers/fake-backend';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import moment from 'moment'

import tinymce from 'vue-tinymce-editor'
// import axios from 'axios'
window.axios = require('axios');
window.queryString = require('query-string');

// Vue.component('axios', axios)
Vue.component('tinymce', tinymce)

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  initFirebaseBackend(firebaseConfig);
} else {
  configureFakeBackend();
}

Vue.component ('kreasiku',{
  template: '#kreasiku',
});

Vue.component ('kelasku',{
  template: '#kelasku',
});

Vue.component ('relungku',{
  template: '#relungku',
});

Vue.use(VueRouter)
Vue.use(vco)
Vue.use(Scrollspy);
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(require('vue-chartist'))
Vue.use(VueSweetalert2);
Vue.use(VueGoodTablePlugin)
Vue.use(VueTelInput)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})
import GoogleAuth from '@/config/google_oAuth.js'
import VueGtagPlugin from 'vue-gtag'
const gauthOption = {
  clientId: '749746820493-o5fklqpe90t0uoq48u2e6bo6aomq3ct2.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.prototype.moment = moment
Vue.component('apexchart', VueApexCharts) 

if(process.env.NODE_ENV === 'production') {
  window.axios.defaults.baseURL = "localhost"
} else {
  window.axios.defaults.baseURL = "localhost"
}
window.axios.defaults.headers.post['Content-Type'] = "application/json"
let user = JSON.parse(localStorage.getItem('user'));
if (user && user.token) {
  window.axios.defaults.headers.common['Authorization'] = 'jwt ' + user.token
}else{``
  window.axios.defaults.headers.common['Authorization'] = ''
}

import VueGtag from "vue-gtag";
Vue.use(VueGtag, {
  config: {id : "UA-188133433-1"}
});

// add referral middleware
import { isAndroid } from "mobile-device-detect";

const validReferral = ["refo", "pinnacle", "wti"]
router.beforeEach((to, from, next) => {
  if (to.query.ref) {
    if (validReferral.includes(to.query.ref)) {
      if (isAndroid) {
        window.location.href = "intent://paideia.id/#Intent;scheme=https;package=com.paideia.id;end"

        setTimeout(() => {
          window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.paideia.id&launch=true"
        }, 10000);
      } else {
        localStorage.setItem('referral', to.query.ref)
      }
    }
    next()
  } else {
    next()
  }
})

import VueMeta from "vue-meta";
Vue.use(VueMeta)

new Vue({
  router,
  store,
  i18n,
  data: {
    currentView : 'kreasiku'
  },
  render: h => h(App)
}).$mount('#app')
