<template lang="pug">
transition(@before-enter="init", @enter="appear", @after-enter="release", @before-leave="appear", @leave="disappear")
  div(v-if="active")
    slot
</template>

<script lang="ts">
import Vue from 'vue'
import { ENTER_LEAVE_DURATION } from '@/mixins/enter-leave'
import { waitFrame } from '@/utils/wait'
export default Vue.extend({
  props: {
    active: { type: Boolean, required: true },
  },
  methods: {
    init(el: HTMLElement) {
      el.style.height = '0'
      el.style.transition = `ease ${ENTER_LEAVE_DURATION}ms height`
      el.style.overflow = 'hidden'
    },
    appear(el: HTMLElement) {
      const child = el.children.item(0)
      if (!child) throw new Error()
      const { height } = child.getBoundingClientRect()
      el.style.height = `${height}px`
    },
    release(el: HTMLElement) {
      el.style.height = 'auto'
    },
    async disappear(el: HTMLElement) {
      await waitFrame()
      this.$nextTick(() => el.style.height = '0')
    },
  },
})
</script>
