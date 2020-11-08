/** @module @qiwi/substrate-types */
/** */

// https://github.com/microsoft/TypeScript/issues/17572
export type Abstract<T = object> = Function & { prototype: T }

export type IConstructor<T = object, A extends any[] = any[]> = new (
  ...args: A
) => T

export type IClass<T = object> = Abstract<T> & IConstructor<T>

export type IConstructable<T = object, A extends any[] = any[]> = IConstructor<
  T,
  A
>
