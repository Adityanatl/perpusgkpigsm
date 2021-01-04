
export const state = {
  loading: false,
  ruang_lingkup: {},
  ruang_lingkups:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  RUANG_LINGKUP: (state, payload) => {
    state.ruang_lingkup = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.ruang_lingkup_session = payload
    state.loading = false
  },
  SET_RUANG_LINGKUPS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.ruang_lingkups = payload.data
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

  GET_RUANG_LINGKUPS: async({commit}, args) => {
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
    return await axios({url: 'api/ruang_lingkup?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_RUANG_LINGKUPS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/ruang_lingkup/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_RUANG_LINGKUP: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/ruang_lingkup/'+cutomerId, method: 'DELETE'})
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
  ruang_lingkup: state => state.ruang_lingkup,
  ruang_lingkups: state => state.ruang_lingkups,
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
