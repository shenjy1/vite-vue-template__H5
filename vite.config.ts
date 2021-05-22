/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:20:41
 * @LastEditTime: 2021-05-22 09:18:11
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \多多汇宝\vite.config.ts
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // 路径解析
  resolve: {
    alias: {
      "@": resolve("./src"),
      comps: resolve("./src/components"),
      pages: resolve("./src/pages"),
    },
  },
  plugins: [vue()],
});
