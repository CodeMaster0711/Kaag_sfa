import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import auth from './modules/auth'
import schedule from './modules/schedule'
import popup from './modules/popup'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    schedule,
    popup
  }
})
