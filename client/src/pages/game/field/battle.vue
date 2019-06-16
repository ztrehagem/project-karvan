<template lang="pug">
.game-field-battle
  .enemies
    span enemies
    router-link(to="/game/field") back
  div
    character-list.characters
</template>

<script lang="ts">
import Vue from 'vue'
import CharacterList from '@/components/character-list.vue'
import EnterLeave from '@/mixins/enter-leave'
export default Vue.extend({
  components: {
    CharacterList,
  },
  mixins: [
    EnterLeave,
  ],
})
</script>

<style lang="stylus" scoped>
.game-field-battle
  &
    display grid
    grid-template-columns 1fr
    grid-template-rows 1fr auto

  .enemies
    display flex
    align-items center
    justify-content center

  .characters
    display flex
    align-items flex-end
    width 100%
    height 100%
    +enter-leave(transform)
      transform translateY(100%)
</style>
