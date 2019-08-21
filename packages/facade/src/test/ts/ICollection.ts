import { ICollection } from './index';

const brokenCollection: ICollection<number> = {
  isEmpty: () => 123, // $ExpectError
  size: 'baz', // $ExpectError
  remove: index => 'foo', // $ExpectError
  add: (index: string, item: string) => ({}), // $ExpectError
  get: (item: boolean) => item, // $ExpectError
  clear: (item: string) => item // $ExpectError
};

const collection: ICollection<number> = {
  isEmpty: () => true,
  size: 123,
  remove: (index: number | string) => +index,
  add: (index: number | string, item) => +index + item,
  get: (index: number | string) => +index,
  clear: () => {},
};
