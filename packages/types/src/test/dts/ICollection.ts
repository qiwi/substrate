import { ICollection } from '.'

const brokenCollection: ICollection<number> = {
  // @ts-expect-error
  isEmpty: () => 123,
  // @ts-expect-error
  size: 'baz',
  // @ts-expect-error
  remove: (index) => 'foo',
  // @ts-expect-error
  add: (index: string, item: string) => ({}),
  // @ts-expect-error
  get: (item: boolean) => item,
  // @ts-expect-error
  clear: (item: string) => item,
}

const collection: ICollection<number> = {
  isEmpty: () => true,
  size: 123,
  remove: (index: number | string) => +index,
  add: (index: number | string, item) => +index + item,
  get: (index: number | string) => +index,
  clear: () => {},
}
