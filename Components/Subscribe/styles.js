import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: responsiveWidth(323),
        height: responsiveHeight(383),
        alignSelf: "center",
        borderRadius: 30,
        top: (dimensions.fullHeight - responsiveHeight(450)) / 2,
        borderColor: colors.White,
        borderWidth: 2,
        backgroundColor: colors.DarkCyan,
        alignContent: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    title: {
        fontFamily: fontFamily.MontserratBlack,
        fontSize: responsiveFontSize(24),
        color: colors.White,
        marginHorizontal: responsiveWidth(24),
        textAlign: 'center',
        letterSpacing: -0.45
    },
    ran_out: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(16),
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(16),
        textAlign: 'center',
        letterSpacing: -0.45
    },
    subscribeText: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(16),
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(10),
        textAlign: 'center',
        letterSpacing: -0.45,
    },
    subscribeBtn: {
        width: responsiveWidth(168),
        height: responsiveHeight(48),
        borderRadius: 20,
        backgroundColor: colors.Gold,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(48),
        verticalAlign: 'middle'
    },
    subscribeBtnText: {
        color: colors.White,
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(15.5),
        letterSpacing: -0.45
    },
    cancelBtn: {
        width: responsiveWidth(168),
        height: responsiveHeight(48),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(16),
        verticalAlign: 'middle'
    },
    cancelBtnText: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(15.5),
        letterSpacing: -0.45
    },
});