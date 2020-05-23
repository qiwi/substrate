import { IConstructor, IConstructable } from '.'

export interface FooIface {
  foo(): any
}

export class Foo {
  constructor (param: string) {
    console.log(param)
  }

  foo (): void {}
}

export type FooCtor = IConstructable<FooIface, ConstructorParameters<typeof Foo>>

export class Bar {
  constructor (param: number) {
    console.log(param)
  }

  foo (): void {}
}

export const factory = <T extends FooCtor>(Ctor: T, param: string): FooIface => new Ctor(param)

export const foo = factory(Foo, 'foo')
export const bar = factory(Bar, 'foo') // $ExpectError
