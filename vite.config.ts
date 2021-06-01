/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:20:41
 * @LastEditTime: 2021-06-01 18:07:01
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \vite-vue-template__H5\vite.config.ts
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  // 路径解析
  resolve: {
    alias: {
      "@": resolve("./src"),
      comps: resolve("./src/components"),
      pages: resolve("./src/pages"),
      utils: resolve("./src/utils"),
    },
  },
  plugins: [
    vue(),
    // 浏览器兼容
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
