import {
  UnionToIntersection,
  PrependTuple
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
