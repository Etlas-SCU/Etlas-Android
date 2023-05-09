import { colors, responsiveFontSize, responsiveHeight, responsiveWidth, fontFamily, dimensions } from '../../AppStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200),
    },
    header: {
        flexDirection: 'row',
        marginTop: responsiveHeight(60),
        width: dimensions.fullWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(24),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    logout: {
        tintColor: colors.DarkCyan,
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    circle: {
        tintColor: colors.DarkCyan
    },
    profile: {
        alignSelf: 'center',
        borderColor: colors.DarkCyan,
        borderWidth: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.DarkCyan,
        verticalAlign: 'middle',
    },
    profilePic: {
        resizeMode: 'contain',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.DarkCyan,
        width: '100%',
        height: '100%'
    },
    name: {
        fontFamily: fontFamily.PoppinsBold,
        fontSize: responsiveFontSize(16),
        color: colors.DarkCyan,
        alignSelf: 'center',
    },
    avatarBox: {
        flexDirection: 'column',
        marginTop: responsiveHeight(49),
        gap: responsiveHeight(14.3)
    },
    buttonEdit: {
        alignSelf: 'center',
        width: responsiveWidth(187),
        height: responsiveHeight(60),
        backgroundColor: colors.DarkCyan,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(30),
    },
    buttonText: {
        fontFamily: fontFamily.PoppinsBold,
        fontSize: responsiveFontSize(16),
        color: colors.White,
    },
    Box: {
        alignSelf: 'center',
        width: responsiveWidth(382),
        marginTop: responsiveHeight(64),
        gap: 30
    },
    Bar: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 10,
        width: responsiveWidth(382),
        height: responsiveHeight(32),
        textAlign: 'left',
        justifyContent: 'center',
        verticalAlign: 'middle',
        paddingLeft: responsiveWidth(12),
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.PoppinsRegular,
        color: colors.DarkCyan,
    },
    lineBar: {
        flexDirection: 'row',
    },
    left: {
        flexDirection: 'row',
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        justifyContent: 'center'
    },
    right: {
        flexDirection: 'row',
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    middle: {
        flex: 4,
        flexDirection: 'row',
        paddingLeft: responsiveWidth(13),
        paddingRight: responsiveWidth(13),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontFamily: fontFamily.PoppinsBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    logout: {
        marginTop: responsiveHeight(40)
    }
});