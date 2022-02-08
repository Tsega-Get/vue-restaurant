import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/sign-up",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/add-restorant",
    name: "AddResto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddResto.vue"),
  },
  {
    path: "/update-restaurant/:id",
    name: "UpdateResto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpdateResto.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
