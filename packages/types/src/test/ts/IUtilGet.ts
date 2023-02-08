import { get as lodashGet } from 'lodash'

import { TUtilGet } from '.'

const brokenUtilGet: TUtilGet = ( // $ExpectError
  obj: object,
  path: any[],
  defaultValue?: any,
) => obj || path || defaultValue

const utilGet: TUtilGet = (
  obj: object,
  path: Array<string | number> | string,
  defaultValue?: any,
) => {
  void (obj || path)
  return defaultValue
}
const lodashUtilGet: TUtilGet = lodashGet
