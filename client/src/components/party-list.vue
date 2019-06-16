<template lang="pug">
.character-status-list
  .list
    character-status.character(v-for="c in characters", :character="c", :class="{ [$style.selected]: isSelected(c) }")
</template>

<script lang="ts">
import Vue from 'vue'
import CharacterStatus from '@/components/character-status.vue'
export default Vue.extend({
  components: {
    CharacterStatus,
  },
  data() {
    return {
      characters: [
        { name: 'character1', hp: 10, hpMax: 10, gp: 10, gpMax: 10, mp: 10, mpMax: 10 },
        { name: 'character2', hp: 18, hpMax: 20, gp: 9, gpMax: 20, mp: 3, mpMax: 20 },
        { name: 'character3', hp: 21, hpMax: 30, gp: 30, gpMax: 30, mp: 12, mpMax: 30 },
        { name: 'character4', hp: 16, hpMax: 40, gp: 2, gpMax: 40, mp: 39, mpMax: 40 },
      ],
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
    isSelected(c: any): boolean {
      return this.selected === this.characters.indexOf(c)
    },
  },
})
</script>

<style lang="stylus" scoped>
.character-status-list
  .list
    display flex
    justify-content center
    width 100%

  .character
    width 25%
    position relative
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
</style>

