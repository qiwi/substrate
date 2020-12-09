import { ICollection } from './ICollection'

export type IStackItem = any

export interface IStack<T> extends ICollection<T> {
  push: (...items: Array<T>) => T
  pop: () => T | undefined
  unshift: (...items: Array<T>) => T
  shift: () => T | undefined
  indexOf: (item: T) => number
  first: () => T | undefined
  last: () => T | undefined
  toArray(): Array<T>
}
