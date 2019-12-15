<template lang="pug">
.menu-list
  router-link.link(v-for="(link, index) in links", :to="link.to", :key="index")
    .label {{link.label}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    links: { type: Array, required: true },
  },
})
</script>

<style lang="stylus" scoped>
.menu-list
  &
    display flex
    flex-direction column
    align-items stretch
    width 30rem
    margin-left -5rem

  .link
    border 3px solid $cl-dark
    border-left none
    // border-radius 0 0 9px 0
    display flex
    align-items center
    height 6rem
    margin-top -3px
    position relative
    left -1.5rem
    transform skewX(20deg)
    padding-left 8.5rem
    transition .2s $ease-out-quint
    transition-property transform
    +hover()
      transform skew(20deg) translateX(5rem)

  .label
    transform skewX(-20deg)
</style>
