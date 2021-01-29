import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/model",
    name: "model",
    component: () => import("../views/model"),
  },
  {
    path: "/address",
    name: "address",
    component: () => import("../views/address"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
