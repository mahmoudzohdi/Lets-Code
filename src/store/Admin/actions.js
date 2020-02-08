import {
  addToCollection,
  getCollection,
  deleteFromCollection
} from "@/firebase/methods/firestore.js";
import { CATEGORIES } from "@/firebase/const/firestore.js";

export default {
  submitCategoryForm({ commit, state }, category) {
    return addToCollection(CATEGORIES, category).then(doc => {
      commit(
        "updateCategories",
        state.categories.concat(Object.assign({}, category, { id: doc.id }))
      );
    });
  },
  getCategories({ commit }) {
    getCollection(CATEGORIES).then(querySnapshot => {
      let categories = querySnapshot.docs.map(doc =>
        Object.assign({}, doc.data(), {
          id: doc.id
        })
      );
      commit("updateCategories", categories);
    });
  },
  deleteCategory({ commit, state }, categoryId) {
    return deleteFromCollection(CATEGORIES, categoryId).then(() => {
      commit(
        "updateCategories",
        state.categories.filter(category => category.id != categoryId)
      );
    });
  }
};
