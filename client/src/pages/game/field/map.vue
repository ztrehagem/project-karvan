<template lang="pug">
.game-field-map
  .map(:style="mapStyle")
    .point(v-for="point in map", :style="pointStyle(point)")
      MapPath.path(v-for="cp in connectedLowerPoints(point)", :key="cp.id", :from="point", :to="cp")
    .point(v-for="point in map", :style="pointStyle(point)")
      button.button(type="button", @click="moveTo(point)", :disabled="moving")
  .center
</template>

<script lang="ts">
import Vue from 'vue'
import MapPath from '@/components/MapPath.vue'
import EnterLeave from '@/mixins/enter-leave'
import map, { Point, MapEvent } from '@/assets/map'
import { wait } from '@/utils/wait'

const MAP_MOVING_DURATION = 300

export default Vue.extend({
  mixins: [
    EnterLeave,
  ],
  components: {
    MapPath,
  },
  data() {
    return {
      map,
      currentPointId: 0,
      moving: false,
    }
  },
  computed: {
    currentPoint(): Point {
      return this.map[this.currentPointId]
    },
    mapStyle(): { transform: string } {
      return { transform: `translate(-${this.currentPoint.x * 8}rem, -${this.currentPoint.y * 8}rem)` }
    },
  },
  methods: {
    async moveTo(point: Point) {
      if (this.moving) {
        console.info(`still moving`)
        return
      }
      if (!this.currentPoint.conn.includes(point.id)) {
        console.info(`can't move to`, point)
        return
      }
      if (this.$store.state.player.ap < this.$consts.AP_CONSUME_FIELD_MOVE) {
        console.info(`not enough AP to move`)
        return
      }

      this.moving = true
      this.$store.commit('player/consumeAp', this.$consts.AP_CONSUME_FIELD_MOVE)
      this.currentPointId = point.id
      await wait(MAP_MOVING_DURATION)
      if (this.currentPoint.onEnter) {
        const exit = this.doMapEvent(this.currentPoint.onEnter)
        if (exit) return
      }
      if (Math.random() < 0.2) {
        this.$router.push({ path: '/game/field/battle' })
        return
      }
      this.moving = false
    },
    doMapEvent(event: MapEvent) {
      switch (event.kind) {
        case 'enterBase':
          this.$router.push({ path: '/game/base' })
          return true
      }
    },
    pointStyle(point: Point) {
      return { top: `${point.y * 8}rem`, left: `${point.x * 8}rem` }
    },
    connectedLowerPoints(point: Point) {
      return point.conn
        .filter((c) => c < point.id)
        .map((cid) => this.map.find(({ id }) => id === cid) as Point)
    },
  },
})
</script>

<style lang="stylus" scoped>
.game-field-map
  &
    position relative

  .map
    position absolute
    top 50%;
    left 50%;
    transition 300ms ease transform;

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
    z-index 1

  .path
    z-index -1

  .center
    position absolute
    top 50%
    left 50%
    width 5rem
    height 5rem
    border 3px solid lighten(red, 50%)
    transform translate(-50%, -50%)
    +enter-leave(transform)
      transform translate(-50%, -50%) scale(0)
</style>
