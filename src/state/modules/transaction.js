
export const state = {
  loading: false,
  transaction: {},
  transactions:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  TRANSACTION: (state, payload) => {
    state.transaction = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.transaction_session = payload
    state.loading = false
  },
  SET_TRANSACTIONS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.transactions = payload.data
  },
    SET_TRANSACTION: (state, payload) => {
      console.log('SET_TRANSACTION ',payload)
        state.loading = false
        state.transaction = payload
        console.log('SET_TRANSACTION2 ',state.transaction)
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
    POST_TRANSACTION: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/transaction', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_TRANSACTION", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_TRANSACTION: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/transaction/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_TRANSACTION", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },

  GET_TRANSACTIONS: async({commit}, args) => {
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
    return await axios({url: 'api/transaction?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_TRANSACTIONS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/transaction/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_TRANSACTION: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/transaction/'+cutomerId, method: 'DELETE'})
       .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_RESP", resp.data)

      }
      return resp
    })
  },
    GET_TRANSACTION: async({commit},cutomerId) => {
        commit("LOADING")
        return await axios({url: 'api/transaction/'+cutomerId, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_TRANSACTION", resp.data)

                }
                return resp
            })
    },
    DOWNLOAD_TRANSACTION: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/transaction/download/'+id, method: 'GET', responseType: 'arraybuffer'})
            .then(resp => {
                let blob = new Blob([resp.data], { type: 'application/pdf' }),
                    url = window.URL.createObjectURL(blob)
                window.open(url)
            })
    },
}

export const getters = {
  transaction: state => state.transaction,
  transactions: state => state.transactions,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  columns: state => state.columns
}
