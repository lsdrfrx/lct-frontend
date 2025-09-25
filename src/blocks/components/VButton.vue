<template>
  <button :class="[size, color, textStyle]" @click="$emit('click')" :disabled="disabled">
    <div class="row">
      <slot name="leading-icon"></slot>
      {{ text }}
      <slot name="trailing-icon"></slot>
    </div>
    <div class="subtext" v-if="subtext">
      {{ subtext }}
    </div>
  </button>
</template>

<script setup lang="ts">
import '@/styles'
import { computed } from 'vue';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
export type Color = 'primary' | 'secondary' | 'ghost' | 'accent' | 'accent2' | 'pay' | 'pay2' | 'success' | 'error';
interface Props {
  text: string,
  subtext?: string,
  color?: Color,
  size?: Size,
  disabled?: boolean
}

const TextStyleClass = {
  xs: 's20',
  s: 's20',
  m: 'm20',
  l: 'm20',
  xl: 'l20'
}

const { 
  color = 'primary', 
  size = 'm',
  disabled = false
} = defineProps<Props>();

const textStyle = computed(() => TextStyleClass[size]);

defineEmits<{
  (e: 'click'): void
}>();
</script>

<style scoped lang="scss">
@mixin bg-states($hover, $active) {
  &:hover { background-color: var(#{$hover}); }
  &:active { background-color: var(#{$active}); }
}

button {
  border: none;
  border-radius: var(--border-radius);
  transition-duration: var(--transition-s);

  display: flex;
  flex-direction: column;

  color: var(--color-btn-text-primary);
  font-weight: 500;
  text-wrap: nowrap;

  cursor: pointer;
}

button {
  &.xs {
    padding: 0.7rem 1.2rem;
  }
  &.s {
    padding: 1rem 1.5rem;
  }
  &.m {
    padding: 1.2rem 1.8rem;
  }
  &.l {
    padding: 1.6rem 1.9rem;
  }
  &.xl {
    padding: 2rem 2.7rem;
  }
}



button {
  &.primary {
    background-color: var(--color-btn-bg-primary);

    @include bg-states(--color-btn-bg-primary-hover, --color-btn-bg-primary-active);
  }

  &.secondary {
    color: var(--color-btn-text-secondary);
    background-color: var(--color-btn-bg-secondary);

    @include bg-states(--color-btn-bg-secondary-hover, --color-btn-bg-secondary-active);
  }

  &.ghost {
    color: var(--color-btn-text-secondary);
    background-color: var(--color-btn-bg-ghost);

    @include bg-states(--color-btn-bg-ghost-hover, --color-btn-bg-ghost-active);
  }

  &.accent {
    background-color: var(--color-btn-bg-accent-primary);

    @include bg-states(--color-btn-bg-accent-primary-hover, --color-btn-bg-accent-primary-active);
  }

  &.accent2 {
    color: var(--color-btn-text-accent-secondary);
    background-color: var(--color-btn-bg-accent-secondary);

    @include bg-states(--color-btn-bg-accent-secondary-hover, --color-btn-bg-accent-secondary-active);
  }

  &.pay {
    background-color: var(--color-btn-bg-pay-primary);

    @include bg-states(--color-btn-bg-pay-primary-hover, --color-btn-bg-pay-primary-active);
  }

  &.pay2 {
    color: var(--color-btn-text-pay-secondary);
    background-color: var(--color-btn-bg-pay-secondary);

    @include bg-states(--color-btn-bg-pay-secondary-hover, --color-btn-bg-pay-secondary-active);
  }

  &.success {
    background-color: var(--color-btn-bg-success);

    @include bg-states(--color-btn-bg-success-hover, --color-btn-bg-success-active);
  }

  &.error {
    background-color: var(--color-btn-bg-error);

    @include bg-states(--color-btn-bg-error-hover, --color-btn-bg-error-active);
  }
}

button[disabled] {
  color: var(--color-btn-text-disabled);
  background-color: var(--color-btn-bg-disabled);

  @include bg-states(--color-btn-bg-disabled, --color-btn-bg-disabled);
  cursor: default;
}

.row {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
}

.subtext {
  opacity: 0.7;
}
</style>
