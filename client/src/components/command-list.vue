<template lang="pug">
.command-list
  button(type="button", @click="togglePartyList") パーティリスト
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      partyList: false,
    }
  },
  methods: {
    togglePartyList() {
      this.partyList = !this.partyList
      this.$root.$emit('controlBar:partyList', this.partyList)
    },
  },
})
</script>

<style lang="stylus" scoped>
.command-list
  &
    padding 2rem
</style>
