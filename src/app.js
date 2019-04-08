import '@tarojs/async-await'
import '@utils/Request'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      // 'pages/Product/SearchResult',
      // 'pages/login',
      'pages/cart/cart',
      'pages/user/user'
      // 'pages/Product/Search'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FF0033',
      navigationBarTitleText: '买道传感网',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#FF0033',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/home',
          text: '首页'
          // iconPath: '',
          // selectedIconPath: ''
        },
        {
          pagePath: 'pages/cart/cart',
          text: '购物车'
          // iconPath: '',
          // selectedIconPath: ''
        },
        {
          pagePath: 'pages/user/user',
          text: '我的'
          // iconPath: '',
          // selectedIconPath: ''
        }
      ]
    },
    networkTimeout: {
      request: 10000
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
