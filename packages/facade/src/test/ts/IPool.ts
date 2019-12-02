import { IPool, IPooledObject, IPooledObjectFactory } from './index'

const instance = new String('foo')

const pooled: IPooledObject<String> = {
  ref: instance,
  activate() {},
  passivate() {},
  validate(): boolean { return true },
  destroy() {}
}

const pooledObjFactory: IPooledObjectFactory<String> = () => pooled

const pool: IPool<String> = {
  factory: pooledObjFactory,
  release(instance: String): void { void instance},
  invalidate(instance: String): void {void instance},
  borrow () { return Promise.resolve(instance)}
}

const brokenPooled: IPooledObject<any> = { // $ExpectError
  ref: 'foo'
}

const brokenPooledObjFactory: IPooledObjectFactory<String> = () => instance // $ExpectError

const brokenPool: IPool<String> = { // $ExpectError
  factory: pooledObjFactory,
  release(instance: String): void { void instance},
  invalidate(instance: String): void {void instance},
}
