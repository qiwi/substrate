export const enum HttpMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

interface IHttpResponse<T = any> {
  status: number
  statusTest: string
  headers: Record<string, any>,
  data?: T
  body?: T
}

type IHttpClientConfig = {
  headers?: Record<string, string>
  data?: any,
  withCredentials?: boolean
  params?: any;
}

export interface IExtHttpResponse extends IHttpResponse {
  json(): Promise<any>;
  text(): Promise<string>;
}

export interface IHttpClient {
  get<T = any>(url: string, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  delete<T = any>(url: string, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  head<T = any>(url: string, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  options<T = any>(url: string, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  post<T = any>(url: string, data?: any, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  put<T = any>(url: string, data?: any, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: IHttpClientConfig): Promise<IHttpResponse<T>>;
}
