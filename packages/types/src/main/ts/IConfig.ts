/** @module @qiwi/substrate-types */
/** */

export type TConfigKey = string

export interface IConfig<T = any> {
  set?: (key: TConfigKey, value: T) => void
  get: (key: TConfigKey) => T
  has: (key: TConfigKey) => boolean
  delete?: (key: TConfigKey) => void
  clear?: () => void
  size?: number
  [key: string]: any
}
