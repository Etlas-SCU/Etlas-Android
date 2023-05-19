import { StyleSheet } from "react-native";
import { fontFamily, colors, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(200)
    },
    header: {
        flexDirection: "row",
        marginTop: responsiveHeight(60),
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    closeContainer: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        right: responsiveWidth(24),
        position: "absolute",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    close:{
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    chooseBar: {
        flexDirection: "row",
        marginTop: responsiveHeight(102),
        justifyContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
        width: responsiveWidth(382),
        height: responsiveHeight(32),
        alignSelf: "center",
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    languages: {
        flexDirection: "column",
        marginTop: responsiveHeight(50),
        gap: responsiveHeight(21)
    },
    languageText: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.DarkCyan
    },
    language: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(24)
    }
});
