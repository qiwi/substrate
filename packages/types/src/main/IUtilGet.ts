export type TGetMethodPathParam = Array<string | number> | string

export type TGetMethodObjectParam = object

export type TGetMethodDefaultValueParam = any

export type TGetMethodResponse = any

export type TGetMethod = (
  obj: TGetMethodObjectParam,
  path: TGetMethodPathParam,
  defaultValue?: TGetMethodDefaultValueParam
) => TGetMethodResponse
