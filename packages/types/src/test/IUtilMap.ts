import { TUtilMap, lodashMap, underscoreMap } from './index';

const brokenUtilMap: TUtilMap = (collection: object, handler: (value: string, key: boolean, collection: object) => object): any[] => [handler(JSON.stringify(collection), false, collection)]; // $ExpectError
const utilMap: TUtilMap = (collection: object, handler: (value: string, key: string, collection: object) => object): any[] => [handler(JSON.stringify(collection), 'key', collection)];
const lodashUtilMap: TUtilMap = lodashMap;
const underscoreUtilMap: TUtilMap = underscoreMap;
