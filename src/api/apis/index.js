import axios, { msgType } from '@/utils/axios'
import { API_BASE_PATH } from '@/api'

// 登录
export function v1ApiApisList(data) {
  return axios.get(`${API_BASE_PATH}/apis/list`, data, { errorMsgType: msgType.box })
}