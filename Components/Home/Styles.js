import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: "30%"
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
    },
    boxHeader: {
        flexDirection: "row",
        alignItems: "center",
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
        flex: 1,
        marginLeft: 20,
        borderRadius: 20,
    },
});