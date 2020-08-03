import { IDeviceInfo } from '.'

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
  isMobile: false,
  os: {
    name: 'MS-DOS',
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
  isMobile: true,
  os: {
    name: 123, // $ExpectError
    architecture: 12,
    family: 'qaz',
    version: undefined,
  },
}
