/** @module @qiwi/substrate-types */
/** */

import { mkenum, enumType } from './helpers'

export type ILoggerMethod = (...args: any[]) => void

export const LogLevel = mkenum({
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
  TRACE: 'trace'
})

export type LogLevel = enumType<typeof LogLevel>

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
