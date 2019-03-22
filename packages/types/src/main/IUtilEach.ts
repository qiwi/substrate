export type TUtilEachCollection = any[] | object

export type TUtilEachHandler = (value: any, key?: string | number) => void

export type TUtilEach = (
  collection: TUtilEachCollection,
  handler: TUtilEachHandler
) => void
