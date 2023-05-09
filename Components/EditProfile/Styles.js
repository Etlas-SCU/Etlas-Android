import { colors, responsiveHeight, responsiveFontSize, responsiveWidth, fontFamily } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
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
    profileContainer: {
        flex: 1,
        marginTop: responsiveHeight(40),
        marginHorizontal: responsiveWidth(24),
        gap: responsiveHeight(8)
    },
    input_title: {
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
        color: colors.Grey
    },
    inputContainer: {
        gap: responsiveHeight(13)
    },
    saveButton: {
        width: responsiveWidth(220),
        height: responsiveHeight(57),
        borderRadius: 20,
        backgroundColor: colors.DarkCyan,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(108),
    },
    saveButtonText: {
        color: colors.White,
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratBold,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});