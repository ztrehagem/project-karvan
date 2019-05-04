import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $wait: (ms?: number) => Promise<void>;
    $waitFrame: (ms?: number) => Promise<void>;
  }
}
