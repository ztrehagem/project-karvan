<template lang="pug">
.game-base-shop-buy
  .heading アイテムを買う
  TabbedItemList.list(:tabbed-items="items")
  .foot
    router-link.back(to="/game/base/shop")
      i.material-icons navigate_before
      span 戻る
</template>

<script lang="ts">
import Vue from 'vue'
import TabbedItemList from '@/components/TabbedItemList.vue'
import EnterLeave from '@/mixins/enter-leave'
export default Vue.extend({
  mixins: [EnterLeave],
  components: {
    TabbedItemList,
  },
  data() {
    return {
      items: [
        {
          label: '薬',
          items: [...Array(16)].map(() => ({ label: 'ポーション' })),
        },
        {
          label: '道具',
          items: [{ label: 'ロープ' }, { label: '丈夫なロープ' }],
        },
        {
          label: '素材',
          items: [{ label: '革' }],
        },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
$pad = 5rem

.game-base-shop-buy
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
