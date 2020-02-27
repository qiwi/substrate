import { ClientEventLevel, IClientEventMeta, IClientEventDto } from '.'

// ClientEventLevel
const brokenLevel: ClientEventLevel = 'foo' // $ExpectError
const level: ClientEventLevel = 'error'

// IClientEventMeta
const brokenMeta: IClientEventMeta = {
  appName: null, // $ExpectError
  appHost: null, // $ExpectError
  appVersion: 1234, // $ExpectError
  appNamespace: null, // $ExpectError
  envProfile: 'foo', // $ExpectError
  deviceInfo: 'foo' // $ExpectError
}

const clientEventMeta: IClientEventMeta = {
  appName: 'app',
  appHost: 'www.host',
  appVersion: 'v1',
  appNamespace: 'ci',
  envProfile: 'prod',
  deviceInfo: {
    device: '1'
  }
}

// IClientEventDto
const brokenEventDto: IClientEventDto = {
  message: null, // $ExpectError
  tags: 1234, // $ExpectError
  code: 1234, // $ExpectError
  level: 'foo', // $ExpectError
  meta: 'foo', // $ExpectError
  details: 1234 // $ExpectError
}

const clientEventDto1: IClientEventDto = {
  message: 'foo'
}

const clientEventDto2: IClientEventDto = {
  message: 'foo',
  tags: ['foo'],
  code: '200',
  level: 'error',
  meta: clientEventMeta,
  details: {
    foo: 'bar'
  }
}
