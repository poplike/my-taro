import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
// import Home1 from './home1'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

// import './index.scss'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add() {
//     dispatch(add())
//   },
//   dec() {
//     dispatch(minus())
//   },
//   asyncAdd() {
//     dispatch(asyncAdd())
//   }
// }))
class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    isShow: false
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount() {
    console.log(this.state, 'componentWillMount')
    console.log('componentWillMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentDidMount() {
    console.log(this.state, 'componentDidMount')
    console.log('componentDidMount')
  }

  componentDidShow() {
    console.log(this.state, 'componentDidMount')
    console.log('componentDidShow')
  }

  componentDidHide() {
    console.log('componentDidHide')
  }

  showLogin() {
    this.setState({
      isShow: true
    })
  }

  render() {
    let { isShow } = this.state
    let showButton = null
    if (isShow) {
      showButton = <Button>显示按钮</Button>
    }
    return (
      <View className='index'>
        <Button className={isShow && 'add'} onClick={this.showLogin}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        {showButton}
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        {/* <Home1 time={{ status: this.state.isShow }}></Home1> */}
      </View>
    )
  }
}

export default Home
