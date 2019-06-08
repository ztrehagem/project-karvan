<template lang="pug">
.game-base
  head-bar.head(:info="info")
  .main
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import HeadBar from '@/components/common/head-bar.vue';
import EnterLeave from '@/mixins/enter-leave';
export default Vue.extend({
  mixins: [
    EnterLeave,
  ],
  components: {
    HeadBar,
  },
  data() {
    return {
      info: {
        type: '港湾都市',
        name: '港町ポルタメリア(仮)',
      },
    };
  },
});
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

.game-base
  &
    display flex
    height 100vh
    flex-direction column

  .head
    flex 0 0 auto
    transform none
    +enter-leave(transform)
      transform translateY(-100%)

  .main
    flex 0 1 100%
    position relative
    > *
      position absolute
      top 0
      left 0
      width 100%
      height 100%
</style>
