import { ICallable, IFn, IFunction, IUnaryFn, IUnaryFunction } from '.'

const fn1: IFn = () => {}
const fn2: ICallable = (a: any, b: any) => b + a
const fn3: IFn<[number, number], number> = (a: number, b: number): number =>
  b + a
const unary: IUnaryFn = (a: any) => a

const brokenFn: IFn<[number, number], string> = ( // $ExpectError
  a: number,
  b: number,
): number => b + a
const brokenUnary: IUnaryFunction = (a: any, b: any) => b + a // $ExpectError
const notAFn: IFunction = 'a' // $ExpectError
