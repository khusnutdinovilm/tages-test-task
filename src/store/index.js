import { createStore } from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";
import favorite from "./modules/favorite";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart,
    favorite,
  },
});
