import Vue from 'vue'
import * as consts from './consts'

declare module 'vue/types/vue' {
  interface Vue {
    $consts: typeof consts;
  }
}
