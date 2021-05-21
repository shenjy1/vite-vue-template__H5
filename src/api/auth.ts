/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-17 13:37:50
 * @LastEditTime: 2021-05-06 14:40:54
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \Technician\src\api\auth.ts
 */

import request from "../util/request";

/**
 * 登录
 * @param data
 * @returns
 */
export function login<T>(data: { phone: string; code: string }) {
  return request.post<T>("/api/beaut/login", data);
}

/**
 * 验证码
 * @param phone
 * @returns
 */
export function verifCode<T>(phone: string) {
  return request.post<T>("/api/beaut/verifCode", {
    phone,
  });
}
