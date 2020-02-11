/// <reference lib="dom" />

import axios from 'axios'
import crossFetch from 'cross-fetch'

import { IHttpClient, IFetch, IHttpRequestProvider } from '.'

export const fetchAsFetcher: IFetch = fetch
export const fetchAsProvider: IHttpRequestProvider = fetch
export const crossFetchAsFetcher: IFetch = crossFetch
export const axiosAsClient: IHttpClient = axios

async () => {
  type Data = { foo: string }
  const data1 = (await axiosAsClient.get<Data>('https://example.com')).data
  const data2: typeof data1 = { foo: 1 } // $ExpectError
  const data3 = (await (await fetchAsProvider<Data>('https://example.com')).json())
  const data4: typeof data3 = { foo: 1 } // $ExpectError

  return !!data4 && !data2
}
