<template>
  <div :style class="column">
    <template v-for="item in body" class="item">
      <component :is="availableComponents[item.kind]" v-bind="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { availableComponents } from '@/entities/pageManager'
import type { StatelessComponent } from '@/entities/pageManager/types'
import { reactive } from 'vue'
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps'

interface Props extends LayoutProps {
  body: Array<StatelessComponent>
  spacing?: number
}

const props = defineProps<Props>()

const style = reactive({
  gap: `${props.spacing ?? 0}px`,
  ...layoutPropsToStyle(props)
})
</script>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
