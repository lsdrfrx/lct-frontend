<template>
  <div class="container">
    <div class="showcase">
      <h2 class="title">Кнопки</h2>
      <div class="row">
        <VButton>Я дефолтная кнопка</VButton>
        <VButton size="m" color="primary">Я кнопка</VButton>
        <VButton size="m" color="secondary">Я кнопка</VButton>
        <VButton size="m" color="ghost">Я кнопка</VButton>
        <VButton size="m" color="accent">Я кнопка</VButton>
        <VButton size="m" color="accent2">
          <template #leading-icon><SearchIcon /></template>
  
          <template #default>Я кнопка</template>
          <template #subtext>с подтекстом если ты понимаешь о чём я</template>
  
          <template #trailing-icon><ChevronDownIcon /></template>
        </VButton>
        <VButton size="m" color="pay">Я кнопка</VButton>
        <VButton size="m" color="pay2">Я кнопка</VButton>
        <VButton size="m" color="success">Я кнопка</VButton>
        <VButton size="m" color="error">Я кнопка</VButton>
        <VButton size="m" color="error" :disabled="true">Я кнопка</VButton>
      </div>
    </div>

    <div class="showcase">
      <h2 class="title">Степперы</h2>

      <div class="row">
          <VStepper preset="overlay" />
          <VStepper preset="overlay" hint="hint" />
          <VStepper preset="overlay" error="Я ошибка" />
      </div>
    </div>

    <div class="showcase gray">
      <h2 class="title">Степперы</h2>
      <div class="row">
        <VStepper preset="default" />
        <VStepper preset="default" hint="hint" />
        <VStepper preset="default" error="Я ошибка" />
      </div>
    </div>

    <div class="showcase">
      <h2 class="title">Инпуты</h2>
      <div class="row">
        <VInput placeholder="Placeholder" />
        <VInput modelValue="Я инпут" />
        <VInput :error="true" modelValue="Я ошибка" />
      </div>
    </div>

    <div class="showcase">
      <h2 class="title">Чекбоксы</h2>

      <div class="col">
        <VCheckbox :modelValue="false">Я чекбокс</VCheckbox>
        <VCheckbox :modelValue="true">Я чекбокс</VCheckbox>
      </div>
    </div>

    <div class="showcase">
      <h2 class="title">Разное</h2>

      <div class="col">
        <TextButton>Я кнопкатекст</TextButton>
    
        <IconButton>
          <FavoriteIcon />
        </IconButton>
    
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "./blocks/components/IconButton.vue";
import ChevronDownIcon from "./blocks/components/icons/ChevronDownIcon.vue";
import DeleteIcon from "./blocks/components/icons/DeleteIcon.vue";
import FavoriteIcon from "./blocks/components/icons/FavoriteIcon.vue";
import SearchIcon from "./blocks/components/icons/SearchIcon.vue";
import TextButton from "./blocks/components/TextButton.vue";
import VButton from "./blocks/components/VButton.vue";
import VCheckbox from "./blocks/components/VCheckbox.vue";
import VInput from "./blocks/components/VInput.vue";
import VStepper from "./blocks/components/VStepper.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.showcase {
  border: 1px solid var(--color-control-text-secondary);
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;

  &.gray {
    background-color: var(--color-gray4);
  }

  .title {
    font-size: 2rem;
    margin: 0;
    padding-bottom: 1rem;
  }
}

.row {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
}
</style>
