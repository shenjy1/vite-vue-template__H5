/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:24:50
 * @LastEditTime: 2021-06-01 21:40:54
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /vite-vue-template__H5/src/router/index.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index-page",
  },
  {
    path: "/index-page",
    name: "index-page",
    component: () => import("pages/IndexPage/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/download",
    name: "download",
    component: () => import("pages/Download/index.vue"),
    meta: {
      title: "多多汇宝",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== "/favicon.icon") {
    document.title = to.meta.title ? (to.meta.title as string) : "";
    next();
  }
});

export default router;
