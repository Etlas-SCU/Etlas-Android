import { colors, responsiveFontSize, responsiveHeight, responsiveWidth, fontFamily } from "../../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        flexGrow: 1,
        paddingBottom: responsiveHeight(30)
    },
    backContainer:{
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(80),
        marginHorizontal: responsiveWidth(24),
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        fontSize: responsiveFontSize(20),
        color: colors.White,
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
        marginHorizontal: responsiveWidth(25),
        height: responsiveHeight(81)
    },
    underlineStyleBase: {
        width: responsiveWidth(81),
        height: responsiveHeight(81),
        borderRadius: 20,
        backgroundColor: colors.White,
        color: colors.Black,
        fontSize: responsiveFontSize(32),
    },
    resend: {
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(19),
    },
    ResendText: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(15),
        color: colors.Cyan,
        textDecorationLine: 'underline'
    },
    FirstPageInput: {
        marginHorizontal: responsiveWidth(24),
        marginVertical: responsiveHeight(79),
        gap: responsiveHeight(14)
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    passwordEyeButton: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        right: responsiveWidth(24),
        position: "absolute",
        alignContent: 'center',
    },
    passwordContainerImage: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        alignSelf: 'center',
        resizeMode: 'contain'
    }
});