export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-265568398
// eslint-disable-next-line
export function mkenum<T extends { [index: string]: U }, U extends string>(
  x: T,
): T {
  return x
}

export type EnumType<T> = T[keyof T]

// Util to prepend a value to a Tuple from: https://stackoverflow.com/a/54607819/5308589
export type PrependTuple<A, T extends Array<any>> = ((
  a: A,
  ...b: T
) => void) extends (...a: infer I) => void
  ? I
  : []

export type Extends<T, E, R1, R2> = T extends E ? R1 : R2

export type ExtendsOrNever<T, E> = Extends<T, E, T, never>

// https://stackoverflow.com/a/51365037
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P]
}

// prettier-ignore
export type Prev<T extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62][T];
