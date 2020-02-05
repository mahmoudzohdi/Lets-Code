import { db } from "../index";

export const addToCollection = (collectionName, payload) => {
  return db.collection(collectionName).add(payload);
};
export const getCollection = collectionName => {
  return db.collection(collectionName).get();
};

export const deleteFromCollection = (collectionName, documentRef) => {
  return db
    .collection(collectionName)
    .doc(documentRef)
    .delete();
};
