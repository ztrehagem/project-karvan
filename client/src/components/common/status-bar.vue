<template lang="pug">
.status-bar
  table.table
    tr
      th.th 行動値
    tr
      td
        span {{$store.state.player.ap.toLocaleString()}}
        small /
        small {{$consts.AP_MAX.toLocaleString()}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="stylus" scoped>
.status-bar
  &
    border-top 3px solid $cl-dark

  .table
    padding 2rem

  .th
    text-align left
</style>

