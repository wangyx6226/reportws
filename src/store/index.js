import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import getters from './getters'
import actions from './actions'
import permission from './permission'
import createLogger from 'vuex/dist/logger'
import tagView from './modules/tagView'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    permission,
    tagView
  },
  plugins: [createLogger()]
})