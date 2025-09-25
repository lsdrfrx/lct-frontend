<template>
  <p :class="textStyle">{{ value }}</p>
</template>

<script setup lang="ts">
interface Props {
  value: string,
  textStyle?: string // see text styles in text.scss
}

const { textStyle = 'm20' } = defineProps<Props>();
</script>