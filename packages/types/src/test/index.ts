import { Promise as BluebirdPromise } from 'bluebird';

import {
  IStringMap,
  IEventEmitter,
  ILoggerMethod,
  ILogger,
  TLogLevel,
  TUtilGet,
  IPromise,
  IPromiseInstance
} from '../main';

// IStringMap
const map: IStringMap = {
  foo: 1 // $ExpectError
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

const brokenUtilGet: TUtilGet = (obj: object, path: any[], defaultValue?: any) => undefined; // $ExpectError
const utilGet: TUtilGet = (obj: object, path: Array<string | number> | string, defaultValue?: any) => obj || path || defaultValue;

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
