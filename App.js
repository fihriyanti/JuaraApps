import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from './App/Containers/LaunchScreen'
import LoginScreen from './App/Containers/LoginScreen'
import SignUpScreen from './App/Containers/SignUpScreen'
// import HomeScreen from './App/Containers/HomeScreen'
import HomeTabScreen from './App/Containers/HomeTabScreen'
import BlokKlinisScreen from './App/Containers/BlokKlinisScreen'
import MateriScreen from './App/Containers/MateriScreen'

import styles from './App/NavigationStyles'

const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  // HomeScreen: { screen: HomeScreen },
  HomeTabScreen: { screen: HomeTabScreen },
  BlokKlinisScreen: { screen: BlokKlinisScreen },
  MateriScreen: { screen: MateriScreen },
}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)