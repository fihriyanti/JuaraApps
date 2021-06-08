import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Card, Body, CardItem, Left, Right } from 'native-base'
import { Images } from '../Themes'


// Styles
import styles from './Styles/BlokKlinisScreenStyles'

export default class BlokKlinisScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txtSelamat}>Blok</Text>
                            <Text style={styles.txtDatang}>KLINIS</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.txtUser}>User Juara</Text>
                            <Icon type='FontAwesome' name='user-circle' style={styles.ikonProfile} />
                        </View>
                    </View>
                    <ScrollView scrollEnabled={false}>
                        <View style={styles.konten}>
                            <Item rounded style={styles.item}>
                                <Icon style={styles.itemIcon} type='FontAwesome5' name='search' />
                                <Input placeholder='Search Here' />
                            </Item>
                            <Button bordered full rounded
                                style={styles.btnMateri}
                                onPress={() => this.props.navigation.navigate('MateriScreen')}
                            >
                                <Text style={styles.txtMateri}>Materi 1</Text>
                                <Right>
                                    <Icon type='FontAwesome5' name='chevron-right' style={styles.txtMateri} />
                                </Right>
                            </Button>
                            <Button bordered full rounded style={styles.btnMateri}>
                                <Text style={styles.txtMateri}>Materi 2</Text>
                                <Right>
                                    <Icon type='FontAwesome5' name='chevron-right' style={styles.txtMateri} />
                                </Right>
                            </Button>
                            <Button bordered full rounded style={styles.btnMateri}>
                                <Text style={styles.txtMateri}>Materi 3</Text>
                                <Right>
                                    <Icon type='FontAwesome5' name='chevron-right' style={styles.txtMateri} />
                                </Right>
                            </Button>
                            <Button bordered full rounded style={styles.btnMateri}>
                                <Text style={styles.txtMateri}>Materi 4</Text>
                                <Right>
                                    <Icon type='FontAwesome5' name='chevron-right' style={styles.txtMateri} />
                                </Right>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
