<template>
  <div :class="background" :style>
    <component :is="availableComponents[child.kind]" v-bind="child" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';
import { availableComponents, type StatelessComponent } from '@/entities/pageManager';

export type BackgroundColor = 'default' | 'variant';

interface Props extends LayoutProps {
  child: StatelessComponent,
  background: BackgroundColor
}

const props = defineProps<Props>();
const style = reactive(layoutPropsToStyle(props));

</script>

<style scoped lang="scss">
div {
  &.default {
    background-color: var(--color-bg-base);
  }

  &.variant {
    background-color: var(--color-gray4);
  }
}
</style>