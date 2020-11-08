import { get as lodashSet } from 'lodash'

import { TUtilSet } from '.'

const brokenUtilSet: TUtilSet = (obj: object, path: any[], value: boolean) => { // $ExpectError
  obj || path || value
}
const utilSet: TUtilSet = (
  obj: object,
  path: Array<string | number> | string,
  value: boolean,
) => void (obj || path || value)
const lodashUtilSet: TUtilSet = lodashSet
