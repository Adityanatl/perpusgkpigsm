
export const state = {
  loading: false,
  product: {},
  products:[],
  columns: [],
  paginate: {total:0},
  resp: {},
  cart: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  PRODUCT: (state, payload) => {
    state.product = payload
    state.loading = false
  },
  SET_PRODUCTS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.products = payload.data
  },
  SET_RESP: (state, payload) => {
    state.loading = false
    state.resp = payload
  },
  UPDATE_CART:(state, payload) => {
    state.cart = payload
  },

}

export const actions = {
  UPDATE_PRODUCT_CART: ({commit}, args) => {
    commit("UPDATE_CART", args)
    },
  GET_PRODUCTS: async({commit}, args) => {
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
    return await axios({url: 'api/product?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_PRODUCTS", resp.data)
        }
        return resp
      })
  },

}

export const getters = {
  product: state => state.product,
  products: state => state.products,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  cart: state => state.cart,
  columns: state => state.columns
}
