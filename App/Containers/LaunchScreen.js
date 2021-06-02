import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

    constructor(props) {
      super(props);
      setTimeout(() => {
        this.props.navigation.navigate("LoginScreen");
      }, 3000);
    }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image
              // animation='bounceIn'
              source={Images.logoApp} style={styles.logo} />
          </View>
          <Text style={styles.footer}>BY ARDIRAH CENDEKIA INDONESIA</Text>
        </View>
      </View>
    )
  }
}
