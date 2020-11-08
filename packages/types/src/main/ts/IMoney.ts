/** @module @qiwi/substrate-types */
/** */

import { ICurrency } from './ICurrency'

export type IValue = number

export interface IMoney {
  value: IValue
  currency: ICurrency
  toString: () => string
}
