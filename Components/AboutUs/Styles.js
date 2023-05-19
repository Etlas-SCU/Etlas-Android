import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {},
    logo: {
        alignSelf: "center",
        marginTop: responsiveHeight(136),
    },
    background: {
        flex: 1,
        resizeMode: 'contain',
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: 2,
        alignSelf: "center",
        marginTop: responsiveHeight(45),
        width: responsiveWidth(175),
    },
    copyright: {
        alignSelf: "center",
        color: colors.White,
        fontSize: responsiveFontSize(13),
        fontFamily: fontFamily.PoppinsRegular,
    },
    description: {
        marginTop: responsiveHeight(34),
        alignSelf: "center",
        textAlign: "center",
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratRegular,
        width: responsiveWidth(350)
    },
    usingAppicons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: dimensions.fullWidth,
        alignSelf: "center",
        marginTop: responsiveHeight(-30),
        width: responsiveWidth(338)
    },
    findus: {
        marginTop: responsiveHeight(13),
        alignSelf: "center",
        color: colors.White,
        fontSize: responsiveFontSize(15),
        fontFamily: fontFamily.MontserratRegular,
    },
    close: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    closeContainer: {
        position: "absolute",
        alignSelf: 'flex-end',
        right: responsiveWidth(24),
        top: responsiveHeight(60),
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    contactus: {
        borderColor: colors.White,
        borderWidth: responsiveWidth(2),
        borderRadius: 20,
        width: responsiveWidth(342),
        alignSelf: "center",
        marginTop: responsiveHeight(70),
        paddingBottom: responsiveHeight(200),
    },
    icon: {
        backgroundColor: colors.DarkCyan,
    },
    IconButton: {
        backgroundColor: colors.DarkCyan,
        paddingHorizontal: responsiveWidth(7),
        alignContent: "center",
        justifyContent: "center",
    }
});