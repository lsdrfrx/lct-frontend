<template>
  <div class="input-container" :class="error ? 'error' : ''">
    <input class="m20" type="text" :placeholder="placeholder" v-model="model" />
    <IconButton class="input-icon" @click="clearText">

      <!-- TODO: это конченая иконка, её невозможно выровнять адекватно по центру. ещё внутри пришлось сделать width, height = 100% -->
      <CloseIcon style="height: 20px; width: 20px;" v-if="model"/>
    </IconButton>
  </div>
</template>

<script setup lang="ts">
import IconButton from './IconButton.vue';
import CloseIcon from './icons/CloseIcon.vue';

interface Props {
  placeholder?: string,
  error?: boolean
}

const {
  placeholder = '',
  error = false
} = defineProps<Props>();

const model = defineModel();

function clearText() {
  model.value = null;
}
</script>

<style scoped lang="scss">
.input-container {
  position: relative;
}

input {
  border: none;
  background-color: var(--color-control-bg-default);
  border-radius: 1.2rem;

  padding-left: 1.6rem;
  padding-right: 1.2rem;
  padding-top: 1.1rem;
  padding-bottom: 1.3rem;

  transition: background-color var(--transition-s);

  &:hover {
    background-color: var(--color-control-bg-hover);
  }

  &:focus,
  &:active {
    outline: 3px solid var(--color-focused);
  }

  &::placeholder {
    color: var(--color-control-text-secondary);
  }
}

.input-container.error input {
  border: 1px solid var(--color-error);

  &:focus,
  &:active {
    outline-color: var(--color-error);
  }
}

.input-icon {
  position: absolute;
  top: 47%;
  left: calc(100% - 2rem);
  translate: -50% -50%;
}
</style>