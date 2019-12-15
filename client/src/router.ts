import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layouts = {
  default: () => import('./layouts/default.vue'),
  game: () => import('./layouts/game.vue'),
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: layouts.default,
      children: [{ path: '', component: () => import('./pages/index.vue') }],
    },
    {
      path: '/game',
      component: layouts.game,
      children: [
        {
          path: 'base',
          component: () => import('./pages/game/base.vue'),
          children: [
            {
              path: '',
              component: () => import('./pages/game/base/index.vue'),
            },
            {
              path: 'shop',
              component: () => import('./pages/game/base/shop.vue'),
            },
            {
              path: 'shop/buy',
              component: () => import('./pages/game/base/shop-buy.vue'),
            },
          ],
        },
        {
          path: 'field',
          component: () => import('./pages/game/field.vue'),
          children: [
            { path: '', component: () => import('./pages/game/field/map.vue') },
            {
              path: 'battle',
              component: () => import('./pages/game/field/battle.vue'),
            },
          ],
        },
      ],
    },
    { path: '*', component: () => import('./pages/404.vue') },
  ],
})

export default router
