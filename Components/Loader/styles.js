import { StyleSheet } from "react-native";
import { colors, fontFamily, normalize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: responsiveWidth(358),
        height: responsiveHeight(258),
        alignSelf: "center",
        borderRadius: 20,
        top: responsiveHeight((dimensions.fullHeight - 258) / 2),
        borderColor: colors.White,
        borderWidth: 2,
        backgroundColor: colors.DarkCyan,
        alignContent: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    wait: {
        color: colors.White,
        fontFamily: fontFamily.MontserratBold,
        fontSize: normalize(20),
        marginBottom: responsiveHeight(24),
        fontWeight: "bold",
        textAlign: "center"
    },
    txt: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: normalize(18),
        width: responsiveWidth(310),
        textAlign: "center",
        alignSelf: "center",
        marginBottom: responsiveHeight(40),
    },
    dotsWrapper: {
        width: responsiveWidth(200),
        alignSelf: "center",
    },
});