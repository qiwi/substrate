export type TUtilMapCollection = any[] | object

export type TUtilMapHandler = (
  value: any,
  key?: string | number,
  collection?: TUtilMapCollection,
) => any

export type TUtilMap = (
  collection: TUtilMapCollection,
  handler: TUtilMapHandler,
) => any[]
