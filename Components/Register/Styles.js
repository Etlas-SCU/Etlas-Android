import { StyleSheet } from "react-native";
import { fontFamily, colors, normalize } from "../../AppStyles";

export const styles = StyleSheet.create({
    // first Page
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: "30%"
    },
    arrow: {
        width: 32,
        height: 32,
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        fontSize: normalize(20),
        color: colors.White,
        marginTop: "18%",
        marginLeft: "6%",
        marginRight: "6%",
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: "4%",
        marginLeft: "6%",
        width: "20%",
    },
    helpingText: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: normalize(15),
        color: colors.White,
        marginTop: "4%",
        marginLeft: "6%",
    },
    inputView: {
        marginTop: "4%",
        marginLeft: "6%",
        marginRight: "6%",
        gap: 13
    },
    stateName: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(18),
        color: colors.Gold,
    },
    inputForm: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(20),
        color: colors.Black,
        backgroundColor: colors.White,
        borderRadius: 20,
        height: 58,
        paddingLeft: "4%",
        textAlign: 'left'
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passwordEyeButton: {
        width: 24,
        height: 24,
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        right: "5%"
    },
    passwordContainerImage: {
        right: 5
    },
    passText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(12),
        color: colors.Grey,
        marginTop: "2%",
    },
    usingAppText: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: normalize(18),
        color: colors.White,
        alignSelf: "center",
        marginTop: "8%",
    },
    usingAppicons: {
        flexDirection: 'row',
        marginTop: "6%",
        justifyContent: 'space-evenly',
        width: "60%",
        alignSelf: "center"
    },
    nextButton: {
        backgroundColor: colors.Gold,
        width: 181,
        height: 58,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: "10%",
        marginLeft: "6%",
        justifyContent: "center",
        alignItems: "center"
    },
    nextText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(18),
        color: colors.White,
    },
    signIn: {
        flexDirection: 'row',
        marginLeft: "6%",
        marginTop: "5%",
        gap: 8
    },
    haveAccount: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(15),
        color: colors.White,
    },
    signInText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(15),
        color: colors.Gold,
    },

    // Second Page
    nextButtonSecond: {
        backgroundColor: colors.Gold,
        width: 181,
        height: 58,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: "20%",
        marginLeft: "6%",
        justifyContent: "center",
        alignItems: "center"
    },
    usingAppSecond: {
        marginTop: "15%"
    },
    inputFormText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: normalize(20),
        color: colors.Black,
        textAlign: 'left'
    }
});