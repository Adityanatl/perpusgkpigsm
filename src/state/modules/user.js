const state = {
  loading: false,
  user: {},
  users:[],
  columns: [],
  paginate: {total:0},
  resp: {},
  user_session: {
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
  USER: (state, payload) => {
    state.user = payload

//    payload.refreshEnabled = true;
//    payload.token = {
//              token:payload.token,
//              exp: (new Date().getTime() / 1000) * 60 * 60
//            }
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.user_session = payload
    state.loading = false
  },
  SET_USERS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.users = payload.data
  },
  SET_COLUMNS: (state, payload) => {
    state.loading = false
    state.columns = payload
  },
  SET_RESP: (state, payload) => {
    state.loading = false
    state.resp = payload
  },

}

const actions = {
  LOGIN: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/login', data: payload, method: 'POST'})
      .then(resp => {
        if(resp.data.code == 200) {
          commit("USER", resp.data.data)
          axios.defaults.headers.common['Authorization'] = 'jwt ' + resp.data.data.token
        }
        return resp
      })
  },
  LOGOUT: async ({commit}) => {
    axios({url: 'api/logout', data: {}, method: 'POST'})
    commit("USER", {...state.user, ...{token: null}})
    localStorage.removeItem('modeling')
    delete axios.defaults.headers.common['Authorization']

    return await true;
  },
  RESET_TOKEN_TRX: async ({commit},payload) => {
    return await axios({url: 'adm/reset-token-trx', data: payload, method: 'POST'})
      .then(resp => {
        if(resp.data.code == 200) {
          commit("USER", resp.data.data)
          //axios.defaults.headers.common['token'] = resp.data.data.token
        }
        return resp
      })
  },
  GET_USERS: async({commit}, args) => {
    commit("LOADING")
    var params = queryString.stringify({
      ...{
          limit: 10,
          page: 1,
          name: null,
          address: null,
          contact_phone: null,
          company: null,
          tarif: null,
          email: null,
          upline_id: null,
          sort: '-id'
      }, ...args}
    )
    return await axios({url: 'adm/user/list?' + params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_USERS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'adm/user/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_USER: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'adm/user/'+cutomerId+'/delete'+campaignId, method: 'DELETE'})
       .then(resp => {
            if(resp.data.code == 200) {
                    swal({
                        type: 'success',
                        title: 'Status...',
                        text: resp.data.message
                    })
                commit("SET_RESP", resp.data)

      }
      return resp
    })


  },

}

const getters = {
  isAuthenticated: state => (state.user.token) ? true : false,
  user: state => state.user,
  users: state => state.users,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  user_session: state => state.user_session,
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
