/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-19 14:15:07
 * @LastEditTime: 2021-04-15 15:08:32
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \Technician\src\api\appt.ts
 */
import request from "../util/request";

/**
 * 预约列表
 * @param data
 * @returns
 */
export function list<T>(data: {
  page: number;
  pageSize: number;
  state?: number | string;
  startDate?: string;
  endDate?: string;
}) {
  return request.post<T>("/api/beaut/appt/list", data);
}

/**
 * 预约订单开始服务/预约订单待接取
 * @param data
 * @returns
 */
export function changeState<T>(data: {
  orderId: string;
  state: number;
  userRemark?: string;
}) {
  return request.post<T>("/api/beaut/appt/changeState", data);
}

/**
 * 预约详情
 * @param orderId
 * @returns
 */
export function info<T>(orderId: string) {
  return request.get<T>("/api/beaut/appt/info", {
    params: { orderId },
  });
}
