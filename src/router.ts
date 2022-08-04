import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./components/AboutPage.vue";
import ContactPage from "./components/ContactPage.vue";
import TestPage from "./components/TestPage.vue";
import UserListPage from "./components/UserListPage.vue";
import UserPage from "./components/UserPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: UserListPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/user/:id",
      component: UserPage,
      props: true,
    },
    {
      path: "/test",
      component: TestPage,
    },
  ],
});
