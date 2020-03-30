import {
  IFunction,
  IFn,
  IUnaryFunction,
  IUnaryFn
} from '.'

const fn1: IFn = () => {}
const fn2: IFn = (a: any, b: any) => b + a
const fn3: IFn<[number, number], number> = (a: number, b: number): number => b + a
const unary: IUnaryFn = (a: any) => a

const brokenFn: IFn<[number, number], string> = (a: number, b: number): number => b + a // $ExpectError
const brokenUnary: IUnaryFunction = (a: any, b: any) => b + a // $ExpectError
const notAFn: IFunction = 'a' // $ExpectError

