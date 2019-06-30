export interface IRequest {
  res: Object
  [key: string]: any
}

export interface IResponse {
  status: (status: number) => IResponse
  send: (arg: string | object) => IResponse
  json: () => IResponse
  req: Object
  [key: string]: any
}

export interface INext {
  (...args: any[]): any
}

export interface IRequestMiddleware {
  (req: IRequest, res: IResponse, next?: INext): void
}

export interface IErrorMiddleware {
  (err: Error, req: IRequest, res: IResponse, next?: INext): void
}

export type IMiddleware = IRequestMiddleware | IErrorMiddleware
