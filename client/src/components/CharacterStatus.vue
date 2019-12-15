<template lang="pug">
.character-status
  .name {{character.name}}
  GaugeBar(type="hp", :current="character.hp", :max="character.hpMax")
  GaugeBar(type="gp", :current="character.gp", :max="character.gpMax")
  GaugeBar(type="mp", :current="character.mp", :max="character.mpMax")
</template>

<script lang="ts">
import Vue from 'vue'
import GaugeBar from '@/components/GaugeBar.vue'
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
