<template lang="pug">
button.back-link(type="button", @click="click")
  slot
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    click() {
      this.$router.go(-1)
    },
  },
})
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

// .back-link
</style>

