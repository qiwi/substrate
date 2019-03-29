export type TPromiseExecutor<TValue = any, TReason = any> = (resolve: (value: TValue) => void, reject: (reason: TReason) => void) => void

export interface IPromise<TValue = any, TReason = any> {
  new(executor: TPromiseExecutor<TValue>): IPromiseInstance<TValue, TReason>
  all: (values: Array<IPromiseInstance<TValue, TReason>>) => IPromiseInstance<TValue[], TReason>
  race: (values: Array<IPromiseInstance<TValue, TReason>>) => IPromiseInstance<TValue, TReason>
  reject: (reason?: TReason) => IPromiseInstance<TValue, TReason>
  resolve: (value?: TValue) => IPromiseInstance<TValue, TReason>
}

export interface IPromiseInstance<TValue = any, TReason = any> {
  then: (onSuccess?: (value: TValue) => any, onReject?: (reason: TReason) => any) => IPromiseInstance
  catch: (onReject: (reason: TReason) => any) => IPromiseInstance
  finally?: (onFinally: () => any) => IPromiseInstance
}
