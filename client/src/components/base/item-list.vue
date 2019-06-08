<template lang="pug">
.item-list
  .item(v-for="item in items") {{item.label}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: { type: Array, default: () => [] },
  },
})
</script>


<style lang="stylus" scoped>
@require "~@/styles/include"

.item-list
  .item
    padding 1rem
    border 3px solid $cl-dark
    &:not(:first-child)
      border-top none
</style>

