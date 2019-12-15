import { throttle } from 'throttle-debounce'

export let isTouchDevice = false

if ('ontouchstart' in (document.documentElement || {})) {
  document.body.classList.add('__device-touchdevice')
  isTouchDevice = true
}

const apply100vhBody = (fix: boolean = false) => {
  const height = `${window.innerHeight}px`
  if (fix) {
    window.document.body.style.height = height
  } else {
    window.document.body.style.minHeight = height
  }
}

export const enable100vhBody = (fix: boolean = false) => {
  apply100vhBody(fix)
  window.addEventListener(
    'resize',
    throttle(500, () => apply100vhBody(fix)),
  )
}
