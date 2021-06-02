import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logo: {
        height: Metrics.images.head,
        width: Metrics.images.ikon,
        resizeMode: 'contain'
    },
    centered: {
        backgroundColor: '#0E637F',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    login: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtLogin: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        color: '#0E637F'
    },
    item: {
        borderColor: '#0E637F',
        marginVertical: 10,
    },
    itemIcon: {
        paddingLeft: 20,
        color: '#0E637F',
    },
    btnSignUp: {
        marginTop: 10,
        backgroundColor: '#0E637F'
    },
    txtBtnSignUp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
})