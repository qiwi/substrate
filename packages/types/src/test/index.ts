import { forEach as lodashEach, map as lodashMap, set as lodashSet, get as lodashGet } from 'lodash';
import { each as underscoreEach, map as underscoreMap } from 'underscore';
import { Promise as BluebirdPromise } from 'bluebird';

import {
  IStringMap,
  IAnyMap,
  IEventEmitter,
  ILoggerMethod,
  ILogger,
  TLogLevel,
  TUtilGet,
  TUtilSet,
  TUtilEach,
  TUtilMap,
  ICloneable,
  ICurrency,
  IPromise,
  IPromiseConstructor,
  IStorage,
  IMoney
} from '../main';

// IStringMap
const map: IStringMap = {
  foo: 1 // $ExpectError
};

// IAnyMap
const anyMap1: IAnyMap = {
  one: 1
};

const anyMap2: IAnyMap = {
  1: 'two'
};

const anyMap3: IAnyMap = {
  0.1: 2
};

const anyMap4: IAnyMap = {
  true: 1
};

const anyMap5: IAnyMap = {
  Symbol("qwe"): 1; // $ExpectError
};

// IEventEmitter
const brokenEmitter: IEventEmitter = {  // $ExpectError
  on(event: string, handler: (...args: any[]) => void) { handler(event); }
};

const emitter: IEventEmitter = {
  emit(event: string, ...args: any[]) { return void event && args; },
  on(event: string, handler: (...args: any[]) => void) { handler(event); },
  off(event: string, handler: (...args: any[]) => void) { handler(event); },
  once(event: string, handler: (...args: any[]) => void) { handler(event); }
};

// ILogger

const brokenLogLevel: TLogLevel = 'info'; // $ExpectError
const traceLogLevel: TLogLevel = 5e3;

const brokenLogMethod: ILoggerMethod = null; // $ExpectError
const logMethod: ILoggerMethod = () => undefined;

const brokenLogger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  error: null // $ExpectError
};

const logger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  error: logMethod,
  custom: () => 'foo'
};

const legacyLogger: ILogger = console;

// TUtilGet

const brokenUtilGet: TUtilGet = (obj: object, path: any[], defaultValue?: any) => { obj || path || defaultValue; }; // $ExpectError
const utilGet: TUtilGet = (obj: object, path: Array<string | number> | string, defaultValue?: any) => {
  obj || path;
  return defaultValue;
};
const lodashUtilGet: TUtilGet = lodashGet;

// TUtilSet

const brokenUtilSet: TUtilSet = (obj: object, path: any[], value: boolean) => { obj || path || value; }; // $ExpectError
const utilSet: TUtilSet = (obj: object, path: Array<string | number> | string, value: boolean) => { obj || path || value; };
const lodashUtilSet: TUtilSet = lodashSet;

// TUtilEach

const brokenUtilEach: TUtilEach = (collection: object, handler: (value: string, key: boolean, collection: object) => void) =>  { handler || collection; }; // $ExpectError
const utilEach: TUtilEach = (collection: object, handler: (value: string, key: number, collection: object) => void): object => {
  handler(JSON.stringify(collection), 1, collection);
  return collection;
};
const lodashUtilEach: TUtilEach = lodashEach;
const underscoreUtilEach: TUtilEach = underscoreEach;

// TUtilMap

const brokenUtilMap: TUtilMap = (collection: object, handler: (value: string, key: boolean, collection: object) => object): any[] => [handler(JSON.stringify(collection), false, collection)]; // $ExpectError
const utilMap: TUtilMap = (collection: object, handler: (value: string, key: string, collection: object) => object): any[] => [handler(JSON.stringify(collection), 'key', collection)];
const lodashUtilMap: TUtilMap = lodashMap;
const underscoreUtilMap: TUtilMap = underscoreMap;

// ICloneable
const cloneable: ICloneable<string> = {
  clone(): string { return 'clone'; }
};

cloneable.clone("qwe"); // $ExpectError
cloneable.clone(123); // $ExpectError
cloneable.clone({ hello: "hello", world: "world"}); // $ExpectError

// ICurrency
const brokenCurrency: ICurrency = 123; // $ExpectError
const brokenCurrency2: ICurrency = {}; // $ExpectError
const currency: ICurrency = 'foo';

// IPromise

const executor = (resolve: (value: number) => void, reject: (value: number) => void) => {
  const value = Math.random();
  if (Math.random() > 0.5) {
    resolve(value);
  } else {
    reject(value);
  }
};

const nativePromiseConstructor: IPromiseConstructor = Promise;
const bluebirdPromiseConstructor: IPromiseConstructor = BluebirdPromise;
const nativePromise: IPromise<number> = new Promise<number>(executor);
const bluebirdPromise: IPromise<number> = new BluebirdPromise<number>(executor);

// IStorage

const storage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => {
    key;
    return false;
  },
  remove: (key: string) => {
    key;
  },
  size: () => 42,
  reset: () => {}
};

const brokenStorage: IStorage = {
  get: (key: string): any => key,
  set: (key: string, value: any, ttl?: number): any => ttl || key || value,
  has: (key: string) => {  // $ExpectError
    key;
    return 42;
  },
  remove: (key: string) => {
    key;
  },
  size: () => 42,
  reset: () => {}
};

// IMoney

const brokenMoney: IMoney = {
  value: 123,
  toString() { // $ExpectError
    return 123;
  }
};

const brokenMoney2: IMoney = { // $ExpectError
  currency: 'bar',
};

const brokenMoney3: IMoney = {
  value: 'foo', // $ExpectError
  currency: 123, // $ExpectError
};

const brokenMoney4: IMoney = {
  value: {}, // $ExpectError
  currency: 'bar',
};

const money: IMoney = {
  value: 123,
  currency: 'RUB',
  toString() {
    return this.value.toString();
  }
};
