import { IConstructor } from './IConstructor'

export type TPromiseExecutor<TValue = any, TReason = any> = (
  resolve: (value: TValue) => void,
  reject: (reason: TReason) => void,
) => void

export interface IPromise<TValue = any, TReason = any> extends Promise<TValue> {
  then: (
    onSuccess?: (value: TValue) => any,
    onReject?: (reason: TReason) => any,
  ) => IPromise
  catch: (onReject: (reason: TReason) => any) => IPromise
  // finally: (onFinally: () => any) => IPromise
  readonly [Symbol.toStringTag]: string
}

export interface IPromiseConstructor<TValue = any, TReason = any>
  extends IConstructor<IPromise<TValue, TReason>> {
  new (executor: TPromiseExecutor<TValue>): IPromise<TValue, TReason>
  all: (
    values: Iterable<IPromise<TValue, TReason>>,
  ) => IPromise<TValue[], TReason>
  race: (
    values: Iterable<IPromise<TValue, TReason>>,
  ) => IPromise<TValue, TReason>
  reject: (reason?: TReason) => IPromise<TValue, TReason>
  resolve: (value?: TValue) => IPromise<TValue, TReason>
}

// https://stackoverflow.com/questions/45902881/ts1055-when-using-async-await-using-a-type-alias
export const IPromise = Promise
