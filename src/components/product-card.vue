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

  console.log('hasFractionalPart', hasFractionalPart)

  return hasFractionalPart
    ? roundedPrice.toLocaleString("ru-RU", { minimumFractionDigits: 2 })
    : roundedPrice.toLocaleString("ru-RU");
};

// const toggleCart =
</script>

<style lang="scss">
.product-card {
  font-family: SF UI Text;

  &__wrapper {
    position: relative;
    max-width: 336px;
    max-height: 352px;
    border: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    gap: 23px;
    padding: 9px 12px;
  }

  &__has-discount {
    position: absolute;
    background-color: #eb5757;
    padding: 3px 16px;
    top: 8px;
    left: 0;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  &__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 238px;
    height: 237px;
  }

  &__code {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #888888;
    margin-bottom: 6px;
  }

  &__name {
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.02em;
  }

  &__bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  &__price {
    align-self: flex-end;
    display: flex;
    flex-flow: row nowrap;

    gap: 10px;
  }

  &__old-price,
  &__current-price {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    letter-spacing: 0.02em;
  }

  &__old-price {
    color: #888888;
    text-decoration: line-through;
  }

  &__btns {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    gap: 11px;
  }

  &__cart-btn,
  &__favorite-btn {
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
