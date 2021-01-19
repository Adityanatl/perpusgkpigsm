
export const state = {
  loading: false,
  payment_methode: {},
  payment_methodes:[],
  columns: [],
  paginate: {total:0},
  resp: {},
  cart: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  PAYMENT_METHODE: (state, payload) => {
    state.payment_methode = payload
    state.loading = false
  },
  SET_PAYMENT_METHODES: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.payment_methodes = payload.data
  },
  SET_RESP: (state, payload) => {
    state.loading = false
    state.resp = payload
  },

}

export const actions = {
  GET_PAYMENT_METHODES: async({commit}, args) => {
    commit("LOADING")
      console.log('args ',args)
    var params = queryString.stringify({
      ...{
          limit: 10,
          page: 1,
          name: null,
          sort: '-id'
      }, ...args}
    )
    return await axios({url: 'api/payment_methode?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_PAYMENT_METHODES", resp.data)
        }
        return resp
      })
  },

}

export const getters = {
  payment_methode: state => state.payment_methode,
  payment_methodes: state => state.payment_methodes,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  cart: state => state.cart,
  columns: state => state.columns
}
