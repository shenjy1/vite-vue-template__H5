/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-25 15:08:05
 * @LastEditTime: 2021-04-11 21:01:27
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /Technician/src/api/user.ts
 */
import request from "../util/request";

/**
 * 获取用户信息
 * @returns
 */
export function info<T>() {
  return request.get<T>("/api/beaut/user/info");
}
/**
 * 个人某天预约信息
 * @returns
 */
export function appt<T>(day: string) {
  return request.get<T>("/api/beaut/user/appt", {
    params: { day },
  });
}
/**
 * 个人月度kpi信息
 * @param month
 * @returns
 */
export function kpi<T>(month: string) {
  return request.get<T>("/api/beaut/user/kpi", {
    params: { month },
  });
}

/**
 * 个人月度业绩信息
 * @param month
 * @returns
 */
export function achv<T>(month: string) {
  return request.get<T>("/api/beaut/user/achv", {
    params: { month },
  });
}
