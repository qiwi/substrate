import {
  IStoreExtra,
} from '.'

const withStorage: IStoreExtra = {
  store: {
    get: (key: string): any => key,
    set: (key: string, value: any, ttl?: number): any => ttl || key || value,
    has: (key: string) => {
      key
      return false
    },
    remove: (key: string) => {
      key
    },
    size: () => 42,
    reset: () => {},
  },
}
