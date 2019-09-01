import axios from '@/store/axios.js'

const state = {
  rankWinner: [],
  rankLoser: []
}

const getters = {
  getWinRank: state => state.winRank,
  getLoseRank: state => state.loseRank
}

const mutations = {
  'SET_RANKWINNER': function (state, data) {
    state.rankWinner = data
  },
  'SET_RANKLOSER': function (state, data) {
    state.rankLoser = data
  }
}

const actions = {
  getRankData: async function (context) {
    const result = await axios.get('/api/rank')
    if (result.data) {
      context.commit('SET_RANKWINNER', result.data.filter(target => target.Result))
      context.commit('SET_RANKLOSER', result.data.filter(target => !target.Result))
    }
  },
  upsertRank: async function (context, data) {
    console.log(context.rootState)
    await axios.post(`/api/rank/${context.rootState.competition.username}`, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}