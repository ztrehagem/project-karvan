import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import * as $consts from '@/consts'

Vue.use(Vuex)

export interface PlayerState {
  ap: number
}

export const store: Module<PlayerState, {}> = {
  namespaced: true,
  state: {
    ap: $consts.AP_MAX,
  },
  mutations: {
    consumeAp(state, amount) {
      if (state.ap < amount) throw new Error('not enough AP')
      state.ap -= amount
    },
  },
  actions: {
  },
}

export default store
