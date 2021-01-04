
export const state = {
  loading: false,
  lessonplan: {},
  lessonplans:[],
  columns: [],
  paginate: {total:0},
  resp: {}
}
export const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  LESSONPLAN: (state, payload) => {
    state.lessonplan = payload
    state.loading = false
  },
  LOGIN: (state, payload) => {
    state.lessonplan_session = payload
    state.loading = false
  },
  SET_LESSONPLANS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.lessonplans = payload.data
  },
    SET_LESSONPLAN: (state, payload) => {
        state.loading = false
        state.lessonplan = payload.data
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
    POST_LESSONPLAN: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/lesson_plan', data: payload, method: 'POST'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_LESSONPLAN", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    PUT_LESSONPLAN: async({commit}, payload) => {
        commit("LOADING")
        return await axios({url: 'api/lesson_plan/'+payload.id, data: payload, method: 'PUT'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_LESSONPLAN", resp.data.data)
                } else {
                    commit("SET_RESP", resp.data)
                }
                return resp
            })
    },
    GET_LESSONPLAN: async({commit},id) => {
        commit("LOADING")
        return await axios({url: 'api/lesson_plan/'+id, method: 'GET'})
            .then(resp => {
                if(resp.data.code == 200) {
                    commit("SET_LESSONPLAN", resp.data)
                }
                return resp
            })


    },

  GET_LESSONPLANS: async({commit}, args) => {
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
    return await axios({url: 'api/lesson_plan?' + args.params, method: 'GET'})
      .then(resp => {
        if(resp.data.status == '200 OK') {
          commit("SET_LESSONPLANS", resp.data)
        }
        return resp
      })
  },
  GET_COLUMNS: async({commit}) => {
    commit("LOADING")
    return await axios({url: 'api/lesson_plan/columns' , method: 'GET'})
      .then(resp => {
        if(resp.data.status == 'success') {
          commit("SET_COLUMNS", resp.data.data)
        }
        return resp
      })
  },
  DELETE_LESSONPLAN: async({commit},cutomerId) => {
    commit("LOADING")
    return await axios({url: 'api/lesson_plan/'+cutomerId, method: 'DELETE'})
       .then(resp => {
            if(resp.data.code == 200) {
                commit("SET_RESP", resp.data)

      }
      return resp
    })


  },

}

export const getters = {
  lessonplan: state => state.lessonplan,
  lessonplans: state => state.lessonplans,
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
