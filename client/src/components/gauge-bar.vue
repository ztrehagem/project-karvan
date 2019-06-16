<template lang="pug">
.gauge-bar
  .value {{current}}&thinsp;/&thinsp;{{max}}
  .bar(:class="$style[type]", :style="barStyle")
  .underline(:class="$style[type]")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: { type: String, validator: (type: string) => ['hp', 'gp', 'mp'].includes(type), required: true },
    current: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  computed: {
    barStyle(): { [prop: string]: string } {
      return { transform: `scaleX(${this.current / this.max})` }
    },
  },
})
</script>

<style lang="stylus" scoped>
.gauge-bar
  &
    position relative

  .value
    font-size 1rem
    margin-top 2px
    text-align right
    line-height 1

  .bar
    width 100%
    height 4px
    transform-origin center right

  .underline
    width 100%
    height 1px
</style>

<style lang="stylus" scoped module>
.hp
  background-color crimson

.gp
  background-color mediumseagreen

.mp
  background-color royalblue
</style>

