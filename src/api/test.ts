/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-24 13:40:52
 * @LastEditTime: 2021-05-24 13:45:05
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \vite-vue-template__H5\src\api\test.ts
 */

import request from "../utils/request";

export function GET<T>() {
  return request.get<T>("GET request host.");
}

export function POST<T>() {
  return request.post<T>("POST request host.");
}
