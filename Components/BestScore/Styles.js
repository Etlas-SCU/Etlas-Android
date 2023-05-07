import { StyleSheet } from "react-native";
import { fontFamily, colors, normalize, responsiveHeight, responsiveWidth, isIOS } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200),
    },
    image: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        alignItems: "center",
        marginTop: responsiveHeight(60),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.DarkCyan,
        fontSize: normalize(18),
        textAlign: 'center',
    },
    ScoreBox: {
        width: responsiveWidth(382),
        height: responsiveHeight(380 + (isIOS() ? 0 : 40)),
        backgroundColor: colors.DarkCyan,
        alignSelf: "center",
        marginTop: responsiveHeight(77),
        borderRadius: 20,
        paddingBottom: responsiveHeight(44)
    },
    score: {
        color: colors.White,
        fontSize: normalize(100),
        fontFamily: fontFamily.MontserratBold,
        alignSelf: "center",
        marginTop: responsiveHeight(48),
    },
    scoreTxt: {
        color: colors.White,
        fontSize: normalize(25),
        fontFamily: fontFamily.MontserratMedium,
        alignSelf: "center",
        marginTop: responsiveHeight(24),
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: 1,
        width: responsiveWidth(116),
        alignSelf: "center",
        marginTop: responsiveHeight(32),
    },
    bestScore: {
        color: colors.Gold,
        fontSize: normalize(30),
        fontFamily: fontFamily.MontserratSemiBold,
        alignSelf: "center",
        marginTop: responsiveHeight(30),
    },
    buttonContainer: {
        width: responsiveWidth(382),
        marginTop: responsiveHeight(123),
        alignSelf: "center",
        alignItems: "center"
    },
    ask: {
        color: colors.DarkCyan,
        fontSize: normalize(20),
        fontFamily: fontFamily.MontserratBold,
        width: responsiveWidth(280),
        textAlign: "center",
        alignSelf: "center",
    },
    button: {
        backgroundColor: colors.DarkCyan,
        width: responsiveWidth(221),
        height: responsiveHeight(57),
        alignSelf: "center",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: responsiveHeight(25),
    },
    buttonText: {
        color: colors.White,
        fontSize: normalize(20),
        fontFamily: fontFamily.MontserratBold,
    },
});