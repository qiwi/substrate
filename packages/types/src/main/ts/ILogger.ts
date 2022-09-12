export type ILoggerMethod = (...args: any[]) => void

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace',

  // Lowercased aliases
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
  trace = 'trace',
}

export interface ILogger {
  trace: ILoggerMethod
  debug: ILoggerMethod
  info: ILoggerMethod
  log: ILoggerMethod // Legacy, use .info() instead
  warn: ILoggerMethod
  error: ILoggerMethod
  fatal?: ILoggerMethod

  [key: string]: any

  [key: number]: any
}
