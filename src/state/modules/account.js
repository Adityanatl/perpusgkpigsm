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
  }
}
const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  ACCOUNT: (state, payload) => {
    state.account = payload
    state.loading = false
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

}

const actions = {
  LOGIN: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/account/login', data: payload, method: 'POST'})
      .then(resp => {
        if(resp.data.code == 200) {
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

}

const getters = {
  isAuthenticated: state => (state.account.token) ? true : false,
  account: state => state.account,
  accounts: state => state.accounts,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  account_session: state => state.account_session,
  resp: state => state.resp,
  columns: state => state.columns
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,

}
