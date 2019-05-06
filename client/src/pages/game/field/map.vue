<template lang="pug">
.game-field-map(:class="rootClass")
  .map(:style="mapStyle")
    .point(v-for="point in map", ref="point", :data-point-id="point.id", :style="pointStyle(point)")
      field-line.line(v-for="cp in connectedLowerPoints(point.id, point.conn)", :key="cp.id", :from="point", :to="cp")
      button.button(type="button", @click="currentPointId = point.id")
  .center
</template>

<script lang="ts">
import Vue from 'vue';
import FieldLine from '@/components/field/line.vue';
import map, { Point } from '@/assets/map';
export default Vue.extend({
  components: {
    FieldLine,
  },
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
      map,
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
  },
  async beforeRouteLeave(to, from, next) {
    this.rootClass._leaving = true;
    await this.$wait(200);
    next();
  },
  methods: {
    pointStyle(point: Point) {
      return { top: `${point.y * 8}rem`, left: `${point.x * 8}rem` };
    },
    connectedLowerPoints(id: number, conn: number[]) {
      return conn.filter((c) => c < id).map((cid) => this.map.find((point) => point.id === cid));
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
    transform translate(-50%, -50%)
    +enter-leave(transform)
      transform translate(-50%, -50%) scale(0)

  .button
    display block
    width 100%
    height 100%
    background-color $cl-gray
    border 3px solid $cl-dark
    border-radius 50%
    z-index 10

  .line
    z-index -1

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

