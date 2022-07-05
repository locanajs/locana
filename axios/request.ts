import axios, { AxiosInstance } from 'axios'

import { ApiConfig } from './config'

export class Request {
  public static axiosInstance: AxiosInstance;

  public static init(config: ApiConfig){
    this.axiosInstance = axios.create({
      baseURL: '',
      timeout: 6000,
      headers: {
        'Accept': config.api_verison,     // API版本
        'Stument-App-Id': config.appId    // 学校APPID
      }
    })
  }

  // Todo 数据请求加密使用app secret
}