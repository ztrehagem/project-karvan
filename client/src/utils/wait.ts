export function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export async function waitFrame(ms: number = 0) {
  if (ms > 0) {
    await wait(ms)
  }
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
}
