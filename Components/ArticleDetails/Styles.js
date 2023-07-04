import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    backContainer: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        right: responsiveWidth(24),
        top: responsiveHeight(60),
        position: 'absolute',
        zIndex: 999
    },
    back: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.SolidGrey,
    },
    upperBox: {
        width: dimensions.fullWidth,
        height: responsiveHeight(431),
        zIndex: -1,
    },
    lowerBox: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
        borderTopLeftRadius: responsiveWidth(30),
        borderTopRightRadius: responsiveWidth(30),
        marginTop: responsiveHeight(-30),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(22),
        color: colors.Gold,
        maxWidth: dimensions.fullWidth - responsiveWidth(100)
    },
    date: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(12),
        color: colors.White,
    },
    scrollView: {
        marginTop: responsiveHeight(32),
        marginHorizontal: responsiveWidth(24),
        paddingBottom: responsiveHeight(180)
    },
    description: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        color: colors.White,
    },
    upperFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(22),
        marginBottom: responsiveHeight(10),
        gap: responsiveWidth(10),
        width: responsiveWidth(382)
    },
    txts: {
        gap: responsiveHeight(5),
        flex: 1
    },
    favouriteConainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        verticalAlign: 'top',
    },
    fav: {
        width: responsiveWidth(64),
        height: responsiveHeight(64),
        borderRadius: 20,
        backgroundColor: colors.DarkRed,
        justifyContent: 'center',
    },
    favIcon: {
        width: responsiveWidth(39.75),
        height: responsiveHeight(35.26),
        alignSelf: 'center',
    },
    section: {
        marginVertical: responsiveHeight(10),
        gap: responsiveHeight(10)
    },
    sectionTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.White,
    },
    sectionDescription: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(14),
        color: colors.White,
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.SolidGrey,
        color: colors.Gold,
        width: dimensions.fullWidth,
        height: responsiveHeight(431),
    }
})