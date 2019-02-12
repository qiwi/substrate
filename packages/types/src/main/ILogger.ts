// Inherits log4j logging levels contract and Logback values

type ILoggerMethod = (...args: any[]) => undefined | null

type TLogLevel = number

interface ILogger {
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

export {
  ILoggerMethod,
  TLogLevel,
  ILogger
}
