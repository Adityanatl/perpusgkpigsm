
export const state = {
  loading: false,
  strategic: {},
  strategics:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  STRATEGIC: (state, payload) => {
    state.strategic = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.strategic_session = payload
    state.loading = false
  },
  SET_STRATEGICS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.strategics = payload.data
  },
    SET_STRATEGIC: (state, payload) => {
        state.loading = false
        state.strategic = payload.data
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
    POST_STRATEGIC: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/strategic', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_STRATEGIC", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_STRATEGIC: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/strategic/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_STRATEGIC", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },

  GET_STRATEGICS: async({commit}, args) => {
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
    return await axios({url: 'api/strategic?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_STRATEGICS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/strategic/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_STRATEGIC: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/strategic/'+cutomerId, method: 'DELETE'})
       .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_RESP", resp.data)

      }
      return resp
    })
  },
    GET_STRATEGIC: async({commit},cutomerId) => {
        commit("LOADING")
        return await axios({url: 'api/strategic/'+cutomerId, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_STRATEGIC", resp.data)

                }
                return resp
            })
    },
    DOWNLOAD_STRATEGIC: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/strategic/download/'+id, method: 'GET', responseType: 'arraybuffer'})
            .then(resp => {
                let blob = new Blob([resp.data], { type: 'application/pdf' }),
                    url = window.URL.createObjectURL(blob)
                window.open(url)
            })
    },
}

export const getters = {
  strategic: state => state.strategic,
  strategics: state => state.strategics,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  columns: state => state.columns
}
