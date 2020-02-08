import {
  addToCollection,
  getCollection,
  deleteFromCollection
} from "@/firebase/methods/firestore.js";
import { uploadToStorage } from "@/firebase/methods/storage.js";
import { PRODUCTS } from "@/firebase/const/firestore.js";

export default {
  submitProductForm({ commit, state }, { product, imageFile }) {
    return uploadToStorage(imageFile).then(imageUrl => {
      const productObj = { ...product, imageUrl };
      return addToCollection(PRODUCTS, productObj).then(doc => {
        commit(
          "updateProducts",
          state.products.concat(Object.assign({}, productObj, { id: doc.id }))
        );
      });
    });
  },
  getProducts({ commit }) {
    getCollection(PRODUCTS).then(querySnapshot => {
      let products = querySnapshot.docs.map(doc =>
        Object.assign({}, doc.data(), {
          id: doc.id
        })
      );
      commit("updateProducts", products);
    });
  },
  deleteProduct({ commit, state }, categoryId) {
    return deleteFromCollection(PRODUCTS, categoryId).then(() => {
      commit(
        "updateProducts",
        state.products.filter(category => category.id != categoryId)
      );
    });
  }
};
