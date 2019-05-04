<template lang="pug">
.head-bar
  .basetypeicon 港湾都市
  .areaname 港町ポルタメリア(仮)
  .datetimeindicator
    .display
      div
        span.month XXの月
        span.date YY日
      div
        span.time ZZ時
</template>

<style lang="stylus" scoped>
@require "~@/styles/include"

.head-bar
  &
    border-bottom 3px solid $cl-dark
    position relative
    height 6rem
    display flex
    align-items center

  .basetypeicon
    position absolute
    top 0
    left 0
    width 12rem
    height 8rem
    transform skewX(-20deg)
    border 3px solid $cl-dark
    border-top none
    border-left none
    background-color $cl-light

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

