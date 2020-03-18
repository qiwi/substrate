import { IAnyMap } from './IAnyMap'
import { UnionToIntersection } from './helpers'

export interface IIdentified {
  id: string | number | symbol
}

export type IWrappedValue<V=any, W={}> =
  (W extends {}[]
    ? UnionToIntersection<W[number]>
    : W extends {}
      ? W
      : {}
  ) & {value: V}

export interface IMetaTyped<T=any, M extends IAnyMap = IAnyMap> {
  type: T
  meta: M
}

export type IMetaTypedValue<
  V=any,
  T=any,
  M extends IAnyMap = IAnyMap
> = IWrappedValue<V, IMetaTyped<T, M>>

export type INormalValue<
  V=any,
  T=any,
  M extends IAnyMap = IAnyMap
> = IWrappedValue<V, [IMetaTyped<T, M>, IIdentified]>
