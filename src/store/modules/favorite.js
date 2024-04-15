import { isInFavorite } from "@/utils";

export default {
  namespaced: true,
  state: {
    favoriteItems: JSON.parse(localStorage.getItem("favorite-items")) || [],
  },
  getters: {
    favoriteItems: (state) => state.favoriteItems,
  },
  mutations: {
    addToFavorite(state, favoriteItem) {
      state.favoriteItems.push(favoriteItem);
      localStorage.setItem("favorite-items", JSON.stringify(state.favoriteItems));
    },
    deleteFromFavorite(state, favoriteItem) {
      let idx = state.favoriteItems.findIndex((item) => item.id === favoriteItem.id);
      if (idx === -1) return;

      state.favoriteItems.splice(idx, 1);
      localStorage.setItem("favorite-items", JSON.stringify(state.favoriteItems));
    },
  },
  actions: {
    manageFavorite({ commit }, favoriteItem) {
      if (!isInFavorite(favoriteItem)) {
        commit("addToFavorite", favoriteItem);
      } else {
        commit("deleteFromFavorite", favoriteItem);
      }
    },
  },
};
