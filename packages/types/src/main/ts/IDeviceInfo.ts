import { RecursivePartial } from './helpers'

// Legacy fallback: "I" instead of "T" prefix

export type IBrowserInfo = RecursivePartial<{
  name: string | null
  version: string | null
  layout: string | null
}>

export type IOperationalSystemInfo = RecursivePartial<{
  name: string | null
  architecture: number | null
  family: string | null
  version: string | null
}>

export type IDeviceInfo = RecursivePartial<{
  browser: IBrowserInfo
  model: {
    name: string | null,
    manufacturer: string | null,
    isMobile: boolean
  },
  os: IOperationalSystemInfo
}>
