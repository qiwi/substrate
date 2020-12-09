export type TUtilGetPath = Array<string | number> | string

export type TUtilGetObject = object

export type TUtilGetDefaultValue = any

export type TUtilGetResponse = any

export type TUtilGet = (
  obj: TUtilGetObject,
  path: TUtilGetPath,
  defaultValue?: TUtilGetDefaultValue,
) => TUtilGetResponse
