
export const state = {
  loading: false,
  kd: {},
  kds:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  KD: (state, payload) => {
    state.kd = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.kd_session = payload
    state.loading = false
  },
  SET_KDS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.kds = payload.data
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
  POST_KD: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/kd', data: payload, method: 'POST'})
        .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_KD", resp.data.data)
            } else {
                commit("SET_RESP", resp.data)
            }
            return resp
        })
},
  GET_KDS: async({commit}, args) => {
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
    return await axios({url: 'api/kd?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_KDS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/kd/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_KD: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/kd/'+cutomerId, method: 'DELETE'})
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
  kd: state => state.kd,
  kds: state => state.kds,
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
