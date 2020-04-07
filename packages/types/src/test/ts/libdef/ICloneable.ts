import { ICloneable } from '.'

const cloneable: ICloneable<string> = {
  clone (): string { return 'clone' },
}

cloneable.clone('qwe') // $ExpectError
cloneable.clone(123) // $ExpectError
cloneable.clone({ hello: 'hello', world: 'world' }) // $ExpectError
