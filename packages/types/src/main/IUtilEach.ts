export type TUtilEachCollection = any[] | object

export type TUtilEachHandler = (value: any, key?: string | number, collection?: TUtilEachCollection) => void

export type TUtilEach = (
  collection: TUtilEachCollection,
  handler: TUtilEachHandler
) => TUtilEachCollection
