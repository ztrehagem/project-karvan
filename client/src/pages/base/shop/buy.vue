<template lang="pug">
.page-base-shop-buy(:class="rootClass")
  .heading アイテムを買う
  tabbed-item-list.list(:tabbed-items="items")
  .foot
    router-link.back(:to="{ name: 'game:base:shop' }")
      i.material-icons navigate_before
      span 戻る
</template>

<script lang="ts">
import Vue from 'vue';
import TabbedItemList from '@/components/base/tabbed-item-list.vue';
export default Vue.extend({
  components: {
    TabbedItemList,
  },
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
      items: [
        {
          label: '薬',
          items: [
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
            { label: 'ポーション' },
          ],
        },
        {
          label: '道具',
          items: [
            { label: 'ロープ' },
            { label: '丈夫なロープ' },
          ],
        },
        {
          label: '素材',
          items: [
            { label: '革' },
          ],
        },
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

$pad = 5rem

.page-base-shop-buy
  &
    padding $pad
    display flex
    flex-direction column
    height 100%

  .heading
    flex 0 0 auto
    font-size 2rem
    transform none
    +enter-leave(transform)
      transform "translateY(calc(-100% - %s))" % $pad

  .list
    flex 0 1 100%
    padding 3rem 0
    transform none
    +enter-leave(transform)
      transform "translateX(calc(100% + %s))" % $pad

  .foot
    flex 0 0 auto
    margin-top auto
    transform none
    +enter-leave(transform)
      transform "translateY(calc(100% + %s))" % $pad

  .back
    display inline-flex
    align-items center
    padding 1rem
    border 3px solid $cl-dark
    transform skewX(-20deg)
    > *
      transform skewX(20deg)
</style>
