import { IEventEmitter } from '.'

// @ts-expect-error
const brokenEmitter: IEventEmitter = {
  on (event: string, handler: (...args: any[]) => void) {
    handler(event)
  },
}

const emitter: IEventEmitter = {
  emit (event: string, ...args: any[]) {
    // @ts-expect-error
    return void event && args
  },
  on (event: string, handler: (...args: any[]) => void) {
    handler(event)
  },
  off (event: string, handler: (...args: any[]) => void) {
    handler(event)
  },
  once (event: string, handler: (...args: any[]) => void) {
    handler(event)
  },
}
