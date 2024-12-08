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

// @ts-expect-error
const wrongDeviceInfo: IDeviceInfo = 'foo'
// @ts-expect-error
const wrongDeviceInfo1: IDeviceInfo = 123

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
    // @ts-expect-error
    name: 1234,
    version: 'bar',
    layout: 'baz',
  },
  model: {
    // @ts-expect-error
    name: 123,
    manufacturer: null,
  },
  isMobile: false,
  os: {
    name: 'MS-DOS',
    // @ts-expect-error
    architecture: {},
    family: 'qaz',
    version: undefined,
  },
}
