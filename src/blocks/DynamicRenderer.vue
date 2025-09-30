<template>
  <template v-if="isLoading">
    <div class="spinner"></div>
  </template>
  <template v-else>
    <component
      v-if="displayComponent"
      :is="currentComponent"
      v-bind="getComponentProps(currentPageConfig?.root)"
    />
    <div v-else class="error">{{ errorMessage }}</div>
  </template>
</template>

<script setup lang="ts">
import type { Component, Ref } from 'vue'
import type { ComponentKind, StatelessComponent } from '@/entities/pageManager'
import type { Nullable } from '@/utils'

import { computed, onMounted, ref, watch } from 'vue'
import { pageManager } from '@/entities/pageManager'
import { availableComponents, isValidComponent } from '@/entities/pageManager'

const { isLoading, currentPageConfig } = pageManager()

const currentComponent: Ref<Nullable<Component>> = computed(() =>
  !isError.value ? getComponent(currentPageConfig.value?.root.kind) : null,
)

const errorMessage: Ref<string> = ref('')
const isError: Ref<boolean> = computed(() => errorMessage.value.length !== 0)
const displayComponent: Ref<boolean> = computed(() => !isError.value && !!currentPageConfig.value)

const getComponent = (kind?: ComponentKind) => (kind ? availableComponents[kind] : null)

const getComponentProps = (component?: StatelessComponent) => ({ ...component })

const resolveComponent = (component?: StatelessComponent): boolean => {
  if (!isValidComponent(component?.kind)) {
    errorMessage.value = `Unknown component: ${component?.kind ?? "??"}`
    return false
  }
  if (!component.body) {
    return true
  }

  return component.body.every((c) => resolveComponent(c))
}

watch(currentPageConfig, () => resolveComponent(currentPageConfig.value?.root))

onMounted(() => {
  resolveComponent(currentPageConfig.value?.root)
  console.log(getComponentProps(currentPageConfig.value?.root))
})
</script>

<style scoped lang="scss"></style>
