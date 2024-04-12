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
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await fetch("/db/items.json");
        const products = await response.json();
        commit('setProducts', products);
      } catch (error) {}
    },
  },
};
