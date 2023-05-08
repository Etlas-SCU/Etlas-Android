import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(200)
    },
    header: {
        flexDirection: "row",
        marginTop: responsiveHeight(60),
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(24)
    },
    title: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratBold,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(40),
    },
    SearchForm: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
        width: responsiveWidth(302),
        height: responsiveHeight(64),
        alignSelf: "center",
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratRegular,
        paddingHorizontal: responsiveWidth(24),
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
    },
    filter: {
        alignSelf: "center",
        width: responsiveWidth(64),
        height: responsiveHeight(64),
        alignContent: "center",
        justifyContent: "center",
    },
    Box: {
        marginTop: responsiveHeight(27),
        alignItems: "center",
        gap: responsiveHeight(20)
    },
});