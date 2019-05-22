export type ICollectionItem = any

export interface ICollection <T> {
  get: (index: number | string) => T | undefined
  add: (index: number, item: T) => T
  remove: (index: number | string) => T | undefined
  clear: () => void
  size: () => number
  isEmpty: () => boolean
}
