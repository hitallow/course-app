import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

// routes
import Login from "../src/components/user/Login.vue"

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: "/login",
    component: Login
  }
]

export default new VueRouter({
  mode: "history",
  routes
})
