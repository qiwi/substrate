import { IDeviceInfo, IBrowserInfo } from '.'

const deviceInfo: IDeviceInfo = {
  browser: {
    name: 'foo',
    version: 'bar',
    layout: 'baz',
  },
  model: {
    name: null,
    manufacturer: null,
  },
  os: {
    architecture: undefined,
    family: 'qaz',
    version: undefined,
  },
}

const wrongDeviceInfo: IDeviceInfo = {
  browser: {
    name: 123, // $ExpectError
    version: 'bar',
    layout: 'baz',
  },
  model: {
    product: {}, // $ExpectError
    manufacturer: null,
  },
  os: {
    architecture: 12,
    family: 'qaz',
    version: undefined,
  },
}
