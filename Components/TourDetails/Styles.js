import { StyleSheet } from "react-native";
import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    back: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.DarkCyan,
        position: 'absolute',
        top: responsiveHeight(60),
        right: responsiveWidth(24),
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
        zIndex: -1,
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
        marginTop: responsiveHeight(22),
        justifyContent: "space-between",
        marginHorizontal: responsiveWidth(24)
    },
    title: {
        color: colors.Gold,
        fontSize: responsiveFontSize(22),
        fontFamily: fontFamily.MontserratBold,
    },
    description: {
        color: colors.DarkGrey,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(32),
    }
})