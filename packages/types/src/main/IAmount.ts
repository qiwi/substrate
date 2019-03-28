import { ICurrency } from '../main'

export type IValue = number

export interface IAmount {
  value: IValue,
  currency: ICurrency,
  toString: () => string
}
