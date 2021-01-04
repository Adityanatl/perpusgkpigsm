import Swal from "sweetalert2";

export const state = {
  loading: false,
  rubrik: {},
  rubriks:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  RUBRIK: (state, payload) => {
    state.rubrik = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.rubrik_session = payload
    state.loading = false
  },
  SET_RUBRIKS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.rubriks = payload.data
  },
    SET_RUBRIK: (state, payload) => {
        state.loading = false
        state.rubrik = payload.data
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
    POST_RUBRIK: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/rubrik', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_RUBRIK", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_RUBRIK: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/rubrik/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_RUBRIK", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    GET_RUBRIK: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/rubrik/'+id, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_RUBRIK", resp.data)
                }
                return resp
            })


    },


    GET_RUBRIKS: async({commit}, args) => {
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
    return await axios({url: 'api/rubrik?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_RUBRIKS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/rubrik/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_RUBRIK: async({commit},id) => {
    commit("LOADING")
    return await axios({url: 'api/rubrik/'+id, method: 'DELETE'})
       .then(resp => {
           if(resp.data.code == 200) {
               Swal.fire("Deleted!", "Rubrik berhasil dihapus.", "success");
               commit("SET_RESP", resp.data)
           }
            return resp
       })
  },

}

export const getters = {
  rubrik: state => state.rubrik,
  rubriks: state => state.rubriks,
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
