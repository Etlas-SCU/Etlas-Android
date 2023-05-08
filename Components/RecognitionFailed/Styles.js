import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200)
    },
    aboutus: {
        position: "absolute",
        alignContent: 'flex-start',
        marginTop: responsiveHeight(60),
        left: responsiveWidth(24),
    },
    body: {
        flex: 1,
        marginTop: responsiveHeight(127)
    },
    sad: {
        alignSelf: "center",
    },
    title: {
        color: colors.White,
        fontSize: responsiveFontSize(24),
        fontFamily: fontFamily.MontserratBold,
        alignSelf: "center",
        textAlign: "center",
        marginTop: responsiveHeight(45),
    },
    text: {
        color: colors.White,
        fontSize: responsiveFontSize(15),
        fontFamily: fontFamily.MontserratRegular,
        alignSelf: "center",
        textAlign: "center",
        marginTop: responsiveHeight(17),
        width: responsiveWidth(188),
    },
    button: {
        backgroundColor: colors.Gold,
        width: responsiveWidth(285),
        height: responsiveHeight(57),
        alignSelf: "center",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: responsiveHeight(99),
    },
    button_text: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratBold,
    },
});