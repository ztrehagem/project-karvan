import Vue from 'vue'
import './styles/global.styl'
import './plugins/firebase'
import './plugins/device'
import BackLink from './plugins/back-link.vue'
import router from './router'
import store from './store'
import App from './app.vue'
import './registerServiceWorker'
import * as consts from './consts'

Vue.config.productionTip = false

Vue.prototype.$consts = consts
Vue.component('back-link', BackLink)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
