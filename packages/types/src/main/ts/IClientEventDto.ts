/** @module @qiwi/substrate-types */
/** */

import { RecursivePartial } from './helpers'
import { IDeviceInfo } from './IDeviceInfo'
import { LogLevel } from './ILogger'

export enum EnvironmentProfile {
  CI = 'ci',
  DEV = 'development',
  TEST = 'testing',
  PROD = 'prod',
  STAGE = 'staging',
}

type TClientEventMeta = RecursivePartial<{
  appName: string
  appHost: string
  appVersion: string
  appNamespace: string
  appConfig: Record<string, any>
  envProfile: EnvironmentProfile
  deviceInfo: IDeviceInfo & Record<string, any>
}>

export type IClientEventMeta = TClientEventMeta

export interface IClientEventDto {
  message: string
  tags?: Array<string>
  code?: string
  level?: LogLevel
  meta?: IClientEventMeta
  details?: Record<string, any>
  stacktrace?: any
  timestamp?: number | string
}
