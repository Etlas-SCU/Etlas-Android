import { colors, responsiveHeight, responsiveWidth, fontFamily, responsiveFontSize } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
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
        tintColor: colors.White,
        zIndex: 1
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200)
    },
    upperBox: {
        backgroundColor: colors.DarkCyan,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: responsiveWidth(430),
        height: responsiveHeight(288),
        zIndex: -1
    },
    cover: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: responsiveWidth(430),
        height: responsiveHeight(288),
        zIndex: -1,
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: colors.White,
        marginTop: responsiveHeight(32),
        marginLeft: responsiveWidth(24),
        gap: responsiveHeight(8)
    },
    inputContainer: {
        gap: responsiveHeight(13)
    },
    title: {
        color: colors.Gold,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratSemiBold,
    },
    input: {
        width: responsiveWidth(380),
        height: responsiveHeight(58),
        borderRadius: 20,
        backgroundColor: colors.DarkCyan,
        paddingLeft: responsiveWidth(24),
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratSemiBold,
        textAlign: 'left',
        textAlignVertical: 'center',
        color: colors.White
    },
    input_message: {
        width: responsiveWidth(380),
        height: responsiveHeight(239),
        borderRadius: 20,
        backgroundColor: colors.DarkCyan,
        paddingLeft: responsiveWidth(24),
        paddingTop: responsiveHeight(24),
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratSemiBold,
        textAlign: 'left',
        textAlignVertical: 'top',
        verticalAlign: "top",
        justifyContent: 'flex-start',
        color: colors.White
    },
    button: {
        width: responsiveWidth(200),
        height: responsiveHeight(64),
        borderRadius: 20,
        backgroundColor: colors.Gold,
        marginTop: responsiveHeight(22),
        alignContent: "center",
        justifyContent: "center"
    },
    submit: {
        color: colors.White,
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
        textAlignVertical: "center",
    },
    boxtitle: {
        color: colors.White,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
        textAlignVertical: "center",
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 999,
        marginTop: responsiveHeight(60),
    }
});