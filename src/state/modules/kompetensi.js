
export const state = {
  loading: false,
  kompetensi: {},
  kompetensis:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  KOMPETENSI: (state, payload) => {
    state.kompetensi = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.kompetensi_session = payload
    state.loading = false
  },
  SET_KOMPETENSIS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.kompetensis = payload.data
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
  POST_KOMPETENSI: async({commit}, payload) => {
    commit("LOADING")
    return await axios({url: 'api/kompetensi', data: payload, method: 'POST'})
        .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_KOMPETENSI", resp.data.data)
            } else {
                commit("SET_RESP", resp.data)
            }
            return resp
        })
},
  GET_KOMPETENSIS: async({commit}, args) => {
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
    return await axios({url: 'api/kompetensi?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_KOMPETENSIS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/kompetensi/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_KOMPETENSI: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/kompetensi/'+cutomerId, method: 'DELETE'})
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
  kompetensi: state => state.kompetensi,
  kompetensis: state => state.kompetensis,
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
