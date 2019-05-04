export let isTouchDevice = false;

if ('ontouchstart' in (document.documentElement || {})) {
  document.body.classList.add('__device-touchdevice');
  isTouchDevice = true;
}
