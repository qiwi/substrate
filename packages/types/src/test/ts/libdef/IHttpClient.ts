/// <reference lib="dom" />

import axios from 'axios'
import crossFetch from 'cross-fetch'

import { IHttpClient, IFetch } from '.'

export const domfetchAsFetcher: IFetch = fetch
export const crossFetchAsFetcher: IFetch = crossFetch
export const axiosAsClient: IHttpClient = axios

async () => {
  type Data = { foo: string }
  const data1 = (await axiosAsClient.get<Data>('https://example.com')).data
  const data2: typeof data1 = {foo: 1} // $ExpectError

  return !!data2
}
