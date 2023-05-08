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
        marginTop: responsiveHeight(68),
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
    etlas: {
        color: colors.Gold,
        fontSize: responsiveFontSize(48),
        fontFamily: fontFamily.CapitalisTypOasis,
        textAlign: "center",
        marginTop: responsiveHeight(67),
    },
    desc: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratSemiBold,
        textAlign: "center",
        marginTop: responsiveHeight(33),
        width: responsiveWidth(330),
        alignSelf: "center"
    },
    logo: {
        alignSelf: "center",
        marginTop: responsiveHeight(100),
        position: "absolute",
        height: responsiveHeight(300),
        width: responsiveWidth(300),
        resizeMode: "cover"
    },
    SearchForm: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
        width: responsiveWidth(382),
        height: responsiveHeight(64),
        alignSelf: "center",
        marginTop: responsiveHeight(33),
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratRegular,
        paddingHorizontal: responsiveWidth(22),
        textAlign: "left"
    },
    Box: {
        width: responsiveWidth(406),
    },
    boxHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    boxTitle: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratRegular,
        textAlign: "center",
        margin: responsiveWidth(24)
    },
    see_all: {
        alignContent: 'flex-end',
        position: "absolute",
        right: responsiveWidth(24),
    },
    see_all_text: {
        color: colors.Gold,
        fontSize: responsiveFontSize(14),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
    },
    swipper: {
        flex: 1,
        marginLeft: responsiveWidth(20),
        borderRadius: 20,
    },
});