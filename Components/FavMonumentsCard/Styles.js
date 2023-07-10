import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";


export const styles = StyleSheet.create({
    MonumentcardTextContainer: {
        width: responsiveWidth(240),
        textAlign: 'left',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: responsiveWidth(16),
        paddingRight: responsiveWidth(6),
    },
    MonumentcardTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.Gold,
        marginTop: responsiveHeight(15),
    },
    MonumentcardDescription: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(16),
        color: colors.White,
        marginTop: responsiveHeight(5),
    },
    MonumentcardDate: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(16),
        color: colors.Grey,
        marginTop: responsiveHeight(13),
        marginBottom: responsiveHeight(18)
    },
    MonumentcardImgContainer: {
        borderRadius: 20,
        width: responsiveWidth(100),
        height: responsiveHeight(120),
        justifyContent: 'center',
        alignItems: 'center',
    },
    MonumentcardImg: {
        height: responsiveHeight(120),
        width: responsiveWidth(100),
        borderRadius: 20,
        resizeMode: 'contain',
    },
    gradient: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    gradientColors: [colors.White, colors.SolidGrey],
    startOff: {
        x: 0,
        y: 0
    },
    endOff: {
        x: 0,
        y: 2
    },
    cardContainer: {
        width: responsiveWidth(382),
        backgroundColor: colors.DarkCyan,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardImgContainer: {
        borderRadius: 20,
        width: responsiveWidth(100),
        height: responsiveHeight(120),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImg: {
        height: responsiveHeight(120),
        width: responsiveWidth(100),
        borderRadius: 20,
    },
    cardTextContainer: {
        width: responsiveWidth(240),
        textAlign: 'left',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: responsiveWidth(16),
        paddingRight: responsiveWidth(6),
    },
    cardTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.White,
        marginTop: responsiveHeight(5),
    },
    cardDescription: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(12),
        color: colors.DarkGrey,
        marginTop: responsiveHeight(5),
    },
    cardDate: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(11),
        color: colors.White,
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(18)
    },
    CardIconsConainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(14),
    },
    CardIconImg: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
});