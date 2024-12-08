import {
  IIdentified,
  IMetaTyped,
  IMetaTypedValue,
  IMeted,
  IMetedValue,
  INormalValue,
  ITyped,
  ITypedValue,
  IWrappedValue,
} from '.'

export const identified: IIdentified = { id: 'foo' }
// @ts-expect-error
export const brokenIdentified: IIdentified = { id: undefined }

export const typed: ITyped<string> = { type: 'foo' }
export const typedValue: ITypedValue<number, string> = { value: 1, type: 'foo' }
export const brokenTypedValue: ITypedValue<number, string> = {
  // @ts-expect-error
  value: null,
  // @ts-expect-error
  type: undefined,
}

export const meted: IMeted = { meta: {} }
export const metedValue: IMetedValue<number, Object> = { value: 1, meta: {} }

export const metaTyped: IMetaTyped = { meta: {}, type: 'bar' }
// @ts-expect-error
export const brokenMetaTyped: IMetaTyped = { meta: 'foo' }

export const metaTypedValue: IMetaTypedValue<string, string, Object> = {
  value: 'foo',
  type: 'bar',
  meta: {},
}
// @ts-expect-error
export const brokenMetaTypedValue: IMetaTypedValue = { meta: {} }

export const wrapped1: IWrappedValue<string, { foo: string }> = {
  value: 'v',
  foo: 'foo',
}
export const wrapped2: IWrappedValue<
  string,
  [{ foo: string }, { bar: number }]
> = { value: 'v', foo: 'foo', bar: 1 }

export const normal: INormalValue<string, string, { foo: string }> = {
  value: '',
  type: 'foo',
  meta: { foo: 'bar' },
  id: 1,
}
