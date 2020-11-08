import { IStorage } from '.'

const storage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => {
    void key
    return false
  },
  remove: (key: string) => {
    void key
  },
  size: () => 42,
  reset: () => {},
}

const brokenStorage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => { // $ExpectError
    void key
    return 42
  },
  remove: (key: string) => {
    void key
  },
  size: () => 42,
  reset: () => {},
}
