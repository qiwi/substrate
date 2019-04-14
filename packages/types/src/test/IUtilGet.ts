import { TUtilGet, lodashGet } from './index'

const brokenUtilGet: TUtilGet = (obj: object, path: any[], defaultValue?: any) => { obj || path || defaultValue; }; // $ExpectError
const utilGet: TUtilGet = (obj: object, path: Array<string | number> | string, defaultValue?: any) => {
  obj || path;
  return defaultValue;
};
const lodashUtilGet: TUtilGet = lodashGet;
