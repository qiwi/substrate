import { IStorageExtra, IStoreExtra } from '.'

const storage = {
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
}
const withStore: IStoreExtra = { store: storage }
const withStorage: IStorageExtra = { storage }
