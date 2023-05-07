import { colors, fontFamily, normalize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const Swipper = StyleSheet.create({
    ToursCard: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 30,
        flexDirection: 'row',
        width: responsiveWidth(346),
        height: responsiveHeight(120),
        marginHorizontal: responsiveWidth(7)
    },
    ToursCardImg: {
        width: responsiveWidth(116),
        height: responsiveHeight(120),
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    ToursCardText: {
        flexDirection: 'column',
        width: responsiveWidth(230)
    },
    ToursCardTitle: {
        color: colors.DarkCyan,
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratBold,
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(16),
    },
    ToursCardDesc: {
        color: colors.DarkGrey,
        fontSize: normalize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(1),
    },

    
    // stars
    stars: {
        flexDirection: 'row',
        backgroundColor: colors.LightGrey,
        borderRadius: 20,
        width: responsiveWidth(150),
        height: responsiveHeight(24),
        marginTop: responsiveHeight(5),
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: responsiveHeight(2),
        marginBottom: responsiveHeight(7),
        marginHorizontal: responsiveWidth(12),
        gap: responsiveWidth(3.46)
    },
});

export const Page = StyleSheet.create({
    ToursCard: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 30,
        flexDirection: 'row',
        width: responsiveWidth(382),
        height: responsiveHeight(120),
        marginHorizontal: responsiveWidth(7)
    },
    ToursCardImg: {
        width: responsiveWidth(116),
        height: responsiveHeight(120),
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    ToursCardText: {
        flexDirection: 'column',
        width: responsiveWidth(230)
    },
    ToursCardTitle: {
        color: colors.DarkCyan,
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratBold,
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(16),
    },
    ToursCardDesc: {
        color: colors.DarkGrey,
        fontSize: normalize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(2),
    },

    
    // stars
    stars: {
        flexDirection: 'row',
        backgroundColor: colors.LightGrey,
        borderRadius: 20,
        width: responsiveWidth(150),
        height: responsiveHeight(26),
        marginTop: responsiveHeight(6),
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: responsiveHeight(3),
        marginBottom: responsiveHeight(8),
        marginHorizontal: responsiveWidth(12),
    },
});