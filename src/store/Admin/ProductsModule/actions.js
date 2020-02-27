import {
  addToCollection,
  getCollection,
  deleteFromCollection,
  updateDocumnet
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
  submitEditProductForm({ commit, state }, { product, id, imageFile }) {
    const uploadImage = imageFile ? uploadToStorage(imageFile) : Promise.resolve(null);
    return uploadImage.then(imageUrl => {
      const productObj = { ...product };
      if(imageUrl) productObj['imageUrl'] = imageUrl;
      return updateDocumnet(PRODUCTS, id, productObj).then(doc => {
        commit(
          "updateProducts",
          state.products.map( product => {
            if(product.id == id){
              return Object.assign({}, product, productObj)
            }
            return product;
          })
        );
      });
    });
  },
  getProducts({ commit }) {
    return getCollection(PRODUCTS).then(querySnapshot => {
      let products = querySnapshot.docs.map(doc =>
        Object.assign({}, doc.data(), {
          id: doc.id
        })
      );
      commit("updateProducts", products);
    });
  },
  deleteProduct({ commit, state }, productId) {
    return deleteFromCollection(PRODUCTS, productId).then(() => {
      commit(
        "updateProducts",
        state.products.filter(product => product.id != productId)
      );
    });
  }
};
