import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
        borderRadius: 100,
        width: '100%',
    },
    message: {
        color: colors.DarkCyan,
        fontSize: responsiveFontSize(15),
        marginBottom: responsiveHeight(24),
        fontFamily: fontFamily.MontserratSemiBold,
        width: responsiveWidth(280),
        textAlign: "center",
    },
    button: {
        borderRadius: 20,
        width: responsiveWidth(280),
        height: responsiveHeight(40),
        marginBottom: responsiveHeight(16),
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: colors.White,
        fontSize: responsiveFontSize(15),
        fontFamily: fontFamily.MontserratSemiBold,
    },
});