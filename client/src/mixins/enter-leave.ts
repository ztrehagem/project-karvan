import Vue from 'vue';
import { wait, waitFrame } from '@/utils/wait';

const ENTER_LEAVE_CLASS = '__enter-leave';

export default Vue.extend({
  async mounted() {
    await waitFrame();
    this.$el.classList.add(ENTER_LEAVE_CLASS);
  },
  async beforeRouteLeave(to, from, next) {
    this.$el.classList.remove(ENTER_LEAVE_CLASS);
    await wait(200);
    next();
  },
});
