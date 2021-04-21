import { INil, INullOrUndefined, INullable, INilable } from '.'

export const n0: INil = null
export const n1: INullOrUndefined = undefined
export const n2: INil = 0   // $ExpectError
export const n3: INil = ''  // $ExpectError

export const n5: INullable<string> = null
export const n6: INullable<string> = 'foo'
export const n7: INullable<string> = 1 // $ExpectError
export const n8: INullable<string> = undefined // $ExpectError

export const n9: INilable<number> = undefined
export const n10: INilable<number> = null
export const n11: INilable<number> = 1
export const n12: INilable<number> = 'foo' // $ExpectError
