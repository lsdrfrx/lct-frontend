<template>
  <div class="scaffold">
    <div class="navbar" v-if="navBar">
      <component :is="availableComponents[navBar.kind]" v-bind="navBar" />
    </div>
    <div class="content">
      <component :is="availableComponents[content.kind]" v-bind="content" />
    </div>
    <div class="bottombar" v-if="bottomBar">
      <component :is="availableComponents[bottomBar.kind]" v-bind="bottomBar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { availableComponents, type StatelessComponent } from '@/entities/pageManager';

interface Props {
  body: StatelessComponent[] // 3 components - nav bar, content, bottom bar
}

const props = defineProps<Props>();
const navBar = props.body[0];
const content = props.body[1];
const bottomBar = props.body[2];
</script>

<style scoped lang="scss">
.scaffold {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.content {
  flex: 1;
}

.bottombar {
  position: sticky;
  bottom: 0;
  background: var(--color-bg-base);
  border-top-left-radius: 2.8rem;
  border-top-right-radius: 2.8rem;
  padding: 1.6rem;
  box-shadow: 0px -5px 20px -13px rgba(0, 0, 0, 0.16);
}
</style>