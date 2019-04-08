import Http from '@utils/Http'

export default class Identity extends Http {
  // 根据 login code 获取服务器 token
  static LogOnForMAppCode(Code) {
    return this.post('/Auth/Account.LogOnForMAppCode', { Code: Code }, false)
  }
}
