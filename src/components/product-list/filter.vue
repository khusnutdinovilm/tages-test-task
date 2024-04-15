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

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  selectedSort: {
    type: Object,
    required: true,
  },
  sortOptions: {
    type: Array,
    required: true,
  },
  selectedMaterial: {
    type: Object,
    required: true,
  },
  materialsOptions: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["update:selectedSort", "update:selectedMaterial"]);

const selectedSort = ref(props.selectedSort);
watch(selectedSort, () => emits("update:selectedSort", selectedSort.value));

const selectedMaterial = ref(props.selectedMaterial);
watch(selectedMaterial, () =>
  emits("update:selectedMaterial", selectedMaterial.value)
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
