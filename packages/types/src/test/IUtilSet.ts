import { TUtilSet, lodashSet } from './index';

const brokenUtilSet: TUtilSet = (obj: object, path: any[], value: boolean) => { obj || path || value; }; // $ExpectError
const utilSet: TUtilSet = (obj: object, path: Array<string | number> | string, value: boolean) => { obj || path || value; };
const lodashUtilSet: TUtilSet = lodashSet;
