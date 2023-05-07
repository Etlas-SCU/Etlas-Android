import { colors, fontFamily, normalize } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ToursCard: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 30,
        flexDirection: 'row',
        width: 346,
        marginHorizontal: 5
    },
    ToursCardImg: {
        width: "35%",
        height: "100%",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    ToursCardText: {
        flexDirection: 'column',
        width: "65%"
    },
    ToursCardTitle: {
        color: colors.DarkCyan,
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratBold,
        marginLeft: "5%",
        marginTop: "2%",
    },
    ToursCardDesc: {
        color: colors.DarkGrey,
        fontSize: normalize(12),
        fontFamily: fontFamily.MontserratRegular,
        marginLeft: "5%",
        marginTop: "2%",
        width: "90%"
    },

    
    // stars
    stars: {
        flexDirection: 'row',
        backgroundColor: colors.LightGrey,
        borderRadius: 20,
        marginTop: "3%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
        marginBottom: "3%",
        width: "80%",
        alignSelf: "center"
    },
});