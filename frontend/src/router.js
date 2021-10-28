import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Products from "./components/Products.vue";
import Profile from "./components/Profile.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Details from "./components/Details.vue";
import Signup from "./components/SignUp.vue";
import Form from "./components/Form.vue";
import Dynamic from "./components/dynamic.vue";
// import NotFound from "./components/NotFound.vue";
import NotFound from "./components/NotFound.vue";
import Cart from "./components/CartItem.vue";
import Checkout from "./components/Checkout.vue";
import Login from "./components/Login.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/profile/:details",
    name: "details",
    component: Details,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: Dynamic,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
