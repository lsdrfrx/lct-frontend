<template>
  <button @click="$emit('click')" :style>
    <component :is="availableComponents[text.kind]" v-bind="text" />
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';
import { availableComponents, type StatelessComponent } from '@/entities/pageManager';

interface Props extends LayoutProps {
  text: StatelessComponent
}

const props = defineProps<Props>()

defineEmits<{
  (e: 'click'): void
}>();

const style = reactive(layoutPropsToStyle(props))

</script>

<style scoped lang="scss">
button {
  border: none;
  background: none;
  cursor: pointer;
  transition-duration: var(--transition-s);

  text-align: start;

  display: block;
  padding: 0.5rem;

  &.accent {
    color: var(--color-link);
  }

  &.pay {
    color: var(--color-violet500);
  }
}
</style>