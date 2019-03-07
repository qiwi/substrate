import {
  IStringMap,
  IEventEmitter,
  ILoggerMethod,
  ILogger,
  TLogLevel,
  TGetMethod,
  TGetMethodObjectParam,
  TGetMethodPathParam
} from '../main';

// IStringMap
const map: IStringMap = {
  foo: 1 // $ExpectError
};

// IEventEmitter
const brokenEmitter: IEventEmitter = {  // $ExpectError
  on(event: string, handler: (...args: any[]) => void) {
    handler(event);
  }
};

const emitter: IEventEmitter = {
  emit(event: string, ...args: any[]) {
    return void event && args;
  },
  on(event: string, handler: (...args: any[]) => void) {
    handler(event);
  },
  off(event: string, handler: (...args: any[]) => void) {
    handler(event);
  },
  once(event: string, handler: (...args: any[]) => void) {
    handler(event);
  }
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

// TUtilget

const brokenObjParam: TGetMethodObjectParam = 4; // $ExpectError
const objParam: TGetMethodObjectParam = { a: 1 };

const brokenPathParam: TGetMethodPathParam = [true, undefined, null]; // $ExpectError
const pathParam: TGetMethodPathParam = ['b', 'c'];

const brokenGetMethod: TGetMethod = (obj: object, path: any[], defaultValue?: any) => undefined; // $ExpectError
const getMethod: TGetMethod = (obj: object, path: Array<string | number> | string, defaultValue?: any) => obj || path || defaultValue;
