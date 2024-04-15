<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div v-if="hasDiscount" class="product-card__has-discount">Скидка</div>

      <div class="product-card__top">
        <div class="product-card__image">
          <img :src="require(`@/assets/img/${product.image.url}`)" />
        </div>
      </div>

      <div class="product-card__info">
        <div class="product-card__code">{{ product.code }}</div>
        <div class="product-card__name">{{ product.name }}</div>
        <div class="product-card__bottom">
          <div class="product-card__price">
            <div v-if="hasDiscount" class="product-card__old-price">
              {{ getLocalePrice(product.price.old_price) }}₽
            </div>
            <div class="product-card__current-price">
              {{ getLocalePrice(product.price.current_price) }}₽
            </div>
          </div>
          <div class="product-card__btns">
            <div class="product-card__cart-btn" @click="manageCart">
              <cart-icon :is-in-cart="isProductInCart" />
            </div>
            <div class="product-card__favorite-btn" @click="manageFavorite">
              <favorite-icon :is-in-favorite="isProductInFavorite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { isInCart, isInFavorite } from "@/utils";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["manage-cart", "manage-favorite"]);

const hasDiscount = computed(() => !!props.product.price.old_price);

const isProductInCart = ref(isInCart(props.product));
const manageCart = () => {
  emits("manage-cart", props.product);
  isProductInCart.value = !isProductInCart.value;
};

const isProductInFavorite = ref(isInFavorite(props.product));
const manageFavorite = () => {
  emits("manage-favorite", props.product);
  isProductInFavorite.value = !isProductInFavorite.value;
};

const getLocalePrice = (price) => {
  const roundedPrice = Math.round(price * 100) / 100;
  const hasFractionalPart = Math.round(price) !== price;

  return hasFractionalPart
    ? roundedPrice.toLocaleString("ru-RU", { minimumFractionDigits: 2 })
    : roundedPrice.toLocaleString("ru-RU");
};
</script>

<style>
.product-card {
  font-family: var(--main-font-style);
}

.product-card__wrapper {
  position: relative;
  border: 1px solid var(--card-border-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 9px 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.product-card__has-discount {
  position: absolute;
  background-color: #eb5757;
  padding: 3px 16px;
  top: 8px;
  left: 0;
  font-family: var(--secondary-font-style);
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  letter-spacing: 0.01em;
  color: #ffffff;
}

.product-card__top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-card__image {
  width: 238px;
  height: 237px;
}

.product-card__code {
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: var(--secondary-font-color);
  margin-bottom: 6px;
}

.product-card__name {
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.product-card__bottom {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.product-card__price {
  align-self: flex-end;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}

.product-card__old-price,
.product-card__current-price {
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.02em;
}

.product-card__old-price {
  color: var(--secondary-font-color);
  text-decoration: line-through;
}

.product-card__btns {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  gap: 11px;
}

.product-card__cart-btn,
.product-card__favorite-btn {
  width: 36px;
  height: 36px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
