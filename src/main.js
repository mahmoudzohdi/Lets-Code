import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "@/components/Shared/globalComponents.js";
Vue.config.productionTip = false;

import * as firebase from "firebase";
Vue.prototype.firebase = firebase;

globalComponents.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
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
  }
}).$mount("#app");
