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

const wrongDeviceInfo: IDeviceInfo = 'foo' // $ExpectError
const wrongDeviceInfo1: IDeviceInfo = 123 // $ExpectError
