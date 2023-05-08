import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, isIOS } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    upperBox: {
        backgroundColor: colors.White,
        height: responsiveHeight(300 + (isIOS() ? 0 : 50)),
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200),
    },
    close: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        alignSelf: 'flex-end',
        marginTop: responsiveHeight(55),
        marginRight: responsiveWidth(24),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
        alignSelf: "center"
    },
    WhiteBody: {
        backgroundColor: colors.White,
    },
    body: {
        backgroundColor: colors.DarkCyan,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    profile: {
        backgroundColor: colors.DarkCyan,
        alignSelf: "center",
        marginTop: responsiveHeight(-100),
        borderColor: colors.DarkCyan,
        borderWidth: 10,
    },
    profilePic: {
        alignSelf: "center",
        height: responsiveHeight(228.15),
        width: responsiveWidth(228.15),
    },
    name: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(24),
        color: colors.White,
        alignSelf: "center",
        marginTop: responsiveHeight(25.23),
    },
    field: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        color: colors.Gold,
    },
    info: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(20),
        color: colors.White,
    },
    infoBox: {
        backgroundColor: colors.DarkCyan,
        marginTop: responsiveHeight(44),
        marginLeft: responsiveWidth(24),
        gap: responsiveHeight(32)
    },
    Box: {
        gap: responsiveHeight(3)
    }
});