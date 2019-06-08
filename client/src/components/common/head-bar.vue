<template lang="pug">
.head-bar
  .basetypeicon: div {{info.type}}
  .areaname {{info.name}}
  .datetimeindicator
    .display
      div
        span.month XXの月
        span.date YY日
      div
        span.time ZZ時
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    info: { type: Object, required: true },
  },
})
</script>


<style lang="stylus" scoped>
@require "~@/styles/include"

.head-bar
  &
    border-bottom 3px solid $cl-dark
    position relative
    height 6rem
    display flex
    align-items center
    background-color $cl-light
    z-index 100

  .basetypeicon
    position absolute
    top 0
    left 0
    width 10rem
    height 8rem
    transform skewX(-20deg)
    border 3px solid $cl-dark
    border-top none
    border-left none
    background-color $cl-light
    display flex
    align-items center
    justify-content center
    > *
      transform skewX(20deg)

  .areaname
    margin-left 14rem
    font-size 2rem

  .datetimeindicator
    position absolute
    top -4rem
    right -4rem
    width 16rem
    height 16rem
    border 3px solid $cl-dark
    border-radius 50%
    background-color $cl-light
    display flex
    align-items center
    justify-content center
</style>

