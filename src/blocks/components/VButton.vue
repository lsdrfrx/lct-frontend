<template>
  <div class="btn" @click="$emit('click')">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped lang="scss">
.btn {
  background-color: #999999;
  color: #222222;
  padding: 16px;
  display: flex;
  width: fit-content;
  border-radius: 10px;
}
</style>
