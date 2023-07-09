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
        marginTop: responsiveHeight(50),
        paddingBottom: responsiveHeight(20),
        maxHeight: responsiveHeight(750),
        gap: responsiveHeight(20),
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
        gap: responsiveHeight(14),
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
    gradientColors: [colors.White, colors.SolidGrey],
    startOff: {
        x: 0,
        y: 0
    },
    endOff: {
        x: 0,
        y: 2
    }
});