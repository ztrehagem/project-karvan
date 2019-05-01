import Vue, { VueConstructor } from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const layouts = {
  default: () => import('./layouts/default.vue'),
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: { default: () => import('./pages/index.vue'), layout: layouts.default },
    },
  ],
});

export default router;
