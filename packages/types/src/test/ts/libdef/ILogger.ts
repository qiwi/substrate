import { ILogger, ILoggerMethod, LogLevel } from '.'

const brokenLogLevel: LogLevel = 'unknown' // $ExpectError
const traceLogLevel: LogLevel = LogLevel.TRACE
const traceLogLevel2: LogLevel = LogLevel.trace
const debugLogLevel: LogLevel = 'debug' // $ExpectError
const infoLogLevel: LogLevel = 'INFO' // $ExpectError

LogLevel.TRACE === LogLevel.trace

const brokenLogMethod: ILoggerMethod = null // $ExpectError
const logMethod: ILoggerMethod = () => {}

const brokenLogger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  error: null, // $ExpectError
}

const logger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  error: logMethod,
  custom: () => 'foo',
}

const legacyLogger: ILogger = console
