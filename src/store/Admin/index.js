import * as firebase from "firebase";
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
      return firebase
        .firestore()
        .collection("categories")
        .add(category)
        .then(doc => {
          commit(
            "updateCategories",
            state.categories.concat(Object.assign({}, category, { id: doc.id }))
          );
        });
    },
    getCategories({ commit }) {
      firebase
        .firestore()
        .collection("categories")
        .get()
        .then(querySnapshot => {
          let categories = querySnapshot.docs.map(doc =>
            Object.assign({}, doc.data(), {
              id: doc.id
            })
          );
          commit("updateCategories", categories);
        });
    },
    deleteCategory({ commit, state }, categoryId) {
      return firebase
        .firestore()
        .collection("categories")
        .doc(categoryId)
        .delete()
        .then(() => {
          commit(
            "updateCategories",
            state.categories.filter(category => category.id != categoryId)
          );
        });
    }
  }
};
