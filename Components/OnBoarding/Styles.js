import { StyleSheet } from "react-native";
import { fontFamily, colors, responsiveFontSize, responsiveWidth, responsiveHeight, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    containerScrolling: {
        flexGrow: 1,
        // paddingBottom: responsiveHeight(20)
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        color: colors.Gold,
        fontSize: responsiveFontSize(50),
        textAlign: 'left',
        marginTop: responsiveHeight(102),
        marginLeft: responsiveWidth(24),
    },
    desc: {
        fontFamily: fontFamily.MontserratMedium,
        color: colors.White,
        fontSize: responsiveFontSize(20),
        textAlign: 'left',
        marginTop: responsiveHeight(23),
        marginLeft: responsiveWidth(24),
        flexDirection: "row",
        flexWrap: "wrap",
        width: responsiveWidth(284)
    },
    worry: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: responsiveFontSize(20),
        textAlign: 'left',
        marginTop: responsiveHeight(23),
        marginLeft: responsiveWidth(24),
        flexDirection: "row",
        flexWrap: "wrap",
        width: responsiveWidth(287)
    },
    logoContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: "absolute",
        top: responsiveHeight(391),
        right: responsiveWidth(0),
    },
    wolf: {
        resizeMode: 'contain',
        width: responsiveWidth(468),
        height: responsiveHeight(468),
        position: 'absolute',
        bottom: responsiveHeight(-100),
        left: responsiveWidth(-150)
    },
    button_container: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(246),
        gap: responsiveWidth(20),
    },
    sign_buttons: {
        width: responsiveWidth(181),
        height: responsiveHeight(57),
        borderRadius: 20,
        backgroundColor: colors.Gold,
        justifyContent: "center",
        alignItems: "center",
    },
    button_text: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: responsiveFontSize(20),
        textAlign: 'center',
    },
    sign_in: {
        backgroundColor: colors.Gold,
    },
    sign_up: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.Gold,
    },
    bottom_container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});