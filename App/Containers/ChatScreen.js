import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Card, Body, CardItem } from 'native-base'


// Styles
import styles from './Styles/ChatScreenStyles'

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txtSelamat}>CHAT</Text>
                            <Text style={styles.txtDatang}>FARMASI</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.txtUser}>User Juara</Text>
                            <Icon type='FontAwesome' name='user-circle' style={styles.ikonProfile} />
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.konten}>
                            <Card>
                                <CardItem cardBody>
                                    <Icon type='FontAwesome' name='user-circle' style={styles.ikonProfile}/>
                                </CardItem>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
                </View>
        )
    }
}
