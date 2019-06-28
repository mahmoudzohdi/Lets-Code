import Admin from "../../views/Admin/index.vue";
import Products from "../../views/Admin/Products/index.vue";
import Categories from "../../views/Admin/Categories/index.vue";

export default [
  {
    path: "/admin",
    component: Admin,
    name: "admin",
    children: [
      {
        path: "products",
        component: Products,
        name: "products",
      },
      {
        path: "categories",
        component: Categories,
        name: "categories",
      },
    ]
    
  },
]