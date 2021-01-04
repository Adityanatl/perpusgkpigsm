
export const state = {
  loading: false,
  materi: {},
  materis:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  SET_MATERI: (state, payload) => {
    state.materi = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.materi_session = payload
    state.loading = false
  },
  SET_MATERIS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.materis = payload.data
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
    POST_MATERI: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/materi', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_MATERI", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
  GET_MATERIS: async({commit}, args) => {
    commit("LOADING")
      console.log('args ',args)
    var params = queryString.stringify({
      ...{
          limit: 10,
          page: 1,
          name: null,
          tingkat_sekolah: null,
          mapel_id: null,
          sort: '-id'
      }, ...args}
    )
    return await axios({url: 'api/materi?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_MATERIS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/materi/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_MATERI: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/materi/'+cutomerId, method: 'DELETE'})
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
  materi: state => state.materi,
  materis: state => state.materis,
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
