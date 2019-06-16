import Vue from 'vue'
import Vuex from 'vuex'
import player from './player'
import party from './party'
import battle from './battle'

Vue.use(Vuex)

export default new Vuex.Store<{}>({
  modules: {
    player,
    party,
    battle,
  },
})
