<template lang="pug">
.game-base-index
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
        { to: '', label: 'マーケット' },
        { to: '/game/base/shop', label: 'アイテム屋' },
        { to: '', label: '武具屋' },
        { to: '', label: 'ギルド' },
        { to: '/game/field', label: '外に出る' },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
.game-base-index
  &
    display flex
    align-items center

  .menu
    transform none
    +enter-leave(transform)
      transform translateX(-100%)
</style>

