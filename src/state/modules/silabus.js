
export const state = {
  loading: false,
  silabus: {},
  silabuss:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  SILABUS: (state, payload) => {
    state.silabus = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.silabus_session = payload
    state.loading = false
  },
  SET_SILABUSS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.silabuss = payload.data
  },
    SET_SILABUS: (state, payload) => {
        state.loading = false
        state.silabus = payload.data
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
    POST_SILABUS: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/silabus', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_SILABUS", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },

  GET_SILABUSS: async({commit}, args) => {
    commit("LOADING")
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
    return await axios({url: 'api/silabus?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_SILABUSS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/silabus/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
    PUT_SILABUS: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/silabus/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_SILABUS", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
  DELETE_SILABUS: async({commit},dataId) => {
    commit("LOADING")
    return await axios({url: 'api/silabus/'+dataId, method: 'DELETE'})
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
    GET_SILABUS: async({commit},cutomerId) => {
        commit("LOADING")
        return await axios({url: 'api/silabus/'+cutomerId, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_SILABUS", resp.data)

                }
                return resp
            })
    },
    DOWNLOAD_SILABUS: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/silabus/download/'+id, method: 'GET', responseType: 'arraybuffer'})
            .then(resp => {
                let blob = new Blob([resp.data], { type: 'application/pdf' }),
                    url = window.URL.createObjectURL(blob)
                window.open(url)
            })
    },

}

export const getters = {
  silabus: state => state.silabus,
  silabuss: state => state.silabuss,
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
