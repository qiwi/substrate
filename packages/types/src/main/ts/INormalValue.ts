import { IAnyMap } from './IAnyMap'
import { UnionToIntersection } from './helpers'

export interface IIdentified {
  id: string | number | symbol
}

export type IWrappedValue<V=any, W=Object> =
  (W extends object[]
    ? UnionToIntersection<W[number]>
    : W extends object
      ? W
      : object
  ) & {value: V}

export type ITyped<T=any> = {
  type: T
}

export type ITypedValue<V=any, T=any> = IWrappedValue<V, ITyped<T>>

export type IMeted<M extends IAnyMap = IAnyMap> = {
  meta: M
}

export type IMetedValue<V=any, M extends IAnyMap = IAnyMap> = IWrappedValue<V, IMeted<M>>

export type IMetaTyped<T=any, M extends IAnyMap = IAnyMap> = ITyped<T> & IMeted<M>

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
