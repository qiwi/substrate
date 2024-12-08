/// <reference lib="dom" />

import axios from 'axios'
import crossFetch from 'cross-fetch'

import { IFetch, IHttpClient, IHttpRequestProvider, IHttpMethodV2 } from '.'

export const fetchAsFetcher: IFetch = fetch
export const fetchAsProvider: IHttpRequestProvider = fetch
export const crossFetchAsFetcher: IFetch = crossFetch
export const axiosAsClient: IHttpClient = axios

const method: IHttpMethodV2 = 'GET'

export const suite = async (): Promise<boolean> => {
  type Data = { foo: string }
  const data1 = (await axiosAsClient.get<Data>('https://example.com')).data
  // @ts-expect-error
  const data2: typeof data1 = { foo: 1 }
  const data3 = await (
    await fetchAsProvider<Data>('https://example.com')
  ).json()
  // @ts-expect-error
  const data4: typeof data3 = { foo: 1 }

  return !!data4 && !data2
}
