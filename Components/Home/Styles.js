import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan
    },
    header: {
        flexDirection: "row",
        marginTop: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    aboutus: {
        position: "absolute",
        alignContent: 'flex-start',
        left: "5%",
    },
    title: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
    },
    etlas: {
        color: colors.Gold,
        fontSize: 48,
        fontFamily: fontFamily.CapitalisTypOasis,
        textAlign: "center",
        marginTop: "15%",
    },
    desc: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratSemiBold,
        textAlign: "center",
        marginTop: "10%",
        marginHorizontal: "10%",
    },
    logo: {
        alignSelf: "center",
        marginTop: "20%",
        position: "absolute",
    },
    SearchForm: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
        width: "90%",
        height: 64,
        alignSelf: "center",
        marginTop: "10%",
        fontSize: 18,
        fontFamily: fontFamily.MontserratRegular,
        paddingHorizontal: "5%",
        textAlign: "left"
    },
    Box: {
        width: "90%",
        margin: "auto"
    },
    boxHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10%",
    },
    boxTitle: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratRegular,
        textAlign: "center",
        margin: "5%"
    },
    see_all: {
        alignContent: 'flex-end',
        position: "absolute",
        right: "5%",
    },
    see_all_text: {
        color: colors.Gold,
        fontSize: 16,
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
    },
    swipper: {
        marginLeft: 20,
        borderRadius: 20,
    },

    // tours cards

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
    }
});