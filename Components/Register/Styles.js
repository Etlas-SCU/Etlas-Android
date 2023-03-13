import { StyleSheet } from "react-native";
import { fontFamily, colors } from "../../AppStyles";

export const styles = StyleSheet.create({
    // first Page
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        fontSize: 20,
        color: colors.White,
        marginTop: 80,
        marginLeft: 24,
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 13,
        marginLeft: 24,
        width: 80,
    }, 
    helpingText: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: 15,
        color: colors.White,
        marginTop: 16,
        marginLeft: 24,
    },
    inputView: {
        marginTop: 14,
        marginLeft: 24,
        marginRight: 24,
        gap: 13
    },
    stateName: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 18,
        color: colors.Gold,
    },
    inputForm: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 20,
        color: colors.Grey,
        backgroundColor: colors.White,
        borderRadius: 20,
        height: 58,
        paddingLeft: 14,
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
        right: 14
    },
    passwordContainerImage: {
        right: 5
    },
    passText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 12,
        color: colors.Grey,
        marginTop: 8,
    },
    usingAppText: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: 18,
        color: colors.White,
        alignSelf: "center",
        marginTop: 20,
    },
    usingAppicons: {
        flexDirection: 'row',
        marginTop: 20,
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
        marginTop: 20,
        marginLeft: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    nextText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 18,
        color: colors.White,
    },
    signIn: {
        flexDirection: 'row',
        marginLeft: 24,
        marginTop: 20,
        gap: 8
    },
    haveAccount: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 15,
        color: colors.White,
    },
    signInText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 15,
        color: colors.Gold,
    },

    // Second Page
    nextButtonSecond: {
        backgroundColor: colors.Gold,
        width: 181,
        height: 58,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: 120,
        marginLeft: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    usingAppSecond: {
        marginTop: 70
    },
    inputFormText: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: 20,
        color: colors.Grey,
    }
});