<template>
  <div class="ui-select">
    <div class="ui-select__wrapper">
      <div class="ui-select__label">{{ labelText }}:</div>

      <div class="ui-select__selected-item" @click="toggleOptionsList">
        <div class="ui-select__selected-item-text">
          {{ selectedOption?.name || "Не выбрано" }}
        </div>
        <div class="ui-select__selected-item-icon">
          <chevron-icon :is-chevron-up="isSelectOptionsOpen"/>
        </div>
      </div>

      <div
        class="ui-select__options"
        :class="{ 'ui-select__options_open': isSelectOptionsOpen }"
      >
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

<script>
export default {
  name: "ui-select",
};
</script>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  labelText: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});
console.log(props.options[0])

const selectedOption = ref(props.options[0])

const emits = defineEmits(["update:modelValue"]);
const isSelectOptionsOpen = ref(false);

const toggleOptionsList = () => {
  isSelectOptionsOpen.value = !isSelectOptionsOpen.value;
};

const selectOption = (option) => {
  emits('update:modelValue', option);
  selectedOption.value = option;
  toggleOptionsList();
}
</script>

<style lang="scss">
.ui-select {
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 288px;
    position: relative;
  }

  &__label {
    font-family: SF Pro Display;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #4f4f4f;
    cursor: pointer;
    margin-left: 16px;
    margin-bottom: 6px;
  }

  &__selected-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 9px 16px 10px;
    background-color: #f2f2f2;
    cursor: pointer;

    &-text {
      font-family: SF Pro Display;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #000000;
    }
  }

  &__options {
    position: absolute;
    width: 100%;
    bottom: -100%;
    z-index: 3;
    flex-direction: column;
    justify-content: center;
    display: none;

    &_open {
      display: flex;
    }
  }

  &__option {
    background-color: #f2f2f2;
    padding: 9px 16px 10px;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.03em;
    color: #000000;
    cursor: pointer;

    &:hover {
      background-color: #c9c9c9;
    }
  }
}
</style>
