import * as types from '../mutation-types'
// import { storage } from '../../utils'

const state = {
  target: {
    isVisible: false,
    tab: 0
  },
  agent: {
    isVisible: false,
    tab: 0
  },
  responsible: {
    isVisible: false,
    tab: 0
  },
  salesbox: {
    isVisible: false,
    tab: 0
  },
  cross: {
    isVisible: false,
    tab: 0
  }
}

const getters = {
  target: state => state.target,
  agent: state => state.agent,
  responsible: state => state.responsible,
  salesbox: state => state.salesbox,
  cross: state => state.cross
}

const actions = {
  togglePopupVisible ({ commit }, type) {
    commit(types.TOGGLE_POPUP_VISIBLE, type)
  },

  changePopupTab ({ commit }, vals) {
    commit(types.CHANGE_POPUP_TAB, vals)
  },

  changeItemCount ({ commit }, type) {
    commit(types.CHANGE_ITEM_COUNT, type)
  }
}

const mutations = {
  [types.TOGGLE_POPUP_VISIBLE] (state, type) {
    state[type].isVisible = !state[type].isVisible
  },
  [types.CHANGE_ITEM_COUNT] (state, type) {
    state[type].count = state[type].count + 1
  },
  [types.CHANGE_POPUP_TAB] (state, { type, index }) {
    state[type].tab = index
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
