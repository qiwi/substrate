import { IStringMap } from '@qiwi/substrate-types';

const map: IStringMap = {
  foo: 1 // $ExpectError
};

export { map };
