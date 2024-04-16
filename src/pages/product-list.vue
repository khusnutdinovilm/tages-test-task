<template>
  <page-container
    :loadingContent="isProductsLoading"
    :page-content-empty="!products.length && !isProductsLoading"
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

<script setup lang="ts">
import { ProductCard, SelectOptionType, SortByPriceMap } from "@/types";

import ProductListFilter from "@/components/product-list/filter.vue";
import ProductListItem from "@/components/product-list/item.vue";

import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";

const store = useStore();

const isProductsLoading = ref<boolean>(true);

const selectedSort = ref<SelectOptionType>({});
const sortOptions: SelectOptionType[] = [
  {
    id: "0",
    name: "Цена по возрастанию",
  },
  {
    id: "1",
    name: "Цена по убыванию",
  },
];

const selectedMaterial = ref<SelectOptionType>({});
const materailsOptions = ref<SelectOptionType[]>([]);

const sortByPrice: SortByPriceMap = {
  0: (arr: ProductCard[]): ProductCard[] =>
    arr.sort((a, b) => a.price.current_price - b.price.current_price), // asc
  1: (arr: ProductCard[]): ProductCard[] =>
    arr.sort((a, b) => b.price.current_price - a.price.current_price), // desc
};

const products = computed<ProductCard[]>(() => store.state.products.products);

const filteredProducts = computed<ProductCard[]>(() => {
  const filteredProducts: ProductCard[] = products.value.filter(
    (product: ProductCard) => product.material === +selectedMaterial.value?.id,
  );

  const isSelectedMaterialEmpty: boolean = !Object.keys(selectedMaterial.value)
    .length;

  return isSelectedMaterialEmpty ? products.value : filteredProducts;
});

const filteredAndSortedProducts = computed(() =>
  sortByPrice[selectedSort.value?.id](filteredProducts.value),
);

const manageCart = (product: ProductCard): void => {
  store.dispatch("cart/manageCart", product);
};
const manageFavorite = (product: ProductCard): void => {
  store.dispatch("favorite/manageFavorite", product);
};

onMounted(async () => {
  try {
    selectedSort.value = sortOptions[0];
    materailsOptions.value = await store.dispatch("products/getMaterials");

    await store.dispatch("products/getProducts");
  } catch (error) {
    throw error;
  } finally {
    isProductsLoading.value = false;
  }
});
</script>

<style>
.empty-list-title {
  font-family: var(--secondary-font-style);
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
}

/* .product-list {
} */

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
  grid-template-rows: repeat(auto-fill, 352px);
  justify-content: center;
  grid-gap: 24px;
}

.product-list__item {
  width: 288px;
  height: 352px;
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

  .product-list__item {
    width: 336px;
  }
}
</style>
