<template lang="pug">
.control-bar
  FootBarTransition(v-slot:default, :active="!!$store.state.battle.character")
    CharacterCommandList._bordertop
  FootBarTransition(v-slot:default, :active="!!flags.partyList")
    PartyList.party._bordertop(:selectable="flags.partyList.selectable")
  FootBarTransition(v-slot:default, :active="!!flags.globalCommandList")
    GlobalCommandList.commands._bordertop
</template>

<script lang="ts">
import Vue from 'vue'
import FootBarTransition from '@/components/FootBarTransition.vue'
import GlobalCommandList from '@/components/GlobalCommandList.vue'
import PartyList from '@/components/PartyList.vue'
import CharacterCommandList from '@/components/CharacterCommandList.vue'
type Appear = boolean | { [prop: string]: any }
export default Vue.extend({
  components: {
    FootBarTransition,
    GlobalCommandList,
    PartyList,
    CharacterCommandList,
  },
  data() {
    return {
      flags: {
        partyList: false as Appear,
        globalCommandList: true as Appear,
      },
    }
  },
  created() {
    this.$root.$on('controlBar:partyList', this.onPartyList)
    this.$root.$on('controlBar:globalCommandList', this.onGlobalCommandList)
  },
  destroyed() {
    this.$root.$off('controlBar:partyList', this.onPartyList)
    this.$root.$off('controlBar:globalCommandList', this.onGlobalCommandList)
  },
  methods: {
    onPartyList(appear: Appear) {
      this.flags.partyList = appear
    },
    onGlobalCommandList(appear: Appear) {
      this.flags.globalCommandList = appear
    },
  },
})
</script>

<style lang="stylus" scoped>
.control-bar
  &
    background-color $cl-light

  .party
    width 100%

  ._bordertop
    border-top 3px solid $cl-dark
</style>
