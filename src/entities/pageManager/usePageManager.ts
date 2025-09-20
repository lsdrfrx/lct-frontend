import type { Ref } from 'vue'
import type { Nullable } from '@/utils'
import type { RouteInfo } from '@/entities/http'

import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import { VButton } from '@/blocks/components'
import { getPageConfig } from './api'

export const availableComponents = {
  avito_product_card: VButton,
}

// TODO: Добавить TTL кеша
const pageConfigCache = new Map()

const usePageManager = () => {
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<Nullable<string>> = ref(null)
  const currentPageConfig: Ref<Nullable<object>> = ref(null)

  const fetchPageConfig = async (routeInfo: RouteInfo) => {
    const cacheKey = JSON.stringify(routeInfo)

    if (pageConfigCache.has(cacheKey)) {
      currentPageConfig.value = pageConfigCache.get(cacheKey)
    } else {
      try {
        isLoading.value = true
        error.value = null

        const config = await getPageConfig(routeInfo)

        currentPageConfig.value = config
        pageConfigCache.set(cacheKey, config)
      } catch (err) {
        // WARN:
        error.value = err as string
      } finally {
        isLoading.value = false
      }
    }
  }

  return {
    isLoading,
    error,
    currentPageConfig,
    fetchPageConfig,
  }
}

export const pageManager = createSharedComposable(usePageManager)
