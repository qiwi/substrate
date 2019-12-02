import {IPromise} from './export'

export interface IPooledObject<T> {
  ref: T,
  activate(): void
  passivate(): void
  destroy(): void,
  validate(): boolean
  [key: string]: any
}

export interface IPooledObjectFactory<T> {
  (...args: any[]): IPooledObject<T>
}

export interface IPool<T> {
  factory: IPooledObjectFactory<T>
  borrow(): IPromise<T>
  release(instance: T): void
  invalidate(instance: T): void
  [key: string]: any
}
