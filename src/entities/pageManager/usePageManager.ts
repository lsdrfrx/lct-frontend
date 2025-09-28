import type { Component, Ref } from 'vue'
import type { RouteInfo } from '@/entities/http'
import type { Nullable } from '@/utils'
import type { ComponentKind, PageConfig } from './types'

import { COMPONENT_KIND } from './types'

import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import { VButton, VColumn, VRow, VCheckbox, VInput, VStepper, VText, TextButton, VSpacer, VIcon, VImage, IconButton, VContainer, ScrollableRow } from '@/blocks/components'
import { getPageConfig } from './api'

export const availableComponents = {
  button: VButton,
  textbutton: TextButton,
  column: VColumn,
  row: VRow,
  checkbox: VCheckbox,
  input: VInput,
  stepper: VStepper,
  text: VText,
  spacer: VSpacer,
  icon: VIcon,
  image: VImage,
  iconbutton: IconButton,
  container: VContainer,
  scrollable_row: ScrollableRow
} as const satisfies Record<ComponentKind, Component>

export const isValidComponent = (kind?: string): kind is ComponentKind =>
  Object.values(COMPONENT_KIND).includes(kind as ComponentKind)

// TODO: Добавить TTL кеша
const pageConfigCache = new Map()

const usePageManager = () => {
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<Nullable<string>> = ref(null)
  const currentPageConfig: Ref<Nullable<PageConfig>> = ref(null)

  const fetchPageConfig = async (routeInfo: RouteInfo) => {
    const cacheKey = JSON.stringify(routeInfo)

    // TODO: Вернуть кеширование
    // if (pageConfigCache.has(cacheKey)) {
    //   currentPageConfig.value = pageConfigCache.get(cacheKey)
    // } else {
    try {
      isLoading.value = true
      error.value = null

      const config = await getPageConfig(routeInfo)

      currentPageConfig.value = config
      pageConfigCache.set(cacheKey, config)
    } catch (err) {
      // WARN: убрать as
      error.value = err as string
    } finally {
      isLoading.value = false
    }
    // }
  }

  return {
    isLoading,
    error,
    currentPageConfig,
    fetchPageConfig,
  }
}

export const pageManager = createSharedComposable(usePageManager)
