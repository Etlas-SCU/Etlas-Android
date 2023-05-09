import { colors, dimensions, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: responsiveHeight(50),
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
    close:{
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        right: responsiveWidth(24),
        position: "absolute",
        alignContent: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.DarkCyan,
        resizeMode: 'contain'
    },
    DarkConatiner: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
        width: dimensions.fullWidth,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: responsiveHeight(158),
        position: 'relative',
        zIndex: 0
    },
    statue: {
        position: 'absolute',
        top: responsiveHeight(80),
        resizeMode: 'contain',
        left: responsiveWidth(0),
        zIndex: -1
    },
    pyramids: {
        position: 'absolute',
        right: responsiveWidth(-20),
        top: responsiveHeight(180),
        resizeMode: 'contain',
        zIndex: 999
    },
    copyright: {
        fontFamily: fontFamily.PoppinsRegular,
        fontSize: responsiveFontSize(10),
        color: colors.White,
        marginHorizontal: responsiveWidth(24),
        marginVertical: responsiveHeight(27),
    },
    HTML: {
        fontFamily: fontFamily.PoppinsRegular,
        fontSize: responsiveFontSize(10),
        color: colors.White,
        marginHorizontal: responsiveWidth(24)
    }
});