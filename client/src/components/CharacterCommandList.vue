<template lang="pug">
.character-command-list
  button.command(type="button", @click.prevent="command('attack')", :class="{ [$style.selected]: isSelectedCommandType('attack') }") こうげき
  button.command(type="button", @click.prevent="command('skill')", :class="{ [$style.selected]: isSelectedCommandType('skill') }") スキル
  button.command(type="button", @click.prevent="command('item')", :class="{ [$style.selected]: isSelectedCommandType('item') }") アイテム
  button.command(type="button", @click.prevent="exit") にげる
</template>

<script lang="ts">
import Vue from 'vue'
import { Character, CharacterCommand, CharacterCommandType } from '@/models/character'
export default Vue.extend({
  methods: {
    command(type: CharacterCommandType) {
      this.$store.commit('battle/selectCommandType', type)
    },
    isSelectedCommandType(type: CharacterCommandType) {
      return this.$store.state.battle.commandType === type
    },
    exit() {
      const ok = confirm('にげる？')
      if (ok) {
        this.$router.push('/game/field')
      }
    },
  },
})
</script>

<style lang="stylus" scoped>
.character-command-list
  &
    display flex

  .command
    cursor pointer
    position relative
    padding 2rem
    padding-left 3rem
    display flex
    align-items center

    +hover()
      &::before
        position relative
        right 1.5rem
        top 0
        display inline-block
        width 0
        material-icons("\e315")
</style>


<style lang="stylus" scoped module>
.selected
  background-color honeydew
  &::before
    position relative
    right 1.5rem
    top 0
    display inline-block
    width 0
    material-icons("\e315")
</style>
