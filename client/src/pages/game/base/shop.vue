<template lang="pug">
.game-base-shop
  menu-list.menu(:links="links", back="ショップを出る")
</template>

<script lang="ts">
import Vue from 'vue';
import MenuList from '@/components/base/menu-list.vue';
import EnterLeave from '@/mixins/enter-leave';
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
        { to: { name: 'game:base:shop:buy' }, label: 'アイテムを買う' },
        { to: '', label: 'アイテムを売る' },
      ],
    };
  },
});
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

.game-base-shop
  &
    display flex
    align-items center

  .menu
    transform none
    +enter-leave(transform)
      transform translateX(-100%)
</style>
