import {
  IPool,
  IPooledObject,
  IPooledObjectFactory,
  IPooledObjectStatus,
} from '.'

const instance = String('foo')

const status: IPooledObjectStatus = IPooledObjectStatus.READY

const pooled: IPooledObject<string> = {
  ref: instance,
  status,
  activate () {},
  passivate () {},
  validate (): boolean {
    return true
  },
  destroy () {},
}

const pooledObjFactory: IPooledObjectFactory<string> = () => pooled

const pool: IPool<string> = {
  factory: pooledObjFactory,
  release (instance: string): void {
    void instance
  },
  invalidate (instance: string): void {
    void instance
  },
  borrow () {
    return Promise.resolve(instance)
  },
}

// @ts-expect-error
const brokenStatus: IPooledObjectStatus = 'foo'
// @ts-expect-error
const brokenStatus2: IPooledObjectStatus = 'ready'

// @ts-expect-error
const brokenPooled: IPooledObject<any> = {
  ref: 'foo',
}

// @ts-expect-error
const brokenPooledObjFactory: IPooledObjectFactory<string> = () => instance

// @ts-expect-error
const brokenPool: IPool<string> = {
  factory: pooledObjFactory,
  release (instance: string): void {
    void instance
  },
  invalidate (instance: string): void {
    void instance
  },
}
