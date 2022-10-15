// 存储获取token登录信息
function setUtils(params: string): void {
  sessionStorage.setItem('token', params)
}

function getUtils(): string | null {
  return sessionStorage.getItem('token')
}

export default { setUtils, getUtils }
