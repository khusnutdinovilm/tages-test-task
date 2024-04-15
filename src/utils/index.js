export const isInCart = (cartItem) => {
  const cartItems = JSON.parse(localStorage.getItem("cart-items"));
  return !!cartItems ? cartItems.some((item) => item.id === cartItem.id) : false;
};

export const isInFavorite = (favoriteItem) => {
  const favoriteItems = JSON.parse(localStorage.getItem("favorite-items"));
  return !!favoriteItems
    ? favoriteItems.some((item) => item.id === favoriteItem.id)
    : false;
};
