/// <reference lib="dom" />

import axios from 'axios'
import crossFetch from 'cross-fetch'

import { IHttpClient, IHttpFetcher } from '.'

export const domfetchAsFetcher: IHttpFetcher = fetch
export const crossFetchAsFetcher: IHttpFetcher = crossFetch
export const axiosAsFetcher: IHttpFetcher = axios
export const axiosAsClient: IHttpClient = axios

async () => {
  interface Data {}
  const data: Data = await axiosAsClient.get<Data>('https://example.com')

  return data
}
