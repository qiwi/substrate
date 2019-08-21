export type TUtilSetPath = Array<string | number> | string

export type TUtilSetObject = object

export type TUtilSetValue = any

export type TUtilSet = (
  obj: TUtilSetObject,
  path: TUtilSetPath,
  value: TUtilSetValue
) => void
