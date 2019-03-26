import {
  IStringMap,
  IAnyMap,
  IEventEmitter,
  ILoggerMethod,
  ILogger,
  TLogLevel,
  TUtilGet,
  ICloneable
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

const brokenUtilGet: TUtilGet = (obj: object, path: any[], defaultValue?: any) => undefined; // $ExpectError
const utilGet: TUtilGet = (obj: object, path: Array<string | number> | string, defaultValue?: any) => obj || path || defaultValue;

// ICloneable
const cloneable: ICloneable = {
  clone(): any { return 'clone'; }
};

cloneable.clone("qwe"); // $ExpectError
cloneable.clone(123); // $ExpectError
cloneable.clone({ hello: "hello", world: "world"}); // $ExpectError
