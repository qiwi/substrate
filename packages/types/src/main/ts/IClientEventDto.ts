/** @module @qiwi/substrate-types */
/** */

import { LogLevel } from './ILogger'

export enum EnvironmentProfile {
  CI = 'ci',
  DEV = 'development',
  TEST = 'testing',
  PROD = 'prod',
  STAGE = 'staging'
}

export interface IClientEventMeta {
  appName: string
  appHost: string
  appVersion: string
  appNamespace: string,
  appConfig?: Record<string, any>,
  envProfile: EnvironmentProfile,
  deviceInfo?: Record<string, any>,
}

export interface IClientEventDto {
  message: string
  tags?: Array<string>
  code?: string
  level?: LogLevel,
  meta?: IClientEventMeta
  details?: Record<string, any>
}
