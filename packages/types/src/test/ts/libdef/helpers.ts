import {
  UnionToIntersection,
  PrependTuple,
  Extends,
  ExtendsOrNever,
} from '../../../main/ts'

interface A {
  a: string
}

interface B {
  b: number
}

const a: A = { a: 'a' }
const b: B = { b: 1 }

const c: UnionToIntersection<A|B> = Object.assign({}, a, b)

void c.a
void c.b
void c.c // $ExpectError

type Prim = [number, string]
type NullablePrim = PrependTuple<null, Prim>

const p1: Prim = [1, 'a']
const p2: NullablePrim = [null, 1, 'a']
const p3: NullablePrim = [1, 1, 'a'] // $ExpectError

const e1: Extends<number, any, number, string> = 1
const e2: Extends<number, any, number, string> = 'string' // $ExpectError
const e3: ExtendsOrNever<{a: string}, {a: any}> = { a: 'foo' }
const e4: ExtendsOrNever<{a: string}, {a: number}> = { a: 'foo' } // $ExpectError
