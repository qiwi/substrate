export type TConfigKey = string

export interface IConfig<T = any> {
  set?: (key: TConfigKey, value: T) => void
  get: (key: TConfigKey) => T
  has: (key: TConfigKey) => boolean
  delete?: (key: TConfigKey) => void
  clear?: () => void
  onDidChange?: (key: TConfigKey, cb: (newValue: T | undefined, oldValue: T | undefined) => void) => void
  onDidAnyChange?: (cb: (oldValue: object | undefined, newValue: object | undefined) => void) => void
  size?: number
  store?: object
  path?: string
}
