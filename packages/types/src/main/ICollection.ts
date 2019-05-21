export type ICollectionItem = any

export interface ICollection <T> {
  get: (index: number | string) => T
  add: (item: T) => T
  remove: (item: T) => T
  clear: () => void
  size: () => number
  isEmpty: () => boolean
}
