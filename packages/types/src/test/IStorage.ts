import { IStorage } from './index'

const storage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => {
    key;
    return false;
  },
  remove: (key: string) => {
    key;
  },
  size: () => 42,
  reset: () => {}
};

const brokenStorage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => {  // $ExpectError
    key;
    return 42;
  },
  remove: (key: string) => {
    key;
  },
  size: () => 42,
  reset: () => {}
};
