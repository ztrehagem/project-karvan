<template lang="pug">
.page-base-shop-buy(:class="rootClass")
  .heading アイテムを買う
  .list list
  router-link(:to="{ name: 'game:base:shop' }") 戻る
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
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

.page-base-shop-buy
  &
    width 100%
    height 100%
    transform none
    +enter-leave(transform)
      transform translateY(100%)
</style>
