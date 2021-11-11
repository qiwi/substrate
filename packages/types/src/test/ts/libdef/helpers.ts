import {
  Extends,
  ExtendsOrNever,
  GetLength,
  PrependTuple,
  Prev,
  RecursivePartial,
  UnionToIntersection,
} from '../../../main/ts'

interface A {
  a: string
}

interface B {
  b: number
}

const a: A = { a: 'a' }
const b: B = { b: 1 }

const c: UnionToIntersection<A | B> = Object.assign({}, a, b)

void c.a
void c.b
void c.c // $ExpectError

const d: UnionToIntersection<A | B, A> = Object.assign({}, a, b)

void d.a
void d.b // $ExpectError

type Prim = [number, string]
type NullablePrim = PrependTuple<null, Prim>

const p1: Prim = [1, 'a']
const p2: NullablePrim = [null, 1, 'a'] // eslint-disable-line
const p3: NullablePrim = [1, 1, 'a'] // $ExpectError

const e1: Extends<number, any, number, string> = 1
const e2: Extends<number, any, number, string> = 'string' // $ExpectError
const e3: ExtendsOrNever<{ a: string }, { a: any }> = { a: 'foo' }
const e4: ExtendsOrNever<{ a: string }, { a: number }> = { a: 'foo' } // $ExpectError

type TSomeType = {
  foo: {
    bar: string
  }
}

const rp0: RecursivePartial<TSomeType> = {}
const rp1: RecursivePartial<TSomeType> = { foo: {} }
const rp2: RecursivePartial<TSomeType> = { foo: { bar: 'baz' } }
const rp3: RecursivePartial<TSomeType> = { foo: { bar: 1 } } // $ExpectError

const prev0: [string, number][Prev<1>] = '1'
const prev1: [string, number][Prev<2>] = '1' // $ExpectError

const gl0: [string, number, null][GetLength<['foo', 'bar']>] = null
const gl1: [string, number, null][GetLength<['foo', 'bar']>] = 1 // $ExpectError
