<template>
  <div class="product-list-filter">
    <div class="product-list-filter__wrapper">
      <ui-select
        class="product-list-filter__item"
        v-model="selectedSort"
        label-text="Сортировать по"
        :options="sortOptions"
      />

      <ui-select
        class="product-list-filter__item"
        v-model="selectedMaterial"
        label-text="Материал"
        empty-option="Не выбрано"
        :options="materialsOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SelectOptionType } from "@/types";
import { ProductsFilterProps } from "@/types/props";
import { ProductsFilterEmits } from "@/types/emits";

import { ref, watch } from "vue";

const props = defineProps<ProductsFilterProps>();
const emits = defineEmits<ProductsFilterEmits>();

const selectedSort = ref<SelectOptionType>(props.selectedSort);
watch(selectedSort, () => emits("update:selectedSort", selectedSort.value));

const selectedMaterial = ref<SelectOptionType>(props.selectedMaterial);
watch(selectedMaterial, () =>
  emits("update:selectedMaterial", selectedMaterial.value),
);
</script>

<style>
.product-list-filter {
}

.product-list-filter__wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 41px;
}

@media (min-width: 768px) {
  .product-list-filter__wrapper {
    justify-content: flex-start;
  }
}
</style>
