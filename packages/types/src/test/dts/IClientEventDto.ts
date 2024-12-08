import {
  EnvironmentProfile,
  IClientEventDto,
  IClientEventMeta,
  LogLevel,
} from '.'

// EnvironmentProfile
// @ts-expect-error
const brokenProfile1: EnvironmentProfile = 'foo'
// @ts-expect-error
const brokenProfile2: EnvironmentProfile = 'prod'
const profile: EnvironmentProfile = EnvironmentProfile.PROD

// IClientEventMeta
const brokenMeta: IClientEventMeta = {
  // @ts-expect-error
  appName: null,
  // @ts-expect-error
  appHost: null,
  // @ts-expect-error
  appVersion: 1234,
  // @ts-expect-error
  appNamespace: null,
  // @ts-expect-error
  envProfile: 'foo',
  // @ts-expect-error
  deviceInfo: 'foo',
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
  // @ts-expect-error
  message: null,
  // @ts-expect-error
  tags: 1234,
  // @ts-expect-error
  code: 1234,
  // @ts-expect-error
  level: 'foo',
  // @ts-expect-error
  meta: 'foo',
  // @ts-expect-error
  details: 1234,
  // @ts-expect-error
  timestamp: true,
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
