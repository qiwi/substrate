export interface IBrowserInfo {
  name?: string | null
  version?: string | null
  layout?: string | null
}

export interface IOperationalSystemInfo {
  name?: string | null
  architecture?: number | null
  family?: string | null
  version?: string | null
}

export interface IDeviceInfo {
  browser?: IBrowserInfo
  model?: {
    name?: string | null,
    manufacturer?: string | null
  },
  os?: IOperationalSystemInfo
}
