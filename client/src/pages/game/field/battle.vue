<template lang="pug">
.game-field-battle
  .enemies
    .enemy(v-for="e in enemies")
      strong {{e.name}}
      gauge-bar(type="hp", :current="e.hp", :max="e.hpMax")
  router-link.exit(to="/game/field") back
</template>

<script lang="ts">
import Vue from 'vue'
import EnterLeave from '@/mixins/enter-leave'
import GaugeBar from '@/components/gauge-bar.vue'
import { ENTER_LEAVE_DURATION } from '@/mixins/enter-leave'
import { wait } from '@/utils/wait'
export default Vue.extend({
  mixins: [
    EnterLeave,
  ],
  components: {
    GaugeBar,
  },
  data() {
    return {
      enemies: [
        { name: 'スライムA', hp: 10, hpMax: 10 },
        { name: 'スライムB', hp: 10, hpMax: 10 },
        { name: 'スライムC', hp: 10, hpMax: 10 },
        { name: 'スライムD', hp: 10, hpMax: 10 },
      ],
    }
  },
  async mounted() {
    this.$root.$emit('controlBar:partyList', { clickable: true })
    this.$root.$emit('controlBar:globalCommandList', false)
    await wait(ENTER_LEAVE_DURATION)
    this.$root.$emit('partyList:selected', 0)
  },
  destroyed() {
    this.$root.$emit('controlBar:partyList', false)
    this.$root.$emit('controlBar:globalCommandList', true)
  },
})
</script>

<style lang="stylus" scoped>
.game-field-battle
  &
    display grid
    grid-template-columns 1fr
    grid-template-rows 1fr auto auto

  .enemies
    display flex
    align-items center
    justify-content center
    +enter-leave(transform)
      transform translateY(-100%)

  .enemy
    padding 2rem

  .exit
    position fixed
</style>
