const state = {
  loading: false,
  account: {},
  accounts:[],
  columns: [],
  paginate: {total:0},
  resp: {},
  account_session: {
    refreshEnabled:false,
    email : '',
    hp : '',
    token : {
      name:'',
      iat:0,
      exp:0,
      token:''
    }
  },
  more: {},
  membership: {},
  kreasiku: {}
}
export const  mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  ACCOUNT: (state, payload) => {
    state.account = payload
    state.loading = false
    localStorage.setItem('user', JSON.stringify(payload))
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(payload))
  },
  LOGIN: (state, payload) => {
    state.account_session = payload
    state.loading = false
  },
  SET_ACCOUNTS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.accounts = payload.data
  },
  SET_RESP: (state, payload) => {
    state.loading = false
    state.resp = payload
  },
  SET_MORE: (state, payload) => {
    state.loading = false
    state.more = payload
  },
  SET_MEMBERSHIP: (state, payload) => {
    state.loading = false
    state.membership = payload
  },
  SET_KREASIKU: (state, payload) => {
    state.loading = false
    state.kreasiku = payload
  },

}

export const actions = {
  LOGIN: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/account/login', data: payload, method: 'POST'})
      .then(resp => {
        if(resp.data.code === 200) {
          commit("ACCOUNT", resp.data.data)
          axios.defaults.headers.common['Authorization'] = 'jwt ' + resp.data.data.token
        }
        return resp
      })
  },
  LOGIN_SSO_GOOGLE: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'login/sso/google', data: payload, method: 'POST'})
        .then(resp => {
          if(resp.data.code === 200) {
            commit("ACCOUNT", resp.data.data)
            axios.defaults.headers.common['Authorization'] = 'jwt ' + resp.data.data.token
          }
          return resp
        })
  },
  LOGIN_SSO_FACEBOOK: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'login/sso/facebook', data: payload, method: 'POST'})
        .then(resp => {
          if(resp.data.code === 200) {
            commit("ACCOUNT", resp.data.data)
            axios.defaults.headers.common['Authorization'] = 'jwt ' + resp.data.data.token
          }
          return resp
        })
  },
  LOGOUT: async ({commit}) => {
    axios({url: 'api/account/logout', data: {}, method: 'POST'})
    commit("ACCOUNT", {...state.account, ...{token: null}})
    localStorage.removeItem('modeling')
    delete axios.defaults.headers.common['Authorization']

    return await true;
  },
  RESET_TOKEN_TRX: async ({commit},payload) => {
    return await axios({url: 'adm/reset-token-trx', data: payload, method: 'POST'})
      .then(resp => {
        if(resp.data.code == 200) {
          commit("ACCOUNT", resp.data.data)
          //axios.defaults.headers.common['token'] = resp.data.data.token
        }
        return resp
      })
  },
  GET_MORE: async({commit}, args) => {
    commit("LOADING")
    return await axios({url: 'api/account/more' + args, method: 'GET'})
        .then(resp => {
          if(resp.data.code === 200) {
            commit("SET_MORE", resp.data.data)
          }
          return resp
        })
  },
  GET_MEMBERSHIP: async({commit}, args) => {
    commit("LOADING")
    return await axios({url: 'api/account/membership' + args, method: 'GET'})
        .then(resp => {
          if(resp.data.code === 200) {
            commit("SET_MEMBERSHIP", resp.data.data)
          }
          return resp
        })
  },
  GET_KREASIKU: async({commit}, args) => {
    commit("LOADING")
    return await axios({url: 'api/account/kreasiku' + args, method: 'GET'})
        .then(resp => {
          if(resp.data.code === 200) {
            commit("SET_KREASIKU", resp.data.data)
          }
          return resp
        })
  },

}

export const  getters = {
  isAuthenticated: state => (state.account.token) ? true : false,
  account: state => state.account,
  accounts: state => state.accounts,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  account_session: state => state.account_session,
  resp: state => state.resp,
  columns: state => state.columns,
  more: state => state.more,
  membership: state => state.membership,
  kreasiku: state => state.kreasiku
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,

}
