/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-27 10:14:34
 * @LastEditTime: 2021-05-22 00:20:55
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /多多汇宝/src/utils/request.ts
 */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookie from "lg-cookie";
import Tools from "lg-tools";
import router from "@/router";
import { Toast } from "vant";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST as string,
  timeout: 20000,
});

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // => 如果是GET请求追加时间戳
    if (config.method && /get/i.test(config.method)) {
      config.params = {
        ...config.params,
        timeState: Tools.randomCharacters(1) + Date.now(),
      };
    }
    // => 配置请求头
    const token = Cookie.get<string>("LOVEPETS_TOKEN");
    config.headers = {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 清除toast
    Toast.clear();
    const { status, msg } = response.data;
    switch (status) {
      case 200:
        return response.data;
      case 401:
        router.replace("/login");
        return response.data;
      default:
        Toast.fail(msg);
        return response.data;
    }
  },
  (error: any) => {
    console.log(error);
    /timeout/.test(error.message) && Toast("请求超时，请检查网络");
    return Promise.reject(error);
  }
);

export default service;
