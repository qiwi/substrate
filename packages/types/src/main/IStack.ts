export type IStackItem = any

export interface IStack<T> extends ICollection<T> {
  push: (...items: Array<T>) => T
  pop: () => T
  unshift: (...items: Array<T>) => T
  shift: () => T
  indexOf: (item: T) => number
  first: () => T
  last: () => T
}
