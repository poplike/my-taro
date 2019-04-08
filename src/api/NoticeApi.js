import Http from '@utils/Http'

export default class NoticeApi extends Http {
  // 发送短信验证码
  static SendPhoneCaptcha(Phone) {
    return this.post('/Notice/SMS.SendCaptcha', { Phone: Phone }, false)
  }
}
