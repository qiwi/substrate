import { get as lodashSet } from 'lodash'

import { TUtilSet } from '.'

// @ts-expect-error
const brokenUtilSet: TUtilSet = (obj: object, path: any[], value: boolean) => {
  obj || path || value
}
const utilSet: TUtilSet = (
  obj: object,
  path: Array<string | number> | string,
  value: boolean,
) => void (obj || path || value)
const lodashUtilSet: TUtilSet = lodashSet
