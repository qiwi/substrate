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
  IPromiseInstance
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

const brokenLogMethod: ILoggerMethod = () => 'foo'; // $ExpectError
const logMethod: ILoggerMethod = () => undefined;

const brokenLogger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  error: () => 'foo' // $ExpectError
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

const nativePromise: IPromise = Promise;
const bluebirdPromise: IPromise = BluebirdPromise;
const nativePromiseInstance: IPromiseInstance = new Promise(executor);
const bluebirdPromiseInstance: IPromiseInstance = new Promise(executor);
