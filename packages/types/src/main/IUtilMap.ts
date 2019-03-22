export type TUtilMapCollection = any[] | object

export type TUtilMapHandler = (value: any, key?: string | number) => any

export type TUtilMap = (
  collection: TUtilMapCollection,
  handler: TUtilMapHandler
) => any[]
