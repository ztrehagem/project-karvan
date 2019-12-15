import { PluginObject } from 'vue'
import BackLink from './BackLink.vue'

export default {
  install(Vue, options = {}) {
    Vue.component('back-link', BackLink)
  },
} as PluginObject<{}>
