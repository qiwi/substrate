import * as Bluebird from 'bluebird'

export type IPromise<T> = Bluebird<T> | Promise<T>

export type TPromiseExecutor<TValue = any, TReason = any> = (resolve: (value: TValue) => void, reject: (reason: TReason) => void) => void

export interface IPromiseConstructor<TValue = any, TReason = any> {
  new(executor: TPromiseExecutor<TValue>): IPromise<TValue>
  all: (values: Array<IPromise<TValue>>) => IPromise<TValue[]>
  race: (values: Array<IPromise<TValue>>) => IPromise<TValue>
  reject: (reason?: TReason) => IPromise<TValue>
  resolve: (value?: TValue) => IPromise<TValue>
}
