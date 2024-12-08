import { ICloneable } from '.'

const cloneable: ICloneable<string> = {
  clone (): string {
    return 'clone'
  },
}

// @ts-expect-error
cloneable.clone('qwe')
// @ts-expect-error
cloneable.clone(123)
// @ts-expect-error
cloneable.clone({ hello: 'hello', world: 'world' })
