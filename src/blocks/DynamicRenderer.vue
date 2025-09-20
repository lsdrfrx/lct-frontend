<template>
  <template v-if="isLoading">
    <div class="spinner"></div>
  </template>
  <template v-else>
    <component v-if="displayComponent" :is="currentComponent" />
    <div class="error">{{ errorMessage }}</div>
  </template>
</template>

<script setup lang="ts">
import type { Component, Ref } from 'vue'
import type { Nullable } from '@/utils'

import { computed, onMounted, ref, watch } from 'vue'
import { pageManager, availableComponents } from '@/entities/pageManager'

const { isLoading, currentPageConfig } = pageManager()

const errorMessage: Ref<string> = ref('')
const isError: Ref<boolean> = computed(() => errorMessage.value.length !== 0)
const displayComponent: Ref<boolean> = computed(() => !isError.value && !!currentComponent.value)

const currentComponent: Ref<Nullable<Component>> = ref(null)

const resolveComponent = (name: string) => {
  const component = availableComponents[name]

  if (!component) {
    errorMessage.value = 'Unknown component'
    return
  }

  currentComponent.value = component
}

watch(currentPageConfig, () => resolveComponent(currentPageConfig.value.name))

onMounted(() => {
  console.log(currentPageConfig.value)
  resolveComponent(currentPageConfig.value?.name)
})
</script>

<style scoped lang="scss"></style>
