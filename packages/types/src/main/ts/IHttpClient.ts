import { IPromise } from './IPromise'

export const enum HttpMethod {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

export type IHttpRequestProvider = IFetch | IHttpClient

export type IHttpHeaders = Record<string, any>

export interface IHttpResponse<D=any> extends Omit<IFetchResponse, 'body'>{
  headers: IHttpHeaders,
  data: D
}

export interface IFetchResponse<D=any>{
  status: number
  statusText: string,
  headers: any,
  body: any & { json(): IPromise<D> }
}

interface IHttpRequest {
  url?: string,
  method?: HttpMethod,
  headers?: IHttpHeaders,
  params?: any,
  body?: any,
  data?: any
}

export interface IFetch<Req extends IHttpRequest = IHttpRequest, Res extends IFetchResponse = IFetchResponse> {
  <D=any>(url: string, req?: Req): IPromise<Omit<Res, 'data'> & IFetchResponse<D>>
}

export interface IHttpReqPerform<Req=IHttpRequest, Res=IHttpResponse> {
  <D=any>(url: string, body?: any, req?: Req): IPromise<Omit<Res, 'data'> & IHttpResponse<D>>
  <D=any>(url: string, req?: Req): IPromise<Omit<Res, 'data'> & IHttpResponse<D>>
}

export interface IHttpClient<Req extends IHttpRequest = IHttpRequest, Res extends IHttpResponse = IHttpResponse> extends IHttpReqPerform<Req, Res>{
  get: IHttpReqPerform<Req, Res>,
  post: IHttpReqPerform<Req, Res>,
  put: IHttpReqPerform<Req, Res>,
  patch: IHttpReqPerform<Req, Res>,
  head: IHttpReqPerform<Req, Res>,
  delete: IHttpReqPerform<Req, Res>,
  options: IHttpReqPerform<Req, Res>,
}
