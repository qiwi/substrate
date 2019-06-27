import { IMiddleware } from './index';

const brokenMiddleware1: IMiddleware = {}; // $ExpectError
const brokenMiddleware2: IMiddleware = (res: string, req: object) => 123; // $ExpectError
const brokenMiddleware3: IMiddleware = (res: boolean, req: boolean, next: boolean) => ({}); // $ExpectError
const brokenMiddleware4: IMiddleware = 123; // $ExpectError

const middleware: IMiddleware = (reg: object, res: object, next: (reg: object, res: object) => {}) => {
  next(res, reg);
};
