// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
  code: number
  msg: string
}

// 请求响应参数，包含data
// interface ResultData<T = any> extends Result {
//   data?: T
// }

export default { Request }
