import {
  IPool,
  IPooledObject,
  IPooledObjectFactory,
  IPooledObjectStatus
} from '.'

const instance = String('foo')

const status: IPooledObjectStatus = IPooledObjectStatus.READY

const pooled: IPooledObject<string> = {
  ref: instance,
  status,
  activate () {},
  passivate () {},
  validate (): boolean { return true },
  destroy () {}
}

const pooledObjFactory: IPooledObjectFactory<string> = () => pooled

const pool: IPool<string> = {
  factory: pooledObjFactory,
  release (instance: string): void { void instance },
  invalidate (instance: string): void { void instance },
  borrow () { return Promise.resolve(instance) }
}

const brokenStatus: IPooledObjectStatus = 'foo' // $ExpectError
const brokenStatus2: IPooledObjectStatus = 'ready' // $ExpectError

const brokenPooled: IPooledObject<any> = { // $ExpectError
  ref: 'foo'
}

const brokenPooledObjFactory: IPooledObjectFactory<string> = () => instance // $ExpectError

const brokenPool: IPool<string> = { // $ExpectError
  factory: pooledObjFactory,
  release (instance: string): void { void instance },
  invalidate (instance: string): void { void instance }
}
