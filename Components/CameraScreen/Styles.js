import { colors, fontFamily } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex:1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 20
    },
    button: {
        backgroundColor: colors.Cyan,
        borderRadius: 100,
        borderColor: colors.DarkCyan,
        borderWidth: 5,
        height: 85.4,
        width: 85.4,
        bottom: "8%",
    },
    topBar: {
        // position: 'absolute',
        height: "12%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%" ,
        top: 0,
        alignItems: 'stretch',
        paddingTop: "15%",
        paddingHorizontal: "5%",
        backgroundColor: colors.Black,
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: 13,
        textAlign: 'center',
    },
    imageCap: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    bottomBar: {
        // position: 'absolute',
        height: "15%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%" ,
        paddingHorizontal: "8%",
        backgroundColor: colors.Black
    },
    icon: {
        color: colors.White,
        textAlign: 'center',
    },
    buttonTxt: {
        color: colors.White,
        textAlign: 'center',
        fontFamily: fontFamily.MontserratBold,
        fontSize: 13,
    }
});