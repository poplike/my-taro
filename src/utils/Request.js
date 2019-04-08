import Taro from '@tarojs/taro'

/* eslint-disable */
export const BASE_URL = HOST
/* eslint-enable */

function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

// function updateStorage(data = {}) {
//   return Promise.all([
//     Taro.setStorage({ key: 'token', data: data['3rdSession'] || '' }),
//     Taro.setStorage({ key: 'uid', data: data['uid'] || '' })
//   ])
// }

export default class Http {
  static async request(method, url, data, showToast = true) {
    const token = await getStorage('token')
    const params = {
      url: BASE_URL + url,
      // url: 'http://192.168.1.123:8120' + url,
      method: method,
      data:  data,
      header: {
        token
      }
    }
    if (showToast) {
      Taro.showToast({
        title: '加载中...',
        icon: 'loading'
      })
    }

    return Taro.request(params)
        .then(res=>{
        if (this.isSuccess(res)) {
          return res.data.Body
        } else {
          throw this.requestException(res)
        }          
      })
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode !== 200 || res.data.ErrorCode !== '00000') {
      return false
    }
    return true
  }

  /**
   * 异常
   */
  static requestException(res) {
    let { Message, ErrorCode } = res.data
    let error = { statusCode: res.statusCode, Message, ErrorCode }
    // 权限问题跳转
    if (error.statusCode === '00009') {}
    Taro.showToast({
      title: error.Message
    })
    return error
  }
  static get(url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static post(url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }
}
