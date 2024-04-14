import { prefixUrl } from "@/utils";

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const url = prefixUrl + "db/items.json";
        const response = await fetch(url);
        const products = await response.json();
        commit("setProducts", products);
      } catch (error) {}
    },
  },
};
