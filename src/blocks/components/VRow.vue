<template>
  <div :style class="row">
    <div v-for="item in body" class="item">
      <component :is="availableComponents[item.kind]" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { availableComponents } from '@/entities/pageManager'
import type { StatelessComponent } from '@/entities/pageManager/types'
import { reactive } from 'vue'

interface Props {
  body: Array<StatelessComponent>
  spacing: number
}

const props = defineProps<Props>()

const style = reactive({
  gap: `${props.spacing}px`,
})
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
</style>
