import * as api from '../../api'
import * as types from '../mutation-types'
import { storage } from '../../utils'

const state = {
  inputs: {
    username: '',
    password: '',
    tabletPassword: ''
  },
  user: {
    uid: '',
    isLoggedIn: false,
    sessionId: '',
    type: 'retail' // dealer or retail
  }
}

const getters = {
  inputs: state => state.inputs,
  sessionId: state => state.user.sessionId,
  type: state => state.user.type
}

const actions = {
  login ({ state, commit, rootState }) {
    return api.login({
      username: state.inputs.username,
      password: state.inputs.password,
      tabletPassword: state.inputs.tabletPassword
    })
    .then(loginResponse => {
      commit(types.RECEIVE_LOGIN_RESPONSE, loginResponse)

      // Actionでstateは変更してはいけないけれど、Viewで戻り値が必要なため
      const isLoggedIn = !!state.user.sessionId
      return Promise.resolve(isLoggedIn)
    })
  },

  logout ({ commit }) {
    commit(types.LOGOUT)
    return Promise.resolve()
  }
}

const mutations = {
  [types.RECEIVE_LOGIN_RESPONSE] (state, { sessionId, message }) {
    console.log('sessionId, message:', sessionId, message)
    state.user.uid = state.inputs.username
    state.user.sessionId = sessionId
    state.user.isLoggedIn = !!sessionId
    storage.set('isLoggedIn', !!sessionId) // routerの認証にてstateを呼び出せないため

    // Clear passwords on inputs
    state.inputs.password = ''
    state.inputs.tabletPassword = ''
  },

  [types.LOGOUT] (state) {
    state.user.uid = ''
    state.user.sessionId = ''
    state.user.isLoggedIn = false
    storage.set('isLoggedIn', false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
