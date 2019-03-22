import {
  IStringMap,
  IEventEmitter,
  ILoggerMethod,
  ILogger,
  TLogLevel,
  TUtilGet,
  TUtilSet,
  TUtilEach,
  TUtilMap
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

const brokenUtilGet: TUtilGet = (obj: object, path: any[], defaultValue?: any) => { obj || path || defaultValue; }; // $ExpectError
const utilGet: TUtilGet = (obj: object, path: Array<string | number> | string, defaultValue?: any) => {
  obj || path;
  return defaultValue;
};

// TUtilSet

const brokenUtilSet: TUtilSet = (obj: object, path: any[], value: boolean) => { obj || path || value; }; // $ExpectError
const utilSet: TUtilSet = (obj: object, path: Array<string | number> | string, value: boolean) => { obj || path || value; };

// TUtilEach

const brokenUtilEach: TUtilEach = (collection: object, handler: (value: string, key: boolean) => void) =>  { handler || collection; }; // $ExpectError
const utilEach: TUtilEach = (collection: object, handler: (value: string) => void) => { handler(JSON.stringify(collection)); };

// TUtilMap

const brokenUtilMap: TUtilMap = (collection: object, handler: (value: string, key: boolean) => object) => [handler(JSON.stringify(collection), null)]; // $ExpectError
const utilMap: TUtilMap = (collection: object, handler: (value: string, key: string) => object) => [handler(JSON.stringify(collection), 'key')];
