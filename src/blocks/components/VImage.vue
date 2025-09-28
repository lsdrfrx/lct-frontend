<template>
  <img :src="url" :style />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { layoutPropsToStyle, type LayoutProps } from './LayoutProps';

interface Props extends LayoutProps {
  url: string,
  width: number,
  height: number
}

const props = defineProps<Props>();

const style = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
  ...layoutPropsToStyle(props)
})

</script>

<style scoped lang="scss">
img {
  object-fit: cover;
}
</style>