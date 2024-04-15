import { ProductCard } from "@/types";

export const isInCart = (cartItem: ProductCard): boolean => {
  const cartItems: ProductCard[] = JSON.parse(
    localStorage.getItem("cart-items") || "[]",
  );
  return !!cartItems
    ? cartItems.some((item) => item.id === cartItem.id)
    : false;
};

export const isInFavorite = (favoriteItem: ProductCard): boolean => {
  const favoriteItems: ProductCard[] = JSON.parse(
    localStorage.getItem("favorite-items") || "[]",
  );
  return !!favoriteItems
    ? favoriteItems.some((item) => item.id === favoriteItem.id)
    : false;
};
