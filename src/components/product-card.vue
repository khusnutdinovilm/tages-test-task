<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__has-discount">
        Скидка
      </div>

      <div class="product-card__top">
        <div class="product-card__image">
          <img src="../assets/img/Rectangle 224.png" />
        </div>
      </div>

      <div class="product-card__bottom">
        <div class="product-card__info">
          <div class="product-card__code">L422WH</div>
          <div class="product-card__name">Ручка дверная</div>
          <div class="product-card__price">
            <span class="product-card__price-old">400₽</span>
            <span class="product-card__price-current">
              355₽
            </span>
          </div>
        </div>

        <div class="product-card__btns">
          <div class="product-card__cart-btn">
            <cart-icon />
          </div>
          <div class="product-card__favorite-btn">
            <favorite-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.product-card {
  &__wrapper {
    position: relative;
    width: 336px;
    height: 352px;
    border: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding: 9px 12px;
  }

  &__has-discount {
    position: absolute;
    background-color: #EB5757;
    padding: 3px 16px;
    top: 8px;
    left: 0;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    letter-spacing: 0.01em;
    color: #FFFFFF;

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

  &__bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__info {
    max-width: 228px;
  }

  &__code {
    font-family: SF UI Text;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #888888;
  }

  &__name {
    font-family: SF UI Text;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.02em;
  }

  &__price-old {
    font-family: SF UI Text;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    // letter-spacing: 0.02em;
    color: #888888;
    text-decoration: line-through;
  }

  &__price-current {
    font-family: SF UI Text;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    letter-spacing: 0.02em;
  }
}
</style>
