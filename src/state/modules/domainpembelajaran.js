
export const state = {
  loading: false,
  domain_pembelajaran: {},
  domain_pembelajarans:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  DOMAIN_PEMBELAJARAN: (state, payload) => {
    state.domain_pembelajaran = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.domain_pembelajaran_session = payload
    state.loading = false
  },
  SET_DOMAIN_PEMBELAJARANS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.domain_pembelajarans = payload.data
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

export const actions = {
  POST_DOMAIN_PEMBELAJARAN: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/domain_pembelajaran', data: payload, method: 'POST'})
        .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_DOMAIN_PEMBELAJARAN", resp.data.data)
            } else {
                commit("SET_RESP", resp.data)
            }
            return resp
        })
},
  GET_DOMAIN_PEMBELAJARANS: async({commit}, args) => {
    commit("LOADING")
      console.log('args ',args)
    var params = queryString.stringify({
      ...{
          limit: 10,
          page: 1,
          name: null,
          domain_pembelajaran: null,
          description: null,
          sistem_belajar: null,
          jenjang_id: null,
          kunci_pembelajaran: null,
          profil_pembelajaran: null,
          sort: '-id'
      }, ...args}
    )
    return await axios({url: 'api/domain_pembelajaran?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_DOMAIN_PEMBELAJARANS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/domain_pembelajaran/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_DOMAIN_PEMBELAJARAN: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/domain_pembelajaran/'+cutomerId, method: 'DELETE'})
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

export const getters = {
  domain_pembelajaran: state => state.domain_pembelajaran,
  domain_pembelajarans: state => state.domain_pembelajarans,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  columns: state => state.columns
}

// export default {
//   // namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
//
// }
