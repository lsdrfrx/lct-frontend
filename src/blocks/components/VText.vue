<template>
  <p :class="[textStyle ?? 'm10', textColor]" :style>{{ value }}</p>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

export type Color = 'normal' | 'variant' | 'accent' | 'pay';

interface Props extends LayoutProps {
  value: string,
  textStyle?: string, // see text styles in text.scss
  textColor?: Color,
  singleLine?: boolean,
  lineThrough?: boolean
}

const props = defineProps<Props>();
const style = reactive({
  ...singleLineToStyle(),
  ...layoutPropsToStyle(props)
});

function singleLineToStyle() {
  const styleProps: any = {};
  if (props.singleLine) {
    styleProps['white-space'] = 'nowrap';
  }
  if (props.lineThrough) {
    styleProps['text-decoration'] = 'line-through';
  }
  
  return styleProps;
}

</script>

<style scoped lang="scss">
.variant {
  color: var(--color-gray36);
}

.accent {
  color: var(--color-link);
}

.pay {
  color: var(--color-violet500);
}
</style>