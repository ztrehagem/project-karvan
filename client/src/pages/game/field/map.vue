<template lang="pug">
.game-field-map(:class="rootClass")
  .map(:style="mapStyle")
    button.point(v-for="point in map", ref="point", :data-id="point.id", :style="pointStyle(point)", type="button", @click="currentPointId = point.id")
  .center
</template>

<script lang="ts">
import Vue from 'vue';
import map, { Point } from '@/assets/map';
import LeaderLine, { LeaderLineInstance } from '@/plugins/leader-line';
export default Vue.extend({
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
      map,
      lines: [] as LeaderLineInstance[],
      currentPointId: 0,
    };
  },
  computed: {
    currentPoint(): Point {
      return this.map[this.currentPointId];
    },
    mapStyle(): { transform: string } {
      return { transform: `translate(-${this.currentPoint.x * 8}rem, -${this.currentPoint.y * 8}rem)` };
    },
  },
  async mounted() {
    await this.$waitFrame();
    this.rootClass._enter = false;
    this.createLines();
  },
  async beforeRouteLeave(to, from, next) {
    this.lines.forEach((line) => line.remove());
    this.rootClass._leaving = true;
    await this.$wait(200);
    next();
  },
  methods: {
    pointStyle(point: Point) {
      return { top: `${point.y * 8}rem`, left: `${point.x * 8}rem` };
    },
    createLines() {
      const pointRefs = this.$refs.point as Element[];
      this.lines = this.map.reduce((lines, point) => {
        return lines.concat(point.conn.filter((connected) => connected < point.id).map((connected) => {
          return new LeaderLine(pointRefs[point.id], pointRefs[connected], {
            path: 'straight',
            startPlug: 'behind',
            endPlug: 'behind',
            color: '303030',
          });
        }));
      }, [] as LeaderLineInstance[]);
    },
  },
});
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

.game-field-map
  &
    position relative

  .map
    position absolute
    top 50%;
    left 50%;
    transition .3s ease transform;

  .point
    position absolute
    width 3.5rem
    height 3.5rem
    background-color $cl-gray
    border 3px solid $cl-dark
    border-radius 50%
    transform translate(-50%, -50%)
    +enter-leave(transform)
      transform translate(-50%, -50%) scale(0)

  .center
    position absolute
    top 50%
    left 50%
    width 5rem
    height 5rem
    border 3px solid lighten(red, 50%)
    // box-shadow 0 -1px 0 $cl-gray, 1px 0 0 $cl-gray, 0 1px 0 $cl-gray, -1px 0 0 $cl-gray
    transform translate(-50%, -50%)
    +enter-leave(transform)
      transform translate(-50%, -50%) scale(0)
</style>

