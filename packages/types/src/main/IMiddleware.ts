export interface IRequest {
  [key: string]: any
}

export interface IResponse {
  status: (status: number) => IResponse
  send: (arg: string | object) => IResponse
  json: () => IResponse
  [key: string]: any
}

export interface INext {
  (...args: any[]): any
}

export interface RequestHandler {
  (reg: IRequest, res: IResponse, next?: INext): void
}

export interface ErrorRequestHandler {
  (err: Error, req: IRequest, res: IResponse, next?: INext): void
}

export type IMiddleware = RequestHandler | ErrorRequestHandler
