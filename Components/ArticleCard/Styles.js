import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../AppStyles'
import { StyleSheet } from 'react-native'


export const Swipper = StyleSheet.create({
    MonumentsCard: {
        width: responsiveWidth(161),
        backgroundColor: colors.SolidGrey,
        marginHorizontal: responsiveWidth(5),
        borderRadius: 20,
    },
    MonumentsCardImg: {
        alignContent: "center",
        alignSelf: "center",
        marginTop: responsiveHeight(9),
        width: responsiveWidth(147),
        height: responsiveHeight(88),
    },
    MonumentsCardText: {
        flexDirection: "column",
        width: responsiveWidth(139),
        paddingHorizontal: responsiveWidth(8)
    },
    MonumentsCardTitle: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(16),
        fontFamily: fontFamily.MontserratBold,
        marginTop: responsiveHeight(6),
        width: responsiveWidth(145)
    },
    MonumentsCardDesc: {
        color: colors.DarkGrey,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginTop: responsiveHeight(5),
    },
    MonumentsCardDate: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratSemiBold,
        marginTop: responsiveHeight(5),
    },
    line: {
        width: responsiveWidth(128),
        height: 2,
        backgroundColor: colors.LightGrey,
        alignSelf: "center",
        marginTop: responsiveHeight(15)
    },
    learn: {
        color: colors.LightSeaGreen,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(5),
        alignSelf: "center",
        textAlign: "center",
    }
});

export const Page = StyleSheet.create({
    MonumentsCard: {
        width: responsiveWidth(181),
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
    },
    MonumentsCardImg: {
        alignContent: "center",
        alignSelf: "center",
        marginTop: responsiveHeight(10),
        width: responsiveWidth(165),
        height: responsiveHeight(98),
    },
    MonumentsCardText: {
        flexDirection: "column",
        width: responsiveWidth(165),
        paddingHorizontal: responsiveWidth(8)
    },
    MonumentsCardTitle: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(16),
        fontFamily: fontFamily.MontserratBold,
        marginTop: responsiveHeight(7),
        width: responsiveWidth(165)
    },
    MonumentsCardDesc: {
        color: colors.DarkGrey,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginTop: responsiveHeight(7.82),
    },
    MonumentsCardDate: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratSemiBold,
        marginTop: responsiveHeight(7.83),
    },
    line: {
        width: responsiveWidth(144),
        height: 2,
        backgroundColor: colors.LightGrey,
        alignSelf: "center",
        marginTop: responsiveHeight(18.38)
    },
    learn: {
        color: colors.LightSeaGreen,
        fontSize: responsiveFontSize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginTop: responsiveHeight(4),
        marginBottom: responsiveHeight(6),
        alignSelf: "center",
        textAlign: "center",
    }
});