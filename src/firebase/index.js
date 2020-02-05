import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCJLT1qI9-iIlHXnNbv0JlgXrWPX8g-o2w",
  authDomain: "vue-ecommerce-5ab29.firebaseapp.com",
  databaseURL: "https://vue-ecommerce-5ab29.firebaseio.com",
  projectId: "vue-ecommerce-5ab29",
  storageBucket: "",
  messagingSenderId: "734180192684",
  appId: "1:734180192684:web:6f434dc96d7cf79b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
