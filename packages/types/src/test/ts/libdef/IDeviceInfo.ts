import { IDeviceInfo, IDeviceInfoStrict } from '.'

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

const wrongDeviceInfo: IDeviceInfo = 'foo' // $ExpectError
const wrongDeviceInfo1: IDeviceInfo = 123 // $ExpectError

const deviceInfoStrict: IDeviceInfoStrict = {
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

const wrongDeviceInfoStrict: IDeviceInfoStrict = {
  browser: {
    name: 1234, // $ExpectError
    version: 'bar',
    layout: 'baz',
  },
  model: {
    name: 123, // $ExpectError
    manufacturer: null,
  },
  isMobile: false,
  os: {
    name: 'MS-DOS',
    architecture: {}, // $ExpectError
    family: 'qaz',
    version: undefined,
  },
}
