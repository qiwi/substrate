export type TPromiseExecutor = (resolve: (value: any) => void, reject: (value: any) => void) => void

export interface IPromise {
  new(executor: TPromiseExecutor): IPromiseInstance
  all: (values: any[]) => IPromiseInstance
  race: (values: any[]) => IPromiseInstance
  reject: (reason?: any) => IPromiseInstance
  resolve: (value?: any) => IPromiseInstance
}

export interface IPromiseInstance {
  then: (onSuccess?: (value: any) => any, onReject?: (reason: any) => any) => IPromiseInstance
  catch: (onReject: (reason: any) => any) => IPromiseInstance
  finally?: (onFinally: () => any) => IPromiseInstance
}
