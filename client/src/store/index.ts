import Vue from 'vue'
import Vuex from 'vuex'
import hoge from './hoge'

Vue.use(Vuex)

export default new Vuex.Store<{}>({
  modules: {
    hoge,
  },
})
