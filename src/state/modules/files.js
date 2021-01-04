import Swal from "sweetalert2";

export const state = {
  loading: false,
  file: {},
  files:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  FILE: (state, payload) => {
    state.file = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.file_session = payload
    state.loading = false
  },
  SET_FILES: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.files = payload.data
  },
    SET_FILE: (state, payload) => {
        state.loading = false
        state.file = payload.data
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
    POST_FILE: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/file', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_FILE", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_FILE: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/files/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_FILE", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    GET_FILE: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/files/'+id, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_FILE", resp.data)
                }
                return resp
            })


    },


    GET_FILES: async({commit}, args) => {
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
    return await axios({url: 'api/files?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_FILES", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/files/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_FILE: async({commit},id) => {
    commit("LOADING")
    return await axios({url: 'api/files/'+id, method: 'DELETE'})
       .then(resp => {
           if(resp.data.code == 200) {
               Swal.fire("Deleted!", "File berhasil dihapus.", "success");
               commit("SET_RESP", resp.data)
           }
            return resp
       })
  },

}

export const getters = {
  file: state => state.file,
  files: state => state.files,
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
