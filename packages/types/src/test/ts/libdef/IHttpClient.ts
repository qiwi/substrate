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
  return { foo: 1 }
}
