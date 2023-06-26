import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(60),
        marginHorizontal: responsiveWidth(24),
        marginBottom: responsiveHeight(20)
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    close: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        position: 'absolute',
        right: responsiveWidth(0),
    },
    arrow: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    contentContainer: {
        marginTop: responsiveHeight(40),
        marginHorizontal: responsiveWidth(24),
        gap: responsiveHeight(18),
        paddingBottom: responsiveHeight(200)
    }
});