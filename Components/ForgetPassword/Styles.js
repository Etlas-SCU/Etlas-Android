import { colors, responsiveFontSize, responsiveHeight, responsiveWidth, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(30)
    },
    arrow: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        fontSize: responsiveFontSize(20),
        color: colors.White,
        marginTop: responsiveHeight(80),
        marginLeft: responsiveWidth(24),
        marginRight: responsiveWidth(24),
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: responsiveHeight(13),
        marginLeft: responsiveWidth(24),
        width: responsiveWidth(80),
    },
    helpingText: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(15),
        color: colors.White,
        marginTop: responsiveHeight(16),
        marginHorizontal: responsiveWidth(24)
    },
    inputView: {
        marginTop: responsiveHeight(79),
        marginHorizontal: responsiveWidth(24),
        gap: responsiveHeight(30)
    },
    inputContainer: {
        gap: responsiveHeight(14)
    },
    stateName: {
        fontFamily: fontFamily.PoppinsSemiBold,
        fontSize: responsiveFontSize(17),
        color: colors.Gold,
    },
    inputForm: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(20),
        color: colors.Black,
        backgroundColor: colors.White,
        borderRadius: 20,
        paddingHorizontal: responsiveWidth(24),
        width: responsiveWidth(380),
        height: responsiveHeight(58),
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    button: {
        backgroundColor: colors.Gold,
        borderRadius: 20,
        width: responsiveWidth(180),
        height: responsiveHeight(58),
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(93),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.White,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    otpInputContainer: {
        marginTop: responsiveHeight(94),
        marginHorizontal: responsiveWidth(24),
        width: responsiveWidth(380),    
        height: responsiveHeight(85)
    },
    underlineStyleBase: {
        width: responsiveWidth(50),
        height: responsiveHeight(55),
        borderRadius: 15,
        backgroundColor: colors.White,
        color: colors.Black,
        fontSize: responsiveFontSize(20),
    },
    resend: {
        marginHorizontal: responsiveWidth(24),
    },
    ResendText: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(15),
        color: colors.Cyan,
        textDecorationLine: 'underline'
    }
});