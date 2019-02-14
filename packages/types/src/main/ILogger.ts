// Inherits log4j logging levels contract and Logback values

export type ILoggerMethod = (...args: any[]) => undefined | null

export type TLogLevel = number

export interface ILogger {
  trace: ILoggerMethod,
  debug: ILoggerMethod,
  info: ILoggerMethod,
  log: ILoggerMethod,
  warn: ILoggerMethod,
  error: ILoggerMethod,
  fatal?: ILoggerMethod,

  [key: string]: any
  [key: number]: any
}
