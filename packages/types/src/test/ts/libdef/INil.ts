import { INil, INullOrUndefined } from '.'

export const n0: INil = null
export const n1: INil = undefined
export const n2: INil = 0 // $ExpectError
export const n3: INil = '' // $ExpectError
