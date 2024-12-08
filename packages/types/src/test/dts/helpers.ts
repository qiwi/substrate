import {
  Extends,
  ExtendsOrNever,
  GetLength,
  PrependTuple,
  Prev,
  RecursivePartial,
  UnionToIntersection,
} from '../../main/ts/helpers'

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
// @ts-expect-error
void c.c

const d: UnionToIntersection<A | B, A> = Object.assign({}, a, b)

void d.a
// @ts-expect-error
void d.b

type Prim = [number, string]
type NullablePrim = PrependTuple<null, Prim>

const p1: Prim = [1, 'a']
const p2: NullablePrim = [null, 1, 'a'] // eslint-disable-line
// @ts-expect-error
const p3: NullablePrim = [1, 1, 'a']

const e1: Extends<number, any, number, string> = 1
// @ts-expect-error
const e2: Extends<number, any, number, string> = 'string'
const e3: ExtendsOrNever<{ a: string }, { a: any }> = { a: 'foo' }
// @ts-expect-error
const e4: ExtendsOrNever<{ a: string }, { a: number }> = { a: 'foo' }

type TSomeType = {
  foo: {
    bar: string
  }
}

const rp0: RecursivePartial<TSomeType> = {}
const rp1: RecursivePartial<TSomeType> = { foo: {} }
const rp2: RecursivePartial<TSomeType> = { foo: { bar: 'baz' } }
// @ts-expect-error
const rp3: RecursivePartial<TSomeType> = { foo: { bar: 1 } }
const prev0: [string, number][Prev<1>] = '1'
// @ts-expect-error
const prev1: [string, number][Prev<2>] = '1'

const gl0: [string, number, null][GetLength<['foo', 'bar']>] = null
// @ts-expect-error
const gl1: [string, number, null][GetLength<['foo', 'bar']>] = 1
