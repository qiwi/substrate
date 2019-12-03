/** @module @qiwi/substrate-types */
/** */

export type TStorageKey = string
export type TStorageValue = any
export type TStorageTTL = number

export interface IStorage {
  get: (key: TStorageKey) => TStorageValue
  set: (key: TStorageKey, value: TStorageValue, ttl?: TStorageTTL) => void
  has: (key: TStorageKey) => boolean
  remove: (key: TStorageKey) => void
  size: () => number
  reset: () => void
}
