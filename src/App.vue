<template>
  <app-header />
  <div class="container">
    <div class="container__wrapper">
      <div class="header-breadcrumbs breadcrumbs">
        <span class="breadcrumbs__gray"> Главная / Системы хранения / </span>
        Комплекты стеллажных систем
      </div>

      <div class="main__title">Комплекты стеллажных систем</div>

      <div class="main__content product-list">
        <div class="product-list__filter">
          <ui-select
            label-text="Сортиовать по"
            :options="sortOptions"
            v-model="selectedSortOption"
          />
          <ui-select
            label-text="Материал"
            :options="materials"
            v-model="selectedMaterial"
          />
        </div>
        <template v-if="loading"> loading </template>

        <div v-else class="product-list__items">
          <product-card
            v-for="product in products"
            :key="product.id"
            class="product-list__item"
            :product="product"
            @manage-cart="manageCart(product)"
            @manage-favorite="manageFavorite(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/app-header.vue";
import ProductCard from "@/components/product-card.vue";

import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";

const store = useStore();

const loading = ref(true);

const materials = ref([]);
const selectedMaterial = ref({});
const getMaterials = async () => {
  try {
    const response = await fetch("/db/materials.json");
    return await response.json();
  } catch (error) {}
};

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
const selectedSortOption = ref(sortOptions.value[0]);

const products = computed(() => store.getters["products/products"]);

const manageCart = (product) => store.dispatch("cart/manageCart", product);
const manageFavorite = async (product) => {
  try {
    store.dispatch("favorite/manageFavorite", product);
  } catch (error) {}
};

onMounted(async () => {
  try {
    store.dispatch("products/getProducts");
    materials.value = (await getMaterials()) || [];
    loading.value = false;
  } catch (error) {}
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.breadcrumbs {
  font-family: SF UI Text;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  cursor: pointer;
  &__gray {
    color: #888888;
  }
}

.container {
  &__wrapper {
    max-width: 1488px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 12px;
    justify-content: center;
    // align-items: center;
  }
}

.main {
  &__title {
    font-family: SF Pro Display;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    align-self: flex-start;
    margin-bottom: 32px;
  }
}

.product-list {
  &__filter {
    display: flex;
    flex-flow: row wrap;
    gap: 24px;
    margin-bottom: 41px;
  }

  &__items {
    display: grid;
    max-width: inherit;
    grid-template-columns: repeat(auto-fill, 336px);
    grid-gap: 48px;
  }

  &__item {
    max-width: 336px;
    width: 100%;
  }
}
</style>
