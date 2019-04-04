// Inherits log4j logging levels contract and Logback values

export type ILoggerMethod = (...args: any[]) => void

export type TLogLevel = number

export interface ILogger {
  trace: ILoggerMethod,
  debug: ILoggerMethod,
  info: ILoggerMethod,
  log: ILoggerMethod, // Legacy, use .info() instead
  warn: ILoggerMethod,
  error: ILoggerMethod,
  fatal?: ILoggerMethod,

  [key: string]: any
  [key: number]: any
}
