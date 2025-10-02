<template>
  <button @click="$emit('click')">
    <component :is="availableComponents[icon.kind]" v-bind="icon" />
  </button>
</template>

<script setup lang="ts">
import { availableComponents, type StatelessComponent } from '@/entities/pageManager';
import type { LayoutProps } from './LayoutProps';

interface Props extends LayoutProps {
  body: StatelessComponent[] // single component - icon
}

const props = defineProps<Props>();
const icon = props.body[0];

defineEmits<{
  (e: 'click'): void
}>();
</script>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1;

  border: none;
  background: none;

  margin: 0;
  padding: 0.5rem;

  cursor: pointer;
  transition-duration: var(--transition-s);

  &:hover {
    background-color: var(--color-btn-bg-ghost-hover);
  }
}
</style>