<template>
  <component :is="iconId2VueComp[iconId]" :style :class="fill ?? 'default'" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RatingIcon, DeleteIcon, FavoriteIcon, CornerDownRight, ChevronRightIcon } from '../icons';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

export type IconId = 'rating' | 'favorite' | 'delete' | 'corner-down-right' | 'chevron-right';
export type Color = 'orange' | 'default';

interface Props extends LayoutProps {
  iconId: IconId,
  size: number,
  fill?: Color
}

const props = defineProps<Props>();

const iconId2VueComp = {
  'rating': RatingIcon,
  'favorite': FavoriteIcon,
  'delete': DeleteIcon,
  'corner-down-right': CornerDownRight,
  'chevron-right': ChevronRightIcon
};

const style = reactive({
  width: props.size, 
  minWidth: props.size, 
  height: props.size,
  minHeight: props.size,
  ...layoutPropsToStyle(props)
});
</script>

<style scoped lang="scss">
.orange {
  fill: var(--color-orange500);
}

.default {
  fill: currentColor;
}
</style>