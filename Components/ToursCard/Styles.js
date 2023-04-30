import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ToursCard: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 30,
        flexDirection: 'row',
        width: 346,
        height: 120,
        marginHorizontal: 5
    },
    ToursCardImg: {
        width: 116,
        height: 120,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    ToursCardText: {
        flexDirection: 'column'
    },
    ToursCardTitle: {
        color: colors.DarkCyan,
        fontSize: 18,
        fontFamily: fontFamily.MontserratBold,
        marginLeft: "5%",
        marginTop: "2%",
    },
    ToursCardDesc: {
        color: colors.DarkGrey,
        fontSize: 12,
        fontFamily: fontFamily.MontserratRegular,
        marginLeft: "5%",
        marginTop: "2%",
        width: "60%"
    },

    
    // stars
    stars: {
        flexDirection: 'row',
        backgroundColor: colors.LightGrey,
        borderRadius: 20,
        width: "60%",
        marginLeft: "5%",
        marginTop: "2%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        padding: 5
    },
});