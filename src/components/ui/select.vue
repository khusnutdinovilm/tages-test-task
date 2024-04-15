<template>
  <div class="ui-select">
    <div class="ui-select__wrapper">
      <div class="ui-select__label">{{ labelText }}:</div>

      <div class="ui-select__selected-item" @click="toggleOptionsList">
        <div class="ui-select__selected-item-text">
          {{ selectedOption?.name || emptyOption }}
        </div>
        <div class="ui-select__selected-item-icon">
          <chevron-icon :is-chevron-up="isSelectOptionsOpen" />
        </div>
      </div>

      <div
        class="ui-select__options"
        :class="{ 'ui-select__options_open': isSelectOptionsOpen }"
      >
        <div
          v-if="!!emptyOption"
          class="ui-select__option"
          @click="selectOption({})"
        >
          {{ emptyOption }}
        </div>
        <div
          v-for="option in options"
          :key="option.id"
          class="ui-select__option"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ui-select",
};
</script>

<script setup lang="ts">
import { SelectOptionType } from "@/types";
import { UiSelectProps } from "@/types/props";
import { UiSelectEmits } from "@/types/emits";

import { ref } from "vue";

const props = defineProps<UiSelectProps>();
const emits = defineEmits<UiSelectEmits>();

const selectedOption = ref<SelectOptionType>(props.modelValue);

const isSelectOptionsOpen = ref<boolean>(false);

const toggleOptionsList = (): void => {
  isSelectOptionsOpen.value = !isSelectOptionsOpen.value;
};

const selectOption = (option: SelectOptionType) => {
  emits("update:modelValue", option);
  selectedOption.value = option;
  toggleOptionsList();
};
</script>

<style>
.ui-select {
}

.ui-select__wrapper {
  display: flex;
  flex-direction: column;
  width: 288px;
  position: relative;
}

.ui-select__label {
  font-family: var(--secondary-font-style);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #4f4f4f;
  cursor: pointer;
  margin-left: 16px;
  margin-bottom: 6px;
}

.ui-select__selected-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px 10px;
  background-color: #f2f2f2;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.ui-select__selected-item-text {
  font-family: var(--secondary-font-style);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.03em;
  color: var(--main-font-color);
}

.ui-select__options {
  position: absolute;
  width: 100%;
  top: 100%;
  z-index: 2;
  flex-direction: column;
  display: flex;
  height: 0;
  max-height: 140px;
  overflow-y: hidden;
  transition: height 0.3s ease;
}

.ui-select__options_open {
  height: auto;
}

.ui-select__option {
  background-color: #f2f2f2;
  padding: 9px 16px 10px;
  font-family: var(--secondary-font-style);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.03em;
  color: #000000;
  cursor: pointer;
}

.ui-select__option:hover {
  background-color: #c9c9c9;
}
</style>
