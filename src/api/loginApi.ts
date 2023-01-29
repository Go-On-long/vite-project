import Axios from './index'

async function login(params?: object): Promise<any> {
  return await Axios.get('www.baidu.com', params)
}

async function dynamic(url: string, params: object | {}) {
  return await Axios.get(url, params)
}

export default {
  login,
  dynamic,
}
