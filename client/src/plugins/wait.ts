import Vue from 'vue';
import { wait, waitFrame } from '@/utils/wait';

Vue.mixin({
  methods: {
    $wait: wait,
    $waitFrame: waitFrame,
  },
});
