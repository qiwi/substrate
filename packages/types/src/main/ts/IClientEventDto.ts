/** @module @qiwi/substrate-types */
/** */

import { LogLevel } from './ILogger'
import { IDeviceInfo } from './IDeviceInfo'
import { RecursivePartial } from './helpers'

export enum EnvironmentProfile {
  CI = 'ci',
  DEV = 'development',
  TEST = 'testing',
  PROD = 'prod',
  STAGE = 'staging'
}

type TClientEventMeta = RecursivePartial<{
  appName: string
  appHost: string
  appVersion: string
  appNamespace: string,
  appConfig: Record<string, any>,
  envProfile: EnvironmentProfile,
  deviceInfo: IDeviceInfo & Record<string, any>,
}>

export type IClientEventMeta = TClientEventMeta

export interface IClientEventDto {
  message: string
  tags?: Array<string>
  code?: string
  level?: LogLevel,
  meta?: IClientEventMeta
  details?: Record<string, any>
  stacktrace?: any
}
