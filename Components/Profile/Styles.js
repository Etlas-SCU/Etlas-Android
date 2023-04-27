import { colors, fontFamily } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    close: {
        width: 32,
        height: 32,
        alignSelf:'flex-end',
        marginTop: "15%",
        marginRight: "5%",
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: 18,
        color: colors.DarkCyan,
        alignSelf:"center"
    },
    body: {
        backgroundColor: colors.DarkCyan,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: "50%",
    },
    profile: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 100,
        marginTop: "-25%",
        borderColor: colors.DarkCyan,
        borderWidth: 8
    },
    name: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: 24,
        color: colors.White,
        alignSelf: "center",
        marginTop: "5%",
    },
    field: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: 18,
        color: colors.Gold,
        marginLeft: "5%",
        marginTop: "5%"
    },
    info: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 20,
        color: colors.White,
        marginLeft: "5%",
        marginTop: "2%"
    }
});