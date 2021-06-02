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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0E637F',
        paddingVertical: 50,
        paddingHorizontal: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    txtSelamat: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    txtDatang: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    txtUser: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 10
    },
    ikonProfile: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 45
    },
    konten: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    item: {
        borderColor: '#0E637F',
        marginVertical: 10,
    },
    itemIcon: {
        paddingLeft: 20,
        color: '#0E637F',
    },
    card: {
        marginTop: 10,
        borderColor: '#0E637F',
        borderRadius: 25,
        paddingVertical: 40,
        paddingHorizontal: 40,
        width: '48%'
    },
    txtCard: {
        color: '#0E637F',
        fontSize: 16,
        fontWeight: 'bold',
    },
})