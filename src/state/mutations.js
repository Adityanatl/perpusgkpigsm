import * as types from './mutations_types'
import VueCookies from 'vue-cookies'

// initial state
export const state = {
  user_session : {
    refreshEnabled:false,
    email : '', //keep user info to relogin
    password : '',
    token : {
      name:'',
      iat:0,
      exp:0,
      token:''
    }
  }
}


// mutations
export const mutations = {
  [types.LOGIN] (state, payload) {
    state.user_session = payload;
    state.user_session.refreshEnabled = true;
    //delete state.user_session.payload.password
    VueCookies.set('modeling',state.user_session);
    //console.log('sdsds ',VueCookies.get('serpul'))
  },
  [types.LOGOUT] (state) {

    state.user_session = { //clear user session
       refreshEnabled:false,
       email : '',
       //password : '',
       token : {
          name:'',
          iat:0,
          exp:0,
          token:''
        }
    }
    VueCookies.set('modeling',state.user_session);
  }
}
