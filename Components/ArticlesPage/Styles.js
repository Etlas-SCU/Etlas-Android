import { colors, fontFamily, normalize, responsiveHeight, responsiveWidth } from "../../AppStyles";
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
        fontSize: normalize(18),
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
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratRegular,
        paddingHorizontal: responsiveWidth(24),
        textAlign: "left"
    },
    filter: {
        alignSelf: "center",
    },
    Box: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(27),
        rowGap: responsiveHeight(20)
    },
});