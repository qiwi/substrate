export type TPromiseExecutor<TValue = any, TReason = any> = (resolve: (value: TValue) => void, reject: (reason: TReason) => void) => void

export interface IPromiseConstructor<TValue = any, TReason = any> {
  new(executor: TPromiseExecutor<TValue>): IPromise<TValue, TReason>
  all: (values: Array<IPromise<TValue, TReason>>) => IPromise<TValue[], TReason>
  race: (values: Array<IPromise<TValue, TReason>>) => IPromise<TValue, TReason>
  reject: (reason?: TReason) => IPromise<TValue, TReason>
  resolve: (value?: TValue) => IPromise<TValue, TReason>
}

export interface IPromise<TValue = any, TReason = any> {
  then: (onSuccess?: (value: TValue) => any, onReject?: (reason: TReason) => any) => IPromise
  catch: (onReject: (reason: TReason) => any) => IPromise
  finally?: (onFinally: () => any) => IPromise
}
