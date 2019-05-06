<template lang="pug">
.game-field(:class="rootClass")
  head-bar.head(:info="info")
  .main
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import HeadBar from '@/components/common/head-bar.vue';
export default Vue.extend({
  components: {
    HeadBar,
  },
  data() {
    return {
      rootClass: { _enter: true, _leaving: false },
      info: {
        type: 'フィールド',
        name: '大陸東地方',
      },
    };
  },
  async mounted() {
    await this.$waitFrame();
    this.rootClass._enter = false;
  },
  async beforeRouteLeave(to, from, next) {
    this.rootClass._leaving = true;
    await this.$wait(200);
    next();
  },
});
</script>

<style lang="stylus" scoped>
@require "~@/styles/include"

.game-field
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

