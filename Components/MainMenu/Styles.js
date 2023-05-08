import { colors, fontFamily, dimensions, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: responsiveWidth(358),
        height: responsiveHeight(506),
        alignSelf: "center",
        borderRadius: 20,
        top: responsiveHeight((dimensions.fullHeight - 458) / 2),
    },
    background: {
        flex: 1,
        width: responsiveWidth(358),
        height: responsiveHeight(506),
    },
    close: {
        alignSelf: "flex-end",
        marginTop: responsiveHeight(32),
        marginRight: responsiveWidth(24),
    },
    title: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(32),
        fontFamily: fontFamily.CapitalisTypOasis,
        textAlign: "center",
        marginTop: responsiveHeight(23),
    },
    line: {
        width: responsiveWidth(90),
        height: 2,
        backgroundColor: colors.DarkCyan,
        marginTop: responsiveHeight(10),
        alignSelf: "center",
    },
    buttons: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: responsiveHeight(43),
        gap: responsiveHeight(10)
    },
    button: {
        borderRadius: 20,
        borderColor: colors.DarkCyan,
        borderWidth: 2,
        width: responsiveWidth(217),
        height: responsiveHeight(57),
        alignSelf: "center",
        justifyContent: "center",
    },
    button_text: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
        verticalAlign: "middle"
    },
    copyright: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(16),
        fontFamily: fontFamily.PoppinsRegular,
        textAlign: "center",
        marginTop: responsiveHeight(97),
    },
});