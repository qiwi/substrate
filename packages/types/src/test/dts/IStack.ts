import { IStack } from '.'

const brokenStack: IStack<number> = {
  // @ts-expect-error
  push: (item) => 'foo',
  // @ts-expect-error
  pop: (item: string) => 123,
  // @ts-expect-error
  unshift: (item) => 'bar',
  // @ts-expect-error
  shift: (item: string) => 'baz',
  // @ts-expect-error
  indexOf: (item: any) => 10,
  // @ts-expect-error
  first: (item: string) => '123',
  // @ts-expect-error
  last: (item: string) => '321',
  // @ts-expect-error
  isEmpty: () => 123,
  // @ts-expect-error
  size: 'baz',
  // @ts-expect-error
  remove: (item) => 'foo',
  // @ts-expect-error
  add: (index: string, item: string) => ({}),
  // @ts-expect-error
  get: (index: boolean) => index,
  // @ts-expect-error
  clear: (item: string) => item,
  // @ts-expect-error
  toArray: () => null,
}

const stack: IStack<number> = {
  push: (...args) => args[0],
  pop: () => 123,
  unshift: (...args) => args[0],
  shift: () => 123,
  indexOf: (item) => item,
  first: () => 123,
  last: () => 123,
  isEmpty: () => true,
  size: 123,
  remove: (index: number | string) => +index,
  add: (index: number | string, item) => +index + item,
  get: (item: number | string) => +item,
  clear: () => {},
  toArray: () => [1, 2, 3],
}
