<template>
  <div :style class="row">
    <template v-for="item in body">
      <component :is="availableComponents[item.kind]" v-bind="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { availableComponents } from '@/entities/pageManager'
import type { StatelessComponent } from '@/entities/pageManager/types'
import { reactive } from 'vue'
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

export type VAlign = 'top' | 'center' | 'bottom';

interface Props extends LayoutProps {
  body: Array<StatelessComponent>
  spacing?: number,
  valign?: VAlign
}

const props = defineProps<Props>();

const style = reactive({
  gap: `${props.spacing ?? 0}px`,
  'align-items': valignToAlignItems(props.valign ?? 'top'),

  ...layoutPropsToStyle(props),
})

function valignToAlignItems(valign: VAlign): string {
  switch (valign) {
    case 'top': return 'start';
    case 'center': return 'center';
    case 'bottom': return 'end';
    default: {
      console.log('valignToAlignItems: unknown valign value', valign);
      return 'start';
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
}
</style>
