import { colors, fontFamily } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    MonumentsCard: {
        width: 161,
        backgroundColor: colors.SolidGrey,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    MonumentsCardImg: {
        alignContent: "center",
        alignSelf: "center",
        marginTop: 9,
        width: 147,
        height: 88
    },
    MonumentsCardText: {
        flexDirection: "column",
        width: 139,
        paddingLeft: 9,
        paddingRight: 14,
    },
    MonumentsCardTitle: {
        color: colors.DarkCyan,
        fontSize: 16,
        fontFamily: fontFamily.MontserratBold,
        width: "90%",
        marginTop: "3%"
    },
    MonumentsCardDesc: {
        color: colors.DarkGrey,
        fontSize: 12,
        fontFamily: fontFamily.MontserratRegular,
        marginTop: "3%"
    },
    MonumentsCardDate: {
        color: colors.Black,
        fontSize: 12,
        fontFamily: fontFamily.MontserratRegular,
        marginTop: "3%"
    },
    line: {
        width: "80%",
        height: 2,
        backgroundColor: colors.LightGrey,
        alignSelf: "center",
        marginTop: "5%"
    },
    learn: {
        color: colors.LightSeaGreen,
        fontSize: 12,
        fontFamily: fontFamily.MontserratRegular,
        marginTop: "2%",
        marginBottom: "5%",
        alignSelf: "center",
        textAlign: "center",
    }
});