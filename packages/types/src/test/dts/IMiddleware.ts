import {
  IAsyncMiddleware,
  IErrorMiddleware,
  IMiddleware,
  INext,
  IRequest,
  IRequestMiddleware,
  IResponse,
} from '.'

// IMiddleware
// @ts-expect-error
const brokenMiddleware1: IMiddleware = {}
// @ts-expect-error
const brokenMiddleware2: IMiddleware = (res: string, req: object) => 123
// @ts-expect-error
const brokenMiddleware3: IMiddleware = (
  // @ts-expect-error
  res: boolean,
  // @ts-expect-error
  req: boolean,
  // @ts-expect-error
  next: boolean,
) => ({})
// @ts-expect-error
const brokenMiddleware4: IMiddleware = 123

const middleware1: IMiddleware = (
  req: IRequest,
  res: IResponse,
  next?: INext,
) => {
  next && next(res, req)
}

const middleware2: IMiddleware = (
  err: Error,
  req: IRequest,
  res: IResponse,
  next?: INext,
) => {
  next && next(err, res, req)
}

// IAsyncMiddleware
// @ts-expect-error
const brokenAsyncMiddleware1: IAsyncMiddleware = () => {}
// @ts-expect-error
const brokenAsyncMiddleware2: IAsyncMiddleware = {}
// @ts-expect-error
const brokenAsyncMiddleware3: IAsyncMiddleware = async () => 123

const asyncMiddleware1: IAsyncMiddleware = (
  err: Error,
  req: IRequest,
  res: IResponse,
  next?: INext,
) => {
  next && next(err, res, req)
  return Promise.resolve()
}

const asyncMiddleware2: IAsyncMiddleware = async (
  req: IRequest,
  res: IResponse,
  next?: INext,
) => {
  next && next(res, req)
}

// IErrorMiddleware
// @ts-expect-error
const brokenErrorMiddleware1: IErrorMiddleware = (err: number) => err
// @ts-expect-error
const brokenErrorMiddleware2: IErrorMiddleware = (req: boolean, res: string) =>
  req + res
// @ts-expect-error
const brokenErrorMiddleware3: IErrorMiddleware = 'foo'

const errorMiddleware: IErrorMiddleware = (
  err: Error,
  req: object,
  res: object,
) => void { err, res, req }

// IRequestMiddleware
// @ts-expect-error
const brokenRequestMiddleware1: IRequestMiddleware = (err: number) => err
// @ts-expect-error
const brokenRequestMiddleware2: IRequestMiddleware = (
  req: boolean,
  res: string,
) => req + res
// @ts-expect-error
const brokenRequestMiddleware2: IRequestMiddleware = 'bar'

const requestMiddleware: IRequestMiddleware = (req: object, res: object) =>
  void { req, res }

// IRequest
// @ts-expect-error
const brokenRequest1: IRequest = 'foo'
// @ts-expect-error
const brokenRequest2: IRequest = true

const request: IRequest = {
  foo: 'bar',
}

// IResponse
// @ts-expect-error
const brokenResponse1: IResponse = 'foo'
// @ts-expect-error
const brokenResponse2: IResponse = () => {}
const brokenResponse3: IResponse = {
  // @ts-expect-error
  status: 'bar',
}

const response: IResponse = {
  status (status: number) {
    return { _status: status, ...this }
  },
  send (arg: string | object) {
    return { arg, ...this }
  },
  json () {
    return this
  },
  req: {},
}

// INext
// @ts-expect-error
const brokenNext1: INext = 123
// @ts-expect-error
const brokenNext2: INext = {}

const next: INext = () => ({})
