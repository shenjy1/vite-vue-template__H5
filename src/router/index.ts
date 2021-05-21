/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:24:50
 * @LastEditTime: 2021-05-22 00:18:01
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /多多汇宝/src/router/index.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index-page",
    name: "indexPage",
    component: () => import("../pages/IndexPage/IndexPage.vue"),
    meta: {
      title: "首页",
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
