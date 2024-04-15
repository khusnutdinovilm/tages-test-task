import { isInCart } from "@/utils";

export default {
  namespaced: true,
  state: {
    cartItems: JSON.parse(localStorage.getItem("cart-items")) || [],
  },
  getters: {
    cartItems: (state) => state.cartItems,
  },
  mutations: {
    addToCart(state, cartItem) {
      state.cartItems.push(cartItem);
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    deleteFromCart(state, cartItem) {
      let idx = state.cartItems.findIndex((item) => item.id === cartItem.id);
      if (idx === -1) return;

      state.cartItems.splice(idx, 1);
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
  },
  actions: {
    manageCart({ commit }, cartItem) {
      if (!isInCart(cartItem)) {
        commit("addToCart", cartItem);
      } else {
        commit("deleteFromCart", cartItem);
      }
    },
  },
};
