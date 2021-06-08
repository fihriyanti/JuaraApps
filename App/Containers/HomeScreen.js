import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Card, Body, CardItem } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/HomeScreenStyles'

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txtSelamat}>SELAMAT</Text>
                            <Text style={styles.txtDatang}>DATANG</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.txtUser}>User Juara</Text>
                            <Icon type='FontAwesome' name='user-circle' style={styles.ikonProfile} />
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.konten}>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='search' />
                                <Input placeholder='Search Here' />
                            </Item>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Card style={styles.card}>
                                    <CardItem cardBody>
                                        <Text style={styles.txtCard} onPress={() => this.props.navigation.navigate('BlokKlinisScreen')}>KLINIS</Text>
                                    </CardItem>
                                </Card>
                                <Card style={styles.card}>
                                    <CardItem cardBody>
                                        <Text style={styles.txtCard}>KOMUNITAS</Text>
                                    </CardItem>
                                </Card>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Card style={styles.card}>
                                    <CardItem cardBody>
                                        <Text style={styles.txtCard}>MANAJEMEN</Text>
                                    </CardItem>
                                </Card>
                                <Card style={styles.card}>
                                    <CardItem cardBody>
                                        <Text style={styles.txtCard}>INDUSTRI</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
