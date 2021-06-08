import React from 'react'
import Beranda from '../Containers/HomeScreen'
import Chat from '../Containers/ChatScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default createAppContainer(
    createBottomTabNavigator(
        {
            Beranda: Beranda,
            Chat: Chat,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Beranda') {
                        iconName = focused
                            ? 'md-home'
                            : 'md-home-outline';
                        // Sometimes we want to add badges to some icons.
                        // You can check the implementation below.
                    } else if (routeName === 'Chat') {
                        iconName = focused ? 'md-chatbubble-ellipses' : 'md-chatbubble-ellipses-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={30} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: '#0E637F',
                inactiveTintColor: 'gray',
                showLabel: false
            },
        }
    )
)