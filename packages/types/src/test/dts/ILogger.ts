import { ILogger, ILoggerMethod, LogLevel } from '.'

// @ts-expect-error
const brokenLogLevel: LogLevel = 'unknown'
const traceLogLevel: LogLevel = LogLevel.TRACE
const traceLogLevel2: LogLevel = LogLevel.trace
// @ts-expect-error
const debugLogLevel: LogLevel = 'debug'
// @ts-expect-error
const infoLogLevel: LogLevel = 'INFO'

const aliasmatch = LogLevel.TRACE === LogLevel.trace

// @ts-expect-error
const brokenLogMethod: ILoggerMethod = null
const logMethod: ILoggerMethod = () => {}

const brokenLogger: ILogger = {
  trace: logMethod,
  debug: logMethod,
  info: logMethod,
  log: logMethod,
  warn: logMethod,
  // @ts-expect-error
  error: null,
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
