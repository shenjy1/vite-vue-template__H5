/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 22:51:19
 * @LastEditTime: 2021-05-22 00:19:58
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /多多汇宝/src/typings/index.d.ts
 */

import { AxiosRequestConfig } from "axios";


declare module 'axios' {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}

// 全局类型声明
// export {};
declare global {
  interface Window {
    _hmt: any;
    wx: any;
    AMap: any;
  }
  namespace DDHB {
    interface BaseResponse<T = any> {
      status: number;
      data: T;
      msg: string;
      page: {
        pageNo: number;
        pageSize: number;
        pages: number;
        total: number;
      };
      success: boolean;
    }
  }
}
