import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
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
class Home1 extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  static defaultProps = {
    time: {}
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isShow: false
    }
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
    let showButton = null
    if (this.state.isShow) {
      showButton = <Button>显示按钮</Button>
    }
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.showLogin}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        {showButton}
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Home1
