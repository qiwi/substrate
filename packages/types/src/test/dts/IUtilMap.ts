import { map as lodashMap } from 'lodash'
import { map as underscoreMap } from 'underscore'

import { TUtilMap } from '.'

const brokenUtilMap: TUtilMap = ( // $ExpectError
  collection: object,
  handler: (value: string, key: boolean, collection: object) => object,
): any[] => [handler(JSON.stringify(collection), false, collection)]

const utilMap: TUtilMap = (
  collection: object,
  handler: (value: string, key: string, collection: object) => object,
): any[] => [handler(JSON.stringify(collection), 'key', collection)]

const lodashUtilMap: TUtilMap = lodashMap

const underscoreUtilMap: TUtilMap = underscoreMap
