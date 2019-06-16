<template lang="pug">
.control-bar
  foot-bar-transition(v-slot:default, :active="!!flags.partyList")
    party-list.party._bordertop(:selectable="flags.partyList.selectable")
  foot-bar-transition(v-slot:default, :active="!!flags.globalCommandList")
    global-command-list.commands._bordertop
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalCommandList from '@/components/global-command-list.vue'
import PartyList from '@/components/party-list.vue'
import FootBarTransition from '@/components/foot-bar-transition.vue'
export default Vue.extend({
  components: {
    GlobalCommandList,
    PartyList,
    FootBarTransition,
  },
  data() {
    return {
      flags: {
        partyList: false as boolean | { [k: string]: any },
        globalCommandList: true as boolean | { [k: string]: any },
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
    onPartyList(appear: boolean | { [k: string]: any }) {
      this.flags.partyList = appear
    },
    onGlobalCommandList(appear: boolean | { [k: string]: any }) {
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
