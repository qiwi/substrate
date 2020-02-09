import axios from 'axios'
import { IHttpClient } from '.'

const httpClient: IHttpClient = axios

httpClient.delete('test', {
  headers: { 'X-Custom-Header': 'foobar' },
  data: { foo: 'bar' },
  withCredentials: true,
  params: { bar: 'foo' }
})
