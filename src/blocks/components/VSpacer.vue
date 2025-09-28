<template>
  <div :style></div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

const props = defineProps<LayoutProps>();
const style = reactive(layoutPropsToStyle(props))
</script>