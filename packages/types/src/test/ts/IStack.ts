import { IStack } from './index';

const brokenStack: IStack<number> = {
  push: (item) => 'foo', // $ExpectError
  pop: (item: string) => 123, // $ExpectError
  unshift: (item) => 'bar', // $ExpectError
  shift: (item: string) => 'baz', // $ExpectError
  indexOf: (item: any) => 10, // $ExpectError
  first: (item: string) => '123', // $ExpectError
  last: (item: string) => '321', // $ExpectError
  isEmpty: () => 123, // $ExpectError
  size: 'baz', // $ExpectError
  remove: (item) => 'foo', // $ExpectError
  add: (index: string, item: string) => ({}), // $ExpectError
  get: (index: boolean) => index, // $ExpectError
  clear: (item: string) => item, // $ExpectError
  toArray: () => null, // $ExpectError
};

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
  toArray: () => ([1, 2, 3]),
};
