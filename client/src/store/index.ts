import Vue from 'vue'
import Vuex from 'vuex'
import * as vsm from 'vuex-smart-module'
import player from './player'
import party from './party'
import battle from './battle'

Vue.use(Vuex)

const rootModule = new vsm.Module({
  modules: {
    player,
    party,
    battle,
  },
})

export default vsm.createStore(rootModule, {
  strict: process.env.NODE_ENV !== 'production',
})
