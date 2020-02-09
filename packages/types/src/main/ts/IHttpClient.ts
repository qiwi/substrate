import {IPromise} from './IPromise'

export const enum HttpMethod {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

export type IHttpHeaders = Record<string, any>

interface IHttpResponse<D=any>{
  status: number
  statusText: string,
  headers: any,
  body?: any & { json(): D },
  data?: D
}

interface IHttpRequest {
  url?: string,
  method?: HttpMethod,
  headers?: IHttpHeaders,
  params?: any,
  body?: any,
  data?: any
}

export type IAsyncHttpResponse<D, R> = IPromise<R & IHttpResponse<D>>

export interface IHttpFetcher<Req extends IHttpRequest = IHttpRequest, Res extends IHttpResponse = IHttpResponse> {
  <D=any>(url: string, req?: Req): IAsyncHttpResponse<D, Res>
}

export interface IHttpReqPerform<Req=IHttpRequest, Res=IHttpResponse> {
  <D=any>(url: string, body: any, req: Req): IAsyncHttpResponse<D, Res>
  <D=any>(url: string, req: Req): IAsyncHttpResponse<D, Res>
}

export interface IHttpClient<Req extends IHttpRequest = IHttpRequest, Res extends IHttpResponse = IHttpResponse> extends IHttpFetcher<Req, Res>{
  get: IHttpReqPerform<Req, Res>,
  post: IHttpReqPerform<Req, Res>,
  put: IHttpReqPerform<Req, Res>,
  patch: IHttpReqPerform<Req, Res>,
  head: IHttpReqPerform<Req, Res>,
  delete: IHttpReqPerform<Req, Res>,
  options: IHttpReqPerform<Req, Res>,
}
