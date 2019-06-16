import Vue from 'vue'
import { wait, waitFrame } from '@/utils/wait'

const ENTER_LEAVE_CLASS = '__enter-leave'

export const ENTER_LEAVE_DURATION = 200

export default Vue.extend({
  async mounted() {
    await Vue.nextTick()
    await waitFrame()
    this.$el.classList.add(ENTER_LEAVE_CLASS)
  },
  async beforeRouteLeave(to, from, next) {
    this.$el.classList.remove(ENTER_LEAVE_CLASS)
    await wait(ENTER_LEAVE_DURATION)
    next()
  },
})
