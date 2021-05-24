/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:20:41
 * @LastEditTime: 2021-05-24 13:37:39
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \vite-vue-template__H5\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { globalStoreKey } from "./store";
import vant from "vant";
import Schemes from "lg-schemes";
import "./utils/rem.ts";
import "vant/lib/index.css";
import "./index.less";


// App配置/挂载相关
// 1. 创建App
const app = createApp(App);
// 2. 注入
app.use(router).use(store, globalStoreKey).use(vant);
// 3. 配置全局属性 -- 访问：在setup函数中通过ctx访问 eg-ctx.$sayHi
app.config.globalProperties.$sayHi = () => {
  console.log("hi");
};
// 4. 杂项配置
Schemes.config("原生指定的Schemes地址");

// 5. 挂载
app.mount("#app");
