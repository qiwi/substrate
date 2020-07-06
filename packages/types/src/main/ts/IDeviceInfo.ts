export interface IBrowserInfo {
  name?: string
  version?: string | null
  layout?: string | null
}

export interface IOperationalSystemInfo {
  architecture?: number
  family?: string | null
  version?: string | null
}

export interface IDeviceInfo {
  browser: IBrowserInfo
  model: {
    product?: string | null,
    manufacturer?: string | null
  },
  os?: IOperationalSystemInfo
}
