import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '@/store/getters.js'
// module import
import version from '@/store/modules/version'
import competition from '@/store/modules/competition'
import rank from '@/store/modules/rank'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    version,
    competition,
    rank
  },
  strict: true
})