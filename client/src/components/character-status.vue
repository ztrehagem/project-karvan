<template lang="pug">
.character-status
  .name {{character.name}}
  gauge-bar(type="hp", :current="character.hp", :max="character.hpMax")
  gauge-bar(type="gp", :current="character.gp", :max="character.gpMax")
  gauge-bar(type="mp", :current="character.mp", :max="character.mpMax")
</template>

<script lang="ts">
import Vue from 'vue'
import GaugeBar from '@/components/gauge-bar.vue'
export default Vue.extend({
  components: {
    GaugeBar,
  },
  props: {
    character: { type: Object, required: true },
  },
})
</script>

<style lang="stylus" scoped>
$skew = -10deg

.character-status
  &
    border-right 3px solid $cl-dark
    padding 2rem
    transform skewX($skew)
    &:last-child
      border none

  .name
    transform skewX(- $skew)
</style>
