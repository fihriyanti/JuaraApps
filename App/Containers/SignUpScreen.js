import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/SignUpScreenStyles'

export default class SignUpScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <Image source={Images.logoApp} style={styles.logo} />
                    </View>
                    <ScrollView>
                        <Text style={styles.txtLogin}>SIGN UP</Text>
                        <View style={styles.login}>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='user-alt' />
                                <Input placeholder='Full Name' />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='Entypo' name='email' />
                                <Input placeholder='Email' />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='phone' />
                                <Input placeholder='Phone Number' />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='graduation-cap' />
                                <Input placeholder='University' />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='user-alt' />
                                <Input placeholder='Username' />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='Entypo' name='key' />
                                <Input placeholder='Password' />
                            </Item>
                            <Button full rounded
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                                style={styles.btnSignUp}
                            >
                                <Text style={styles.txtBtnSignUp}>SIGN UP</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
