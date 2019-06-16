<template lang="pug">
.character-status-list
  foot-bar-transition(v-slot:default, :active="selected !== null")
    .commands
      button.command(type="button", @click.prevent="command") こうげき
      button.command(type="button", @click.prevent="command") スキル
      button.command(type="button", @click.prevent="command") アイテム
      button.command(type="button", @click.prevent="left") にげる
  .list
    character-status.character(
      v-for="(c, index) in $store.state.party.characters",
      :key="index",
      :character="c",
      :class="{ [$style.selected]: isSelected(c), [$style.selectable]: selectable }",
      @click.native="select(c)",
    )
</template>

<script lang="ts">
import Vue from 'vue'
import FootBarTransition from '@/components/foot-bar-transition.vue'
import CharacterStatus from '@/components/character-status.vue'
export default Vue.extend({
  components: {
    FootBarTransition,
    CharacterStatus,
  },
  props: {
    selectable: { type: Boolean, default: false },
  },
  data() {
    return {
      selected: null as null | number,
    }
  },
  created() {
    this.$root.$on('partyList:selected', this.onSelected)
  },
  destroyed() {
    this.$root.$off('partyList:selected', this.onSelected)
  },
  methods: {
    onSelected(index: number) {
      this.selected = index < 0 ? null : index
    },
    select(c: any) {
      if (!this.selectable) return
      this.selected = this.$store.state.party.characters.indexOf(c)
    },
    isSelected(c: any) {
      return this.selected === this.$store.state.party.characters.indexOf(c)
    },
    command() {
      console.log('command')
    },
    left() {
      const ok = confirm('にげる？')
      if (ok) {
        this.$router.push('/game/field')
      }
    },
  },
})
</script>

<style lang="stylus" scoped>
.character-status-list
  > :not(:first-child)
    border-top 3px solid $cl-dark

  .list
    display flex
    justify-content center
    width 100%

  .character
    width 25%
    position relative

  .commands
    display flex

  .command
    cursor pointer
    position relative
    padding 2rem
    padding-left 3rem

    +hover()
      &::before
        position relative
        right 1.5rem
        top 0
        display inline-block
        content ">"
        width 0
</style>

<style lang="stylus" scoped module>
.selected
  &::before
    content ""
    display block
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    border 9px solid gold

.selectable
  cursor pointer
</style>


