import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(150)
    },
    header: {
        flexDirection: "row",
        marginTop: responsiveHeight(61),
        justifyContent: "center",
        alignItems: "center",
    },
    aboutus: {
        position: "absolute",
        alignContent: 'flex-start',
        left: responsiveWidth(24),
    },
    title: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
    },
    cards: {
        flexDirection: 'column',
        width: responsiveWidth(382),
        marginHorizontal: responsiveWidth(24),
        gap: responsiveWidth(44),
        marginTop: responsiveHeight(64),
    },
    body: {
        height: responsiveHeight(188.39),
        backgroundColor: colors.Gold,
        alignSelf: "center",
        borderRadius: 20,
        flexDirection: "row",
        paddingLeft: responsiveWidth(16),
    },
    bodyContent: {
        width: responsiveWidth(235.62),
        justifyContent: 'space-between',
        paddingTop: responsiveHeight(16),
        paddingBottom: responsiveHeight(17),
    },
    bodyTitle: {
        color: colors.White,
        fontSize: responsiveFontSize(32),
        fontFamily: fontFamily.MontserratBold,
    },
    bodyText: {
        color: colors.White,
        fontSize: responsiveFontSize(14),
        fontFamily: fontFamily.MontserratLight,
        width: responsiveWidth(220)
    },
    bodyScore: {
        color: colors.White,
        fontSize: responsiveFontSize(48),
        fontFamily: fontFamily.MontserratBold,
    },
    bodyImage: {
        width: responsiveWidth(146.38),
        height: responsiveHeight(188.39),
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: responsiveHeight(146.38),
        height: responsiveHeight(188.39),
        alignSelf: "flex-end"
    }
});