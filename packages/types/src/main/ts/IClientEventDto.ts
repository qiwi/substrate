
/** @module @qiwi/substrate-types */
/** */

export type ClientEventLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error'

export type EnvironmentProfile = 'prod' | 'staging' | 'ci' | 'testing' | 'development'

export interface IClientEventMeta {
  appName: string
  appHost: string
  appVersion: string
  appNamespace: string,
  envProfile: EnvironmentProfile,
  deviceInfo?: Record<string, any>,
  appConfig?: Record<string, any>,
}

export interface IClientEventDto {
  message: string
  tags?: Array<string>
  code?: string
  level?: ClientEventLevel
  meta?: IClientEventMeta
  details?: Record<string, any>
}
