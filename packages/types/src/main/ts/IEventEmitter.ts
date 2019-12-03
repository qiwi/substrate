/** @module @qiwi/substrate-types */
/** */

export type IEventListener = (...args: any[]) => void
export type IEmitterMethod = (type: string, listener: IEventListener) => void

export interface IEventEmitter {
  emit (type: string, ...args: any[]): void
  off: IEmitterMethod
  on: IEmitterMethod
  once: IEmitterMethod
}
