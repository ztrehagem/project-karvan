<template lang="pug">
.control-bar
  command-list.commands._bordertop
  transition(@enter="appear", @leave="disappear")
    div.transition(v-if="flags.partyList")
      party-list.party._bordertop
</template>

<script lang="ts">
import Vue from 'vue'
import CommandList from '@/components/command-list.vue'
import PartyList from '@/components/party-list.vue'
export default Vue.extend({
  components: {
    CommandList,
    PartyList,
  },
  data() {
    return {
      flags: {
        partyList: false,
      },
    }
  },
  created() {
    this.$root.$on('controlBar:partyList', this.onPartyList)
  },
  destroyed() {
    this.$root.$off('controlBar:partyList', this.onPartyList)
  },
  methods: {
    appear(el: HTMLElement) {
      const child = el.children.item(0)
      if (!child) throw new Error()
      const { height } = child.getBoundingClientRect()
      el.style.height = `${height}px`
    },
    disappear(el: HTMLElement) {
      el.style.height = null
    },
    onPartyList(appear: boolean) {
      this.flags.partyList = appear
    },
  },
})
</script>

<style lang="stylus" scoped>
.control-bar
  &
    background-color $cl-light

  .transition
    height 0
    transition ease 200ms height
    overflow hidden

  .party
    width 100%

  ._bordertop
    border-top 3px solid $cl-dark
</style>
