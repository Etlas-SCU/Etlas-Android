import { StyleSheet } from "react-native";
import { fontFamily, colors, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";


export const styles = StyleSheet.create({
    // first Page
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
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
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(15),
        color: colors.White,
        marginTop: responsiveHeight(16),
        marginLeft: responsiveWidth(24),
    },
    inputView: {
        marginTop: responsiveHeight(22),
        marginLeft: responsiveWidth(24),
        marginRight: responsiveWidth(24),
        gap: responsiveWidth(8)
    },
    stateName: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(18),
        color: colors.Gold,
    },
    inputForm: {
        fontFamily: fontFamily.MontserratSemiBold,
        width: responsiveWidth(380),
        fontSize: responsiveFontSize(20),
        color: colors.Black,
        backgroundColor: colors.White,
        borderRadius: 20,
        height: responsiveHeight(58),
        paddingLeft: responsiveWidth(23.5),
        textAlign: 'left'
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    passwordEyeButton: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        right: responsiveWidth(24)
    },
    passwordContainerImage: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        resizeMode: 'contain'
    },
    passText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(12),
        color: colors.Grey,
        marginTop: responsiveHeight(17),
    },
    usingApp: {
        width: responsiveWidth(194),
        alignSelf: "center",
        marginTop: responsiveHeight(37),
    },
    usingAppText: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        color: colors.White,
        alignSelf: "center",
    },
    usingAppicons: {
        flexDirection: 'row',
        marginTop: responsiveHeight(25),
        justifyContent: 'space-evenly',
        alignSelf: "center",
        gap: responsiveWidth(25)
    },
    nextButton: {
        backgroundColor: colors.Gold,
        width: responsiveWidth(181),
        height: responsiveHeight(58),
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: responsiveHeight(36),
        marginLeft: responsiveWidth(24),
        justifyContent: "center",
        alignItems: "center"
    },
    nextText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(18),
        color: colors.White,
    },
    signIn: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(24),
        marginTop: responsiveHeight(16),
        gap: responsiveWidth(6)
    },
    haveAccount: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(15),
        color: colors.White,
    },
    signInText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(15),
        color: colors.Gold,
    },

    // Second Page
    nextButtonSecond: {
        backgroundColor: colors.Gold,
        width: responsiveWidth(181),
        height: responsiveHeight(58),
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: responsiveHeight(165),
        marginLeft: responsiveWidth(24),
        justifyContent: "center",
        alignItems: "center"
    },
    usingAppSecond: {
        marginTop: responsiveHeight(73)
    },
    inputFormText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(20),
        color: colors.Black,
        textAlign: 'left'
    }
});