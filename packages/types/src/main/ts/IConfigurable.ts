/** @module @qiwi/substrate-types */
/** */

export interface IConfigurable {
  setConfig: (options?: any) => void
  getConfig: () => any
}
