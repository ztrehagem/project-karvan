<template lang="pug">
.character-list
  .list
    .character(v-for="char in characters")
      .name {{char.name}}
      .val {{char.hp}}&thinsp;/&thinsp;{{char.hpMax}}
      .bar.-hp
        .barval(:style="`transform: scaleX(${char.hp / char.hpMax})`")
      .val {{char.gp}}&thinsp;/&thinsp;{{char.gpMax}}
      .bar.-gp
        .barval(:style="`transform: scaleX(${char.gp / char.gpMax})`")
      .val {{char.mp}}&thinsp;/&thinsp;{{char.mpMax}}
      .bar.-mp
        .barval(:style="`transform: scaleX(${char.mp / char.mpMax})`")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      characters: [
        { name: 'character1', hp: 10, hpMax: 10, gp: 10, gpMax: 10, mp: 10, mpMax: 10 },
        { name: 'character2', hp: 18, hpMax: 20, gp: 9, gpMax: 20, mp: 3, mpMax: 20 },
        { name: 'character3', hp: 21, hpMax: 30, gp: 30, gpMax: 30, mp: 12, mpMax: 30 },
        { name: 'character4', hp: 16, hpMax: 40, gp: 2, gpMax: 40, mp: 39, mpMax: 40 },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
$skew = -10deg

.character-list
  .list
    display flex
    justify-content center
    width 100%
    border-top 3px solid $cl-dark

  .character
    width 25%
    padding 2rem
    border-right 3px solid $cl-dark
    position relative
    transform skewX($skew)
    &:last-child
      border none

  .name
    transform skewX(- $skew)

  .val
    transform skewX(- $skew)
    font-size 1rem
    margin-top 0.5rem
    text-align right
    line-height 1

  .bar
    width 100%
    height 4px
    transform skewX($skew)

  .bar::after
    content ""
    display block
    width 100%
    height 1px

  .barval
    content ""
    display block
    width 100%
    height 100%
    transform-origin center right

  .bar.-hp .barval,
  .bar.-hp::after
    background-color crimson

  .bar.-gp .barval,
  .bar.-gp::after
    background-color mediumseagreen

  .bar.-mp .barval,
  .bar.-mp::after
    background-color royalblue
</style>
