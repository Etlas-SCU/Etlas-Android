import { colors, responsiveFontSize, responsiveHeight, responsiveWidth, fontFamily } from "../../AppStyles";
import { StyleSheet, Platform } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.White,
    },
    contentContainer: {
        gap: responsiveHeight(14),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(60),
        marginHorizontal: responsiveWidth(24),
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    close: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        position: 'absolute',
        right: responsiveWidth(0),
    },
    arrow: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
    },
    containersContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(50),
        paddingBottom: responsiveHeight(20),
        maxHeight: responsiveHeight(750),
        gap: responsiveHeight(20)
    },
    ArticlesScrollView: {
        marginVertical: responsiveHeight(17),
        marginHorizontal: responsiveWidth(24),
        maxHeight: responsiveHeight(260)
    },
    MonumentsScrollView: {
        marginVertical: responsiveHeight(17),
        marginHorizontal: responsiveWidth(24),
        maxHeight: responsiveHeight(280),
    },
    containerScroll: {
        flex: 1,
    },
    ScrollViewContent: {
        gap: responsiveHeight(14)
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: responsiveHeight(10),
        marginHorizontal: responsiveWidth(24)
    },
    containerHeaderTitle: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(18),
        fontWeight: 'bold',
        color: colors.DarkCyan,
    },
    see_all: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    see_all_text: {
        fontFamily: fontFamily.MontserratSemiBold,
        fontSize: responsiveFontSize(18),
        color: colors.Gold,
    },
    // ArticleCard
    cardContainer: {
        width: responsiveWidth(382),
        backgroundColor: colors.DarkCyan,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardImgContainer: {
        borderRadius: 20,
        width: responsiveWidth(100),
        height: responsiveHeight(120),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImg: {
        height: responsiveHeight(120),
        width: responsiveWidth(100),
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardTextContainer: {
        width: responsiveWidth(240),
        textAlign: 'left',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: responsiveWidth(16),
        paddingRight: responsiveWidth(6),
    },
    cardTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.White,
        marginTop: responsiveHeight(5),
    },
    cardDescription: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(12),
        color: colors.DarkGrey,
        marginTop: responsiveHeight(5),
    },
    cardDate: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(11),
        color: colors.White,
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(18)
    },
    CardIconsConainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(14),
    },
    CardIconImg: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    shadowProp: {
        backgroundColor: colors.White,
        borderRadius: 20,
    },
    gradient: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    // MonumentCard
    MonumentcardTextContainer: {
        width: responsiveWidth(240),
        textAlign: 'left',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: responsiveWidth(16),
        paddingRight: responsiveWidth(6),
    },
    MonumentcardTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.Gold,
        marginTop: responsiveHeight(15),
    },
    MonumentcardDescription: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(16),
        color: colors.White,
        marginTop: responsiveHeight(5),
    },
    MonumentcardDate: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(16),
        color: colors.Grey,
        marginTop: responsiveHeight(13),
        marginBottom: responsiveHeight(18)
    },
    MonumentcardImgContainer: {
        borderRadius: 20,
        width: responsiveWidth(100),
        height: responsiveHeight(120),
        justifyContent: 'center',
        alignItems: 'center',
    },
    MonumentcardImg: {
        height: responsiveHeight(120),
        width: responsiveWidth(100),
        borderRadius: 20,
        resizeMode: 'contain',
    },
    gradientColors: [colors.White, colors.SolidGrey],
    startOff: {
        x: 0,
        y: 0
    },
    endOff: {
        x: 0,
        y: 2
    },
});