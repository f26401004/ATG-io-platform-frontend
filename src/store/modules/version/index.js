const state = {
  current: 1.0,
  prev: []
}

const getters = {
  getVersion: state => state.current,
  getPrevVersion: state => state.prev
}

const mutations = {
  changeVersion: (state, target) => {
    if (!state.prev.includes(target) || typeof target !== Number) {
      return
    }
    state.current = target
  }
}

const actions = {
  fetchRemoteVersion: async () => {
    // TODO: fetch remote version
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}