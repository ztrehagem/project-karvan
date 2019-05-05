import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const layouts = {
  default: () => import('./layouts/default.vue'),
  game: () => import('./layouts/game.vue'),
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: layouts.default,
      children: [
        { path: '', name: 'index', component: () => import('./pages/index.vue') },
      ],
    },
    {
      path: '/game',
      component: layouts.game,
      children: [
        {
          path: 'base', component: () => import('./pages/game/base.vue'), children: [
            { path: '', name: 'game:base', component: () => import('./pages/game/base/index.vue') },
            { path: 'shop', name: 'game:base:shop', component: () => import('./pages/game/base/shop.vue') },
            { path: 'shop/buy', name: 'game:base:shop:buy', component: () => import('./pages/game/base/shop-buy.vue') },
          ],
        },
      ],
    },
    {
      path: '*',
      component: () => import('./pages/404.vue'),
    },
  ],
});

export default router;
