
export const state = {
  loading: false,
  join_telegram: {},
  join_telegrams:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  JOIN_TELEGRAM: (state, payload) => {
    state.join_telegram = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.join_telegram_session = payload
    state.loading = false
  },
  SET_JOIN_TELEGRAMS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.join_telegrams = payload.data
  },
    SET_JOIN_TELEGRAM: (state, payload) => {
        state.loading = false
        state.join_telegram = payload.data
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
    POST_JOIN_TELEGRAM: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/join_telegram', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_JOIN_TELEGRAM", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_JOIN_TELEGRAM: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/join_telegram/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_JOIN_TELEGRAM", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },

  GET_JOIN_TELEGRAMS: async({commit}, args) => {
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
    return await axios({url: 'api/join_telegram?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_JOIN_TELEGRAMS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/join_telegram/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_JOIN_TELEGRAM: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/join_telegram/'+cutomerId, method: 'DELETE'})
       .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_RESP", resp.data)

      }
      return resp
    })
  },
    GET_JOIN_TELEGRAM: async({commit},cutomerId) => {
        commit("LOADING")
        return await axios({url: 'api/join_telegram/'+cutomerId, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_JOIN_TELEGRAM", resp.data)

                }
                return resp
            })
    },
    DOWNLOAD_JOIN_TELEGRAM: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/join_telegram/download/'+id, method: 'GET', responseType: 'arraybuffer'})
            .then(resp => {
                let blob = new Blob([resp.data], { type: 'application/pdf' }),
                    url = window.URL.createObjectURL(blob)
                window.open(url)
            })
    },
}

export const getters = {
  join_telegram: state => state.join_telegram,
  join_telegrams: state => state.join_telegrams,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  columns: state => state.columns
}
