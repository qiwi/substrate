import { UnionToIntersection } from '../../../main/ts'

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
