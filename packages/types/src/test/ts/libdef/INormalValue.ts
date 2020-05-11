import {
  INormalValue,
  IIdentified,
  IMetaTyped,
  IMetaTypedValue,
  IWrappedValue,
  ITyped,
  ITypedValue,
  IMeted,
  IMetedValue,
} from '.'

export const identified: IIdentified = { id: 'foo' }
export const brokenIdentified: IIdentified = { id: undefined } // $ExpectError

export const typed: ITyped<string> = { type: 'foo' }
export const typedValue: ITypedValue<number, string> = { value: 1, type: 'foo' }
export const brokenTypedValue: ITypedValue<number, string> = { value: null, type: undefined } // $ExpectError

export const meted: IMeted = { meta: {} }
export const metedValue: IMetedValue<number, {}> = { value: 1, meta: {} }

export const metaTyped: IMetaTyped = { meta: {}, type: 'bar' }
export const brokenMetaTyped: IMetaTyped = { meta: 'foo' } // $ExpectError

export const metaTypedValue: IMetaTypedValue<string, string, {}> = { value: 'foo', type: 'bar', meta: {} }
export const brokenMetaTypedValue: IMetaTypedValue = { meta: {} } // $ExpectError

export const wrapped1: IWrappedValue<string, {foo: string}> = { value: 'v', foo: 'foo' }
export const wrapped2: IWrappedValue<string, [{foo: string}, {bar: number}]> = { value: 'v', foo: 'foo', bar: 1 }

export const normal: INormalValue<string, string, {foo: string}> = { value: '', type: 'foo', meta: { foo: 'bar' }, id: 1 }
