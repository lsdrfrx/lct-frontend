<template>
  <button @click="$emit('click')" class="m10">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>();
</script>

<style scoped lang="scss">
button {
  border: none;
  background: none;
  cursor: pointer;
  transition-duration: var(--transition-s);

  display: block;
  padding: 0.5rem;
  color: var(--color-link);

  &:hover {
    color: var(--color-link-hover);
  }
}
</style>