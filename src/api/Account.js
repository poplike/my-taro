import Http from '@utils/Http'

export default class Account extends Http {
  // 登录
  static LogOnForMApp(req) {
    return this.post('/Account/Member.LogOnForMApp', req, true)
  }
  // 注册1
  static RegisterForMApp(req) {
    return this.post('/Account/Member.RegisterForMApp', req, true)
  }
}
