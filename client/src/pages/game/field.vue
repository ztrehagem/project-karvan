<template lang="pug">
.game-field
  HeadBar.head(:info="info")
  .main
    router-view
  ControlBar.foot
</template>

<script lang="ts">
import Vue from 'vue'
import HeadBar from '@/components/HeadBar.vue'
import ControlBar from '@/components/ControlBar.vue'
import EnterLeave from '@/mixins/enter-leave'
export default Vue.extend({
  mixins: [EnterLeave],
  components: {
    HeadBar,
    ControlBar,
  },
  data() {
    return {
      info: {
        type: 'フィールド',
        name: '大陸東地方',
      },
    }
  },
})
</script>

<style lang="stylus" scoped>
.game-field
  &
    display flex
    flex-direction column

  .head
    flex 0 0 auto
    z-index 100
    transform none
    +enter-leave(transform)
      transform translateY(-100%)

  .main
    flex 0 1 100%
    position relative
    > *
      position absolute
      top 0
      left 0
      width 100%
      height 100%

  .foot
    flex 0 0 auto
    z-index 100
    transform none
    +enter-leave(transform)
      transform translateY(100%)
</style>
