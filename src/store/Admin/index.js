import {
  addToCollection,
  getCollection,
  deleteFromCollection
} from "@/firebase/methods/firestore.js";
export default {
  namespaced: true,
  state: {
    navVisibility: true,
    categories: null
  },
  mutations: {
    updateNavVisibility(state, visibility) {
      state.navVisibility = visibility;
    },
    updateCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    submitCategoryForm({ commit, state }, category) {
      return addToCollection("categories", category).then(doc => {
        commit(
          "updateCategories",
          state.categories.concat(Object.assign({}, category, { id: doc.id }))
        );
      });
    },
    getCategories({ commit }) {
      getCollection("categories").then(querySnapshot => {
        let categories = querySnapshot.docs.map(doc =>
          Object.assign({}, doc.data(), {
            id: doc.id
          })
        );
        commit("updateCategories", categories);
      });
    },
    deleteCategory({ commit, state }, categoryId) {
      return deleteFromCollection("categories", categoryId).then(() => {
        commit(
          "updateCategories",
          state.categories.filter(category => category.id != categoryId)
        );
      });
    }
  }
};
