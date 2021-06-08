import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <Image source={Images.logoApp} style={styles.logo} />
                    </View>
                    <Text style={styles.txtLogin}>LOGIN</Text>
                    <View style={styles.login}>
                        <Item rounded style={styles.item}>
                            <Icon style={styles.itemIcon} type='FontAwesome5' name='user-alt' />
                            <Input placeholder='Username' />
                        </Item>
                        <Item rounded style={styles.item}>
                            <Icon style={styles.itemIcon} type='Entypo' name='key' />
                            <Input placeholder='Password' />
                        </Item>
                        <Button full rounded
                            onPress={() => this.props.navigation.navigate('HomeTabScreen')}
                            style={styles.btnLogin}
                        >
                            <Text style={styles.txtBtnLogin}>LOGIN</Text>
                        </Button>
                    </View>
                    <Button bordered full
                        onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        style={styles.btnSignUp}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.txt1}>Don't have account?</Text>
                            <Text style={styles.txtBtnSignUp}> Sign Up </Text>
                            <Text style={styles.txt1}>Here</Text>
                        </View>
                    </Button>
                </View>
            </View>
        )
    }
}
