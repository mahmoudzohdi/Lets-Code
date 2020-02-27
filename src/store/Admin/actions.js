import {
  addToCollection,
  updateDocumnet,
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
  submitEditCategoryForm({ commit, state }, {category, id}) {
    return updateDocumnet(CATEGORIES, id, category).then(doc => {
      commit(
        "updateCategories",
        state.categories.map( cat => {
          if(cat.id == id){
            return Object.assign({}, cat, category)
          }
          return cat;
        })
      );
    });
  },
  getCategories({ commit }) {
    return getCollection(CATEGORIES).then(querySnapshot => {
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
