import { IConstructor } from '.'

export interface FooCtor extends IConstructor {
  new(param: string): FooIface
}

export interface FooIface {
  foo(): any
}

export class Foo {
  constructor (param: string) {
    console.log(param)
  }

  foo () {}
}

export class Bar {
  constructor (param: number) {
    console.log(param)
  }

  foo () {}
}

export const factory = (Ctor: FooCtor, param: string): FooIface => new Ctor(param)

export const foo = factory(Foo, 'foo')
export const bar = factory(Bar, 'foo') // $ExpectError
