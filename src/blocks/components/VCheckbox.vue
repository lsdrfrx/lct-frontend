<template>
  <label class="m20">
    <input type="checkbox" v-model="model" />
    <slot></slot>
  </label>
</template>


<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>();

const model = defineModel({ default: false });
</script>


<style scoped lang="scss">
label {
  user-select: none;

  display: flex;
  gap: 1.2rem;
  align-items: center;

  cursor: pointer;
}

input[type="checkbox"] {
  width: 1.8rem;
  aspect-ratio: 1;

  border: none;
  appearance: none;

  border-radius: 0.4rem;
  background-color: var(--color-control-inactive);

  &,
  &::before {
    transition-duration: var(--transition-s);
  }

  &:hover {
    background-color: var(--color-control-inactive-hover);
  }

  &::before {
    content: "";
    display: block;
    background: url("@/assets/icons/checkbox-mark.svg") no-repeat center / 70%, var(--color-control-active);
    width: 1.8rem;
    aspect-ratio: 1;
    border-radius: 0.4rem;

    opacity: 0;
  }

  &:checked::before {
    opacity: 1;
  }
}
</style>