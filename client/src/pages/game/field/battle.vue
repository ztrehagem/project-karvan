<template lang="pug">
.game-field-battle
  .enemies
    button.enemy(v-for="e in enemies", type="button", :class="{ [$style.selectable]: selectable }", @click.prevent="select(e)")
      strong {{e.name}}
      GaugeBar(type="hp", :current="e.hp", :max="e.hpMax")
  router-link.exit(to="/game/field") back
</template>

<script lang="ts">
import Vue from 'vue'
import EnterLeave, { ENTER_LEAVE_DURATION } from '@/mixins/enter-leave'
import GaugeBar from '@/components/GaugeBar.vue'
import { wait } from '@/utils/wait'
import { Enemy } from '@/models/character'
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
      ] as Enemy[],
    }
  },
  computed: {
    selectable(): boolean {
      return !!this.$store.state.battle.commandType
    },
  },
  async mounted() {
    this.$root.$emit('controlBar:partyList', { selectable: true })
    this.$root.$emit('controlBar:globalCommandList', false)
    await wait(ENTER_LEAVE_DURATION)
    this.$root.$emit('partyList:selected', 0)
  },
  beforeDestroy() {
    this.$store.commit('battle/clear')
  },
  destroyed() {
    this.$root.$emit('controlBar:partyList', false)
    this.$root.$emit('controlBar:globalCommandList', true)
  },
  methods: {
    select(e: Enemy) {
      this.$store.commit('battle/selectEnemy', e)
    },
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

<style lang="stylus" scoped module>
.selectable
  cursor pointer
  &::hover
    background-color honeydew
</style>
