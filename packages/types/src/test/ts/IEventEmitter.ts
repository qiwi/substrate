import { IEventEmitter } from '.'

const brokenEmitter: IEventEmitter = { // $ExpectError
  on (event: string, handler: (...args: any[]) => void) {
    handler(event)
  },
}

const emitter: IEventEmitter = {
  emit (event: string, ...args: any[]) {
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
