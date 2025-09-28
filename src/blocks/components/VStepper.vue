<template>
  <div class="stepper" :class="classes" :style>
    <div class="main">
      <div class="btn-wrapper btn-wrapper--left" @click="decrease" :class="model <= 1 ? 'disabled' : ''">
        <svg class="svg-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40004001_459)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6998 11.7V10.3H4.2998V11.7H15.6998Z"/>
          </g>
          <defs>
            <clipPath id="clip0_40004001_459">
              <rect width="14" height="20" fill="white" transform="translate(3)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
  
      <p class="counter m20">{{ model }}</p>
  
      <div class="btn-wrapper btn-wrapper--right" @click="increase" :class="model >= 99 ? 'disabled' : ''">
        <svg class="svg-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40004001_481)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29968 11.6999L9.29969 16.7H10.6997L10.6997 11.6999H15.6998V10.2999H10.6997L10.6997 5.29999H9.29968L9.29968 10.2999H4.2998V11.6999H9.29968Z"/>
          </g>
          <defs>
            <clipPath id="clip0_40004001_481">
              <rect width="14" height="20" fill="white" transform="translate(3)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <p class="s10 bottom-text" v-if="hint || error">{{ error || hint }}</p>
  </div>
</template>


<script setup lang="ts">
import { computed, reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

type Preset = "default" | "overlay";

interface Props extends LayoutProps {
  preset?: Preset,
  hint?: string,
  error?: string
}

const props = defineProps<Props>();

const model = defineModel({ default: 1 });
const classes = computed(() => {
  const list: string[] = [ props.preset ?? "default" ];
  if (props.error != null) {
    list.push("error");
  }
  return list;
});

const style = reactive(layoutPropsToStyle(props));

function decrease() {
  model.value = Math.max(1, model.value - 1);
}

function increase() {
  model.value = Math.min(99, model.value + 1);
}
</script>


<style scoped lang="scss">
.stepper {
  color: var(--color-control-text-primary);
  max-width: fit-content;
}

.main {
  display: flex;
  align-items: center;
  border-radius: 1.2rem;

  user-select: none;
}

.stepper {
  &.default .main {
    background-color: var(--color-bg-base);
  }

  &.overlay .main {
    background-color: var(--color-control-bg-default);
  }

  &.error .main {
    border: 1px solid var(--color-error);
  }

  &.error .bottom-text {
    color: var(--color-error);
  }
}


.counter {
  min-width: 4rem;
  text-align: center;
}

.btn-wrapper {
  width: 4.4rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: var(--transition-s);

  &--left {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  &--right {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background-color: var(--color-control-bg-hover);
  }

  &.disabled {
    color: var(--color-control-text-disabled);

    &:hover {
      background-color: unset;
      cursor: default;
    }
  }
}

.bottom-text {
  max-width: 100%; /* todo: если текст длинный, он меняет ширину элемента */
  padding-top: 0.6rem;
  color: var(--color-control-text-secondary);
  text-wrap: wrap;
}
</style>