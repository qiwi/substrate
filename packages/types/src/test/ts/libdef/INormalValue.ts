import {
  INormalValue,
  IIdentified,
  IMetaTyped,
  IMetaTypedValue,
  IWrappedValue,
} from '.'

export const identified: IIdentified = { id: 'foo' }
export const brokenIdentified: IIdentified = { id: undefined } // $ExpectError

export const meta: IMetaTyped = { meta: {}, type: 'bar' }
export const brokenMeta: IMetaTyped = { meta: 'foo' } // $ExpectError

export const valueWithMeta: IMetaTypedValue<string, string, {}> = { value: 'foo', type: 'bar', meta: {} }
export const brokenValueWithMeta: IMetaTypedValue = { meta: {} } // $ExpectError

export const wrapped1: IWrappedValue<string, {foo: string}> = { value: 'v', foo: 'foo' }
export const wrapped2: IWrappedValue<string, [{foo: string}, {bar: number}]> = { value: 'v', foo: 'foo', bar: 1 }

export const normal: INormalValue<string, string, {foo: string}> = { value: '', type: 'foo', meta: { foo: 'bar' }, id: 1 }
