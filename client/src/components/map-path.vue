<template lang="pug">
svg.map-path(:style="style", :width="svgsize.width", :height="svgsize.height")
  line(:x1="x1", :y1="y1", :x2="x2", :y2="y2", stroke="#303030", stroke-width="3")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    from: { type: Object, required: true },
    to: { type: Object, required: true },
  },
  computed: {
    diff(): { width: number, height: number } {
      return {
        width: this.to.x - this.from.x,
        height: this.to.y - this.from.y,
      }
    },
    dimension(): { width: number, height: number } {
      return {
        width: Math.abs(this.diff.width) * 80,
        height: Math.abs(this.diff.height) * 80,
      }
    },
    svgsize(): { width: number, height: number } {
      return {
        width: Math.max(this.dimension.width, 3),
        height: Math.max(this.dimension.height, 3),
      }
    },
    dir(): { x: boolean, y: boolean } {
      return {
        x: this.diff.width >= 0,
        y: this.diff.height >= 0,
      }
    },
    style(): any {
      return {
        transform: `translate(${this.dir.x ? '0' : '-100%'}, ${this.dir.y ? '0' : '-100%'})`,
      }
    },
    x1(): number {
      return this.dir.x ? 1 : this.dimension.width + 1
    },
    y1(): number {
      return this.dir.y ? 1 : this.dimension.height + 1
    },
    x2(): number {
      return this.dir.x ? this.dimension.width + 1 : 1
    },
    y2(): number {
      return this.dir.y ? this.dimension.height + 1 : 1
    },
  },
})
</script>

<style lang="stylus" scoped>
.map-path
  &
    position absolute
    top calc(50% - 0.15rem)
    left calc(50% - 0.15rem)
</style>

