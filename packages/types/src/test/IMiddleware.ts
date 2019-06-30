import { IMiddleware, IErrorMiddleware, IRequestMiddleware, IRequest, IResponse, INext } from './index';

// IMiddleware
const brokenMiddleware1: IMiddleware = {}; // $ExpectError
const brokenMiddleware2: IMiddleware = (res: string, req: object) => 123; // $ExpectError
const brokenMiddleware3: IMiddleware = (res: boolean, req: boolean, next: boolean) => ({}); // $ExpectError
const brokenMiddleware4: IMiddleware = 123; // $ExpectError

const middleware: IMiddleware = (req: object, res: object, next?: (req: object, res: object) => {}) => {
  next && next(res, req);
};

const middlewareError: IMiddleware = (err: Error, req: object, res: object, next?: (err: Error, req: object, res: object) => {}) => {
  next && next(err, res, req);
};

// IErrorMiddleware
const brokenErrorMiddleware1: IErrorMiddleware = (err: number) => err; // $ExpectError
const brokenErrorMiddleware2: IErrorMiddleware = (req: boolean, res: string) => req + res; // $ExpectError
const brokenErrorMiddleware3: IErrorMiddleware = 'foo'; // $ExpectError

const errorMiddleware: IErrorMiddleware = (err: Error, req: object, res: object) => void {err, res, req};

// IRequestMiddleware
const brokenRequestMiddleware1: IRequestMiddleware = (err: number) => err; // $ExpectError
const brokenRequestMiddleware2: IRequestMiddleware = (req: boolean, res: string) => req + res; // $ExpectError
const brokenRequestMiddleware2: IRequestMiddleware = 'bar'; // $ExpectError

const requestMiddleware: IRequestMiddleware = (req: object, res: object) => void {req, res} ;

// IRequest
const brokenRequest1: IRequest = 'foo'; // $ExpectError
const brokenRequest2: IRequest = () => {}; // $ExpectError
const brokenRequest3: IRequest = { // $ExpectError
  status: 'bar'
};

const request: IRequest = {
  res: {},
  foo: 'bar'
};

// IResponse
const brokenResponse1: IResponse = 'foo'; // $ExpectError
const brokenResponse2: IResponse = () => {}; // $ExpectError
const brokenResponse3: IResponse = {
  status: 'bar' // $ExpectError
};

const response: IResponse = {
  status(status: number) {
    return {status, ...this};
  },
  send(arg: string | object) {
    return {arg, ...this};
  },
  json() {
    return this;
  },
  req: {}
};

// INext
const brokenNext1: INext = 123; // $ExpectError
const brokenNext2: INext = {}; // $ExpectError

const next: INext = () => ({});
