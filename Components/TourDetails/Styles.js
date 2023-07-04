import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    backContainer: {
        position: "absolute",
        alignSelf: 'flex-end',
        right: responsiveWidth(24),
        top: responsiveHeight(60),
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        zIndex: 999
    },
    back: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.DarkCyan,
    },
    ScrollContainer: {
        paddingBottom: responsiveHeight(200)
    },
    slide: {
        flex: 1,
        alignItems: "center",
        width: dimensions.fullWidth,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    Swiper: {
        flex: 1,
        height: responsiveHeight(469),
        width: dimensions.fullWidth,
        zIndex: -999,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    image: {
        width: dimensions.fullWidth,
        height: responsiveHeight(469),
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        resizeMode: 'stretch'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        top: responsiveHeight(420),
        left: responsiveWidth(115),
        backgroundColor: '#0000007F',
        borderRadius: 20,
        height: responsiveHeight(32),
        width: responsiveWidth(200),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',    
    },
    dot: {
        width: responsiveWidth(16),
        height: responsiveHeight(18),
        borderRadius: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(24),
        marginBottom: responsiveHeight(24)
    },
    title: {
        color: colors.Gold,
        fontSize: responsiveFontSize(22),
        fontFamily: fontFamily.MontserratBold,    
    },
    description: {
        color: colors.DarkGrey,
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(32),
    },
    section: {
        marginVertical: responsiveHeight(20),
        gap: responsiveHeight(10),
        marginHorizontal: responsiveWidth(24),
    },
    sectionTitle: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    sectionDescription: {
        fontFamily: fontFamily.MontserratRegular,
        fontSize: responsiveFontSize(14),
        color: colors.DarkCyan,
    },
})