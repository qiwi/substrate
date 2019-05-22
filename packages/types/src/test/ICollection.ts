import { ICollection } from './index';

const brokenCollection: ICollection<number> = {
  isEmpty: () => 123, // $ExpectError
  size: () => 'baz', // $ExpectError
  remove: item => 'foo', // $ExpectError
  add: item => ({}), // $ExpectError
  get: (item: boolean) => item, // $ExpectError
  clear: (item: string) => item // $ExpectError
};

const collection: ICollection<number> = {
  isEmpty: () => true,
  size: () => 123,
  remove: (index: number | string) => +index,
  add: item => item,
  get: (index: number | string) => +index,
  clear: () => {},
};
