import { forEach as lodashEach } from 'lodash'
import { each as underscoreEach } from 'underscore'
import { TUtilEach } from '.'

const brokenUtilEach: TUtilEach = (collection: object, handler: (value: string, key: boolean, collection: object) => void) => { handler || collection } // $ExpectError
const utilEach: TUtilEach = (collection: object, handler: (value: string, key: number, collection: object) => void): object => {
  handler(JSON.stringify(collection), 1, collection)
  return collection
}
const lodashUtilEach: TUtilEach = lodashEach
const underscoreUtilEach: TUtilEach = underscoreEach
