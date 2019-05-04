<template lang="pug">
.page-base-shop(:class="rootClass")
  menu-list.menu(:links="links")
</template>

<script lang="ts">
import Vue from 'vue';
import MenuList from '@/components/base/menu-list.vue';
export default Vue.extend({
  components: {
    MenuList,
  },
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
      links: [
        { to: { name: 'game:base:shop:buy' }, label: 'アイテムを買う' },
        { to: '', label: 'アイテムを売る' },
        { to: { name: 'game:base' }, label: 'ショップを出る' },
      ],
    };
  },
  async mounted() {
    await this.$waitFrame();
    this.rootClass._enter = false;
  },
  async beforeRouteLeave(to, from, next) {
    this.rootClass._leaving = true;
    await this.$wait(200);
    next();
  },
});
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

.page-base-shop
  &
    display flex
    align-items center

  .menu
    transform none
    +enter-leave(transform)
      transform translateX(-100%)
</style>
