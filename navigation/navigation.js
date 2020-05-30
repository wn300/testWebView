import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './login'
import PageView from './pageView'

const AppNavigatorStack = createStackNavigator({
  Login: {screen: Login, navigationOptions: {header: null}},
  PageView: {screen: PageView},
})

const AppNavigator = createAppContainer(AppNavigatorStack)

export default AppNavigator