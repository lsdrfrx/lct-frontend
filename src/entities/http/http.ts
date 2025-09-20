import type { Nullable } from '@/utils'

import axios from 'axios'

// TODO: Допилить методы
class Http {
  async post<T = unknown>(
    url: string,
    data: unknown,
    mapFunction?: undefined,
    headers?: Record<string, string>,
  ): Promise<T>
  async post<T = unknown, K = any>(
    url: string,
    data: unknown,
    mapFunction?: (data: T) => K,
    headers?: Record<string, string>,
  ): Promise<Nullable<K>> {
    const response = await axios({
      method: 'post',
      data,
      url,
      headers,
    })

    return !!mapFunction ? mapFunction(response.data) : response.data
  }
}

export const http = new Http()
