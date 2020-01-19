/** @module @qiwi/substrate-types */
/** */

// https://github.com/microsoft/TypeScript/issues/17572
export type Abstract<T= {}> = Function & { prototype: T }

export type IConstructor<T= {}, A extends any[] = any[]> = new (...args: A) => T

export type IClass<T= {}> = Abstract<T> & IConstructor<T>

export type IConstructable<T= {}, A extends any[] = any[]> = IConstructor<T, A>
