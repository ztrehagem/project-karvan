import Vue from 'vue';
import './styles/global.styl';
import './plugins/firebase';
import './plugins/device';
import './plugins/wait';
import router from './router';
import store from './store';
import App from './app.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
