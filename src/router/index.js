import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/team",
    name: "Team",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/Team.vue")
  },
  {
    path: "/project",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/Projects.vue")
  },
  
  
];

const router = new VueRouter({
  mode:"history",
  routes
});

export default router;
