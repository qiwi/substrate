export interface IRequest {
  res?: IResponse
  [key: string]: any
}

export interface IResponse {
  status: (status: number) => IResponse
  send: (arg: string | object) => IResponse
  json: () => IResponse
  req?: IRequest
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

export interface IAsyncRequestMiddleware {
  (req: IRequest, res: IResponse, next?: INext): Promise<void>
}

export interface IAsyncErrorMiddleware {
  (err: Error, req: IRequest, res: IResponse, next?: INext): Promise<void>
}

export type IAsyncMiddleware = IAsyncRequestMiddleware | IAsyncErrorMiddleware
