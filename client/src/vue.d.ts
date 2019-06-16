import Vue from 'vue'
import * as consts from './consts'

declare module 'vue/types/vue' {
  interface Vue {
    $style: { [className: string]: string }
    $consts: typeof consts
  }
}
