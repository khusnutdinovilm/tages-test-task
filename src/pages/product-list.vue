<template>
  <page-container
    :loading-content="isProductsLoading"
    :page-content-empty="!products.length"
  >
    <template #page-title> Комплекты стеллажных систем </template>

    <template #page-content-empty>
      <div class="empty-list-title">Список товаров пуст</div>
    </template>

    <template #page-content>
      <div class="product-list">
        <product-list-filter
          v-model:selected-sort="selectedSort"
          :sort-options="sortOptions"
          v-model:selected-material="selectedMaterial"
          :materials-options="materailsOptions"
        />

        <div class="product-list__items">
          <product-list-item
            v-for="product in filteredAndSortedProducts"
            :key="product.id"
            class="product-list__item"
            :product="product"
            @manage-cart="manageCart(product)"
            @manage-favorite="manageFavorite(product)"
          />
        </div>
      </div>
    </template>
  </page-container>
</template>

<script setup>
import { prefixUrl } from "@/utils";

import ProductListFilter from "@/components/product-list/filter.vue";
import ProductListItem from "@/components/product-list/item.vue";

import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";

const store = useStore();

const isProductsLoading = ref(true);

const sortOptions = ref([
  {
    id: 0,
    name: "Цена по возрастанию",
  },
  {
    id: 1,
    name: "Цена по убыванию",
  },
]);
const selectedSort = ref({});

const selectedMaterial = ref({});
const materailsOptions = ref([]);
const getMaterials = async () => {
  const url = prefixUrl + "db/materials.json";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {}
};

const sortByPrice = {
  0: (arr) => arr.sort((a, b) => a.price.current_price - b.price.current_price), // asc
  1: (arr) => arr.sort((a, b) => b.price.current_price - a.price.current_price), // desc
};

const products = computed(() => store.getters["products/products"]);

const filteredProducts = computed(() => {
  const filteredProducts = products.value.filter(
    (product) => product.material === +selectedMaterial.value?.id
  );

  const isSelectedMaterialEmpty = !Object.keys(selectedMaterial.value).length;

  return isSelectedMaterialEmpty ? products.value : filteredProducts;
});

const filteredAndSortedProducts = computed(() =>
  sortByPrice[selectedSort.value.id](filteredProducts.value)
);

const manageCart = (product) => store.dispatch("cart/manageCart", product);
const manageFavorite = async (product) => {
  try {
    store.dispatch("favorite/manageFavorite", product);
  } catch (error) {}
};

onMounted(async () => {
  try {
    selectedSort.value = sortOptions.value[0];
    materailsOptions.value = (await getMaterials()) || [];

    await store.dispatch("products/getProducts");

    isProductsLoading.value = false;
  } catch (error) {}
});
</script>

<style>
.empty-list-title {
  font-family: var(--secondary-font-style);
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
}

.product-list {
}

.product-list__filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}

.product-list__items {
  display: grid;
  max-width: inherit;
  grid-template-columns: repeat(auto-fill, 288px);
  grid-template-rows: repeat(auto-fill, 360px);
  justify-content: center;
  grid-gap: 24px;
}

@media (min-width: 616px) {
  .product-list__filter {
    gap: 24px;
  }
}

@media (min-width: 768px) {
  .product-list__filter {
    justify-content: flex-start;
    margin-bottom: 41px;
  }

  .product-list__items {
    grid-template-columns: repeat(auto-fill, 336px);
    justify-content: start;
    grid-gap: 42px;

  }
}

/* @media (min-width: 791px) {
  .product-list__items {
    grid-gap: 42px;
  }
} */
</style>
