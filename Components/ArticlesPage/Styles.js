import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(200),
        marginHorizontal: responsiveWidth(24),
        rowGap: responsiveHeight(20),
        paddingTop: responsiveHeight(10),
        alignItems: "center",
        justifyContent: 'center',
        columnGap: responsiveWidth(20)
    },
    Gap: {
        gap: responsiveWidth(20)
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
        textAlign: "left"
    },
    filter: {
        alignSelf: "center",
    },
    Box: {
        marginTop: responsiveHeight(15),
    },

    // filterList
    modalContainer: {
        backgroundColor: colors.DarkCyan,
        justifyContent: "flex-start",
        alignItems: "center",
        width: responsiveWidth(323),
        height: responsiveHeight(281),
        position: 'absolute',
        top: (dimensions.fullHeight - responsiveHeight(281)) / 2,
        alignSelf: "center",
        borderRadius: 30,
        borderColor: colors.White,
        borderWidth: 2,
        paddingTop: responsiveHeight(28)
    },
    modal: {
        gap: responsiveHeight(5)
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: responsiveWidth(323),
        paddingHorizontal: responsiveWidth(24)
    },
    optionText: {
        color: colors.White,
        fontSize: responsiveFontSize(16),
        fontFamily: fontFamily.MontserratRegular,
    },
    check: {
        width: responsiveWidth(24),
        height: responsiveHeight(24),
        tintColor: colors.White
    },
    modaltitle: {
        color: colors.Gold,
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratBold,
        textAlign: 'left',
        alignSelf: 'flex-start',
        paddingHorizontal: responsiveWidth(24),
        marginBottom: responsiveHeight(24),
    }
});