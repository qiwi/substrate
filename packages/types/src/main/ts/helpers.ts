export type UnionToIntersection<U> = ((U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never)

// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-265568398
export function mkenum<T extends {[index: string]: U}, U extends string> (x: T) { return x }

export type EnumType<T> = T[keyof T]

// Util to prepend a value to a Tuple from: https://stackoverflow.com/a/54607819/5308589
export type PrependTuple<A, T extends Array<any>> =
  (((a: A, ...b: T) => void) extends (...a: infer I) => void ? I : [])
