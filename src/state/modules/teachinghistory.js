const state = {
  loading: false,
  teaching_history: {},
  teaching_historys:[],
  columns: [],
  paginate: {total:0},
  resp: {},
}
export const  mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  TEACING_HISTORY: (state, payload) => {
    state.teaching_history = payload
    state.loading = false
  },
  SET_TEACING_HISTORYS: (state, payload) => {
    state.loading = false
    state.paginate = payload.pagination
    state.teaching_historys = payload.data
  },
  SET_RESP: (state, payload) => {
    state.loading = false
    state.resp = payload
  },

}

export const actions = {
  GET_TEACHING_HISTORY_ONLYONE: async({commit}, args) => {
    commit("LOADING")
    return await axios({url: 'api/teaching_history/onlyone' + args, method: 'GET'})
      .then(resp => {
        if(resp.data.code === 200) {
          commit("TEACING_HISTORY", resp.data.data)
        }
        return resp
      })
  },

}

export const  getters = {
  teaching_history: state => state.teaching_history,
  teaching_historys: state => state.teaching_historys,
  paginate: state => state.paginate,
  isLoading: state => state.loading,
  resp: state => state.resp,
  columns: state => state.columns,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,

}
