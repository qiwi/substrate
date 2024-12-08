import { INil, INilable,INullable, INullOrUndefined } from '.'

export const n0: INil = null
export const n1: INullOrUndefined = undefined
// @ts-expect-error
export const n2: INil = 0
// @ts-expect-error
export const n3: INil = ''

export const n5: INullable<string> = null
export const n6: INullable<string> = 'foo'
// @ts-expect-error
export const n7: INullable<string> = 1
// @ts-expect-error
export const n8: INullable<string> = undefined

export const n9: INilable<number> = undefined
export const n10: INilable<number> = null
export const n11: INilable<number> = 1
// @ts-expect-error
export const n12: INilable<number> = 'foo'
