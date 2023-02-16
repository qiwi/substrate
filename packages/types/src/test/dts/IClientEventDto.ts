import {
  EnvironmentProfile,
  IClientEventDto,
  IClientEventMeta,
  LogLevel,
} from '.'

// EnvironmentProfile
const brokenProfile1: EnvironmentProfile = 'foo' // $ExpectError
const brokenProfile2: EnvironmentProfile = 'prod' // $ExpectError
const profile: EnvironmentProfile = EnvironmentProfile.PROD

// IClientEventMeta
const brokenMeta: IClientEventMeta = {
  appName: null, // $ExpectError
  appHost: null, // $ExpectError
  appVersion: 1234, // $ExpectError
  appNamespace: null, // $ExpectError
  envProfile: 'foo', // $ExpectError
  deviceInfo: 'foo', // $ExpectError
}

const clientEventMeta: IClientEventMeta = {
  appName: 'app',
  appHost: 'www.host',
  appVersion: 'v1',
  appNamespace: 'ci',
  envProfile: EnvironmentProfile.PROD,
  deviceInfo: {
    device: '1',
  },
}

// IClientEventDto
const brokenEventDto: IClientEventDto = {
  message: null, // $ExpectError
  tags: 1234, // $ExpectError
  code: 1234, // $ExpectError
  level: 'foo', // $ExpectError
  meta: 'foo', // $ExpectError
  details: 1234, // $ExpectError
  timestamp: true, // $ExpectError
}

const clientEventDto1: IClientEventDto = {
  message: 'foo',
  timestamp: 1_599_808_450_263,
}

const clientEventDto2: IClientEventDto = {
  message: 'foo',
  tags: ['foo'],
  code: '200',
  level: LogLevel.ERROR,
  meta: clientEventMeta,
  details: {
    foo: 'bar',
  },
}
