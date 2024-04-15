import { getProducts, getMaterials } from "@/api";

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
        const response = await getProducts();
        const products = await response.json();

        commit("setProducts", products);
      } catch (error) {
        alert(error.message);
      }
    },
    async getMaterials() {
      try {
        const response = await getMaterials();
        return await response.json();
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
