import { IExtra } from '.'

interface Some extends IExtra<'some', any> {
  other: number
}

export const extra1: IExtra<'foo', string> = { foo: '1' }
export const extra2: Some = { some: '1', other: 1 }

// @ts-expect-error
export const brokenExtra1: IExtra<'bar', string> = { foo: '1' }
// @ts-expect-error
export const brokenExtra2: IExtra<'foo', string> = { foo: 1 }
