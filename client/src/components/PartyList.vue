<template lang="pug">
.character-status-list
  .list
    CharacterStatus.character(
      v-for="(c, index) in $store.state.party.characters",
      :key="index",
      :character="c",
      :class="{ [$style.selected]: isSelectedCharacter(c), [$style.selectable]: selectable }",
      @click.native="selectCharacter(c)",
    )
</template>

<script lang="ts">
import Vue from 'vue'
import CharacterStatus from '@/components/CharacterStatus.vue'
import {
  Character,
  CharacterCommandType,
  CharacterCommand,
} from '@/models/character'
export default Vue.extend({
  components: {
    CharacterStatus,
  },
  props: {
    selectable: { type: Boolean, default: false },
  },
  created() {
    this.$root.$on('partyList:selected', this.onSelected)
  },
  destroyed() {
    this.$root.$off('partyList:selected', this.onSelected)
  },
  methods: {
    onSelected(index: number) {
      this.$store.state.battle.character =
        index < 0 ? null : this.$store.state.party.characters[index]
    },
    selectCharacter(c: Character) {
      if (!this.selectable) return
      this.$store.commit('battle/selectCharacter', c)
    },
    isSelectedCharacter(c: Character) {
      return this.$store.state.battle.character === c
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
</style>

<style lang="stylus" scoped module>
.selected
  background-color honeydew

.selectable
  cursor pointer
</style>
