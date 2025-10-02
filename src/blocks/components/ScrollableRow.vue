<template>
  <div :style>
    <component :is="availableComponents[child.kind]" v-bind="child" />
  </div>
</template>

<script setup lang="ts">
import { availableComponents } from '@/entities/pageManager'
import type { StatelessComponent } from '@/entities/pageManager/types'
import { reactive } from 'vue'
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

interface Props extends LayoutProps {
  body: StatelessComponent[] // single component - child
}

const props = defineProps<Props>();
const child = props.body[0];

const style = reactive({
  ...layoutPropsToStyle(props),
})
</script>

<style scoped lang="scss">
div {
  flex: 1;
  overflow-x: auto;
}
</style>
