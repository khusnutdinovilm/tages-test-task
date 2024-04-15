import { SelectOptionType, ProductCard } from ".";

export interface UiSelectEmits {
  (e: "update:modelValue", option: SelectOptionType): void;
}

export interface ProductCardEmits {
  (e: "manage-cart", cartItem: ProductCard): void;
  (e: "manage-favorite", favoriteItem: ProductCard): void;
}

export interface ProductsFilterEmits {
  (e: "update:selectedSort", selectedSort: SelectOptionType): void;
  (e: "update:selectedMaterial", selectedMaterial: SelectOptionType): void;
}
