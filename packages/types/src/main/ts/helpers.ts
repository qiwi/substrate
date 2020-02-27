export type UnionToIntersection<U> = ((U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never)

// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-265568398
export function mkenum<T extends {[index: string]: U}, U extends string> (x: T) { return x }

export type enumType<T> = T[keyof T]
