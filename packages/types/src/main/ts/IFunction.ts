export type IFunction<A extends any[] = any[], R = any> = (...args: A) => R

export type IFn<A extends any[] = any[], R = any> = IFunction<A, R>

export type ICallable<A extends any[] = any[], R = any> = IFunction<A, R>

export type IUnaryFunction<A = any, R = any> = (a: A) => R

export type IUnaryFn<A = any, R = any> = IUnaryFunction<A, R>
