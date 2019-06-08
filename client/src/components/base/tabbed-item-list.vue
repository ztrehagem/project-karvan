<template lang="pug">
.tabbed-item-list
  .tabs
    button.tab(v-for="(tab, index) in tabbedItems", type="button", @click="tabIndex = index", :class="{_current: tabIndex == index}") {{tab.label}}
  item-list.items(:items="tabbedItems[tabIndex].items")
</template>

<script lang="ts">
import Vue from 'vue'
import ItemList from '@/components/base/item-list.vue'
export default Vue.extend({
  components: {
    ItemList,
  },
  props: {
    tabbedItems: { type: Array, required: true },
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
})
</script>


<style lang="stylus" scoped>
.tabbed-item-list
  &
    height 100%
    display flex
    flex-direction column

  .tabs
    flex 0 0 auto
    display flex
    margin-bottom 1rem
    padding 0 1rem
    position relative
    &::after
      display block
      content ""
      position absolute
      bottom 0
      left 0
      width 100%
      border-bottom 3px solid $cl-dark
      z-index 3

  .tab
    border-left 3px solid $cl-dark
    background-color $cl-light
    padding 1rem 2.4rem 1rem 1.5rem
    position relative
    overflow hidden
    z-index 2
    &::before
      display block
      content ""
      position absolute
      top 0
      right 0.3rem
      width 100%
      height 100%
      border 3px solid $cl-dark
      border-bottom none
      border-left none
      transform skewX(10deg)
      z-index 1
    &._current
      z-index 4


  .items
    flex 0 1 100%
    overflow-y scroll
    // &::-webkit-scrollbar
    //   display none
</style>
