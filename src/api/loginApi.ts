import Axios from './index'

async function login(params?: object): Promise<any> {
  return await Axios.get('www.baidu.com', params)
}

export default {
  login,
}
