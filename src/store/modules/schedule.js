// import * as api from '../../api'
import * as types from '../mutation-types'
// import { storage } from '../../utils'

const state = {
  viewSettings: {
    type: 'plan-result', // plan-result, plan, resuilt
    period: 'week', // week, month, all
    holiday: false
  }
}

const getters = {
  type: state => state.type,
  period: state => state.period,
  holiday: state => state.holiday
}

const actions = {
  changeView ({ state, commit, rootState }, values) {
    commit(types.UPDATE_CALENDAR_VIEW, values)
  }
}

const mutations = {
  [types.UPDATE_CALENDAR_VIEW] (state, { type, period, holiday }) {
    if (type) {
      state.viewSettings.type = type
    }

    if (period) {
      state.viewSettings.period = period
    }

    if (holiday) {
      state.viewSettings.holiday = holiday
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
