import { ILoggerMethod, ILogger, TLogLevel } from './index';

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
