import { colors, dimensions, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(323),
        height: responsiveHeight(281),
        borderRadius: 30,
        borderColor: colors.White,
        borderWidth: 2,
        position: 'absolute',
        top: (dimensions.fullHeight - responsiveHeight(281)) / 2,
        left: (dimensions.fullWidth - responsiveWidth(323)) / 2,
    },
    icon: {
        resizeMode: 'contain',
        position: 'absolute',
        bottom: responsiveHeight(0),
        right: responsiveWidth(0),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(28),
        color: colors.White,
    },
    message: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        color: colors.White,
        marginHorizontal: responsiveWidth(45),
        textAlign: "center"
    }
});