<template lang="pug">
.game-base-shop
  menu-list.menu(:links="links")
</template>

<script lang="ts">
import Vue from 'vue'
import MenuList from '@/components/menu-list.vue'
import EnterLeave from '@/mixins/enter-leave'
export default Vue.extend({
  mixins: [
    EnterLeave,
  ],
  components: {
    MenuList,
  },
  data() {
    return {
      links: [
        { to: '/game/base/shop/buy', label: 'アイテムを買う' },
        { to: '', label: 'アイテムを売る' },
        { to: '/game/base', label: 'ショップを出る' },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
.game-base-shop
  &
    display flex
    align-items center

  .menu
    transform none
    +enter-leave(transform)
      transform translateX(-100%)
</style>
