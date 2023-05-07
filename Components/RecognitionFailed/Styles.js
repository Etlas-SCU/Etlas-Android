import { StyleSheet } from "react-native";
import { colors, fontFamily, normalize } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    scrollContainer: {
        paddingBottom: "30%"
    },
    aboutus: {
        position: "absolute",
        alignContent: 'flex-start',
        marginTop: "15%",
        left: "5%",
    },
    body: {
        marginTop: "30%",
        flex: 1
    },
    sad: {
        alignSelf: "center",
        marginBottom: "10%",
    },
    title: {
        color: colors.White,
        fontSize: normalize(24),
        fontFamily: fontFamily.MontserratBold,
        alignSelf: "center",
        textAlign: "center",
        marginBottom: "5%",
    },
    text: {
        color: colors.White,
        fontSize: normalize(15),
        fontFamily: fontFamily.MontserratRegular,
        alignSelf: "center",
        textAlign: "center",
        width: "60%",
    },
    button: {
        backgroundColor: colors.Gold,
        width: 285,
        height: 57,
        alignSelf: "center",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
    },
    button_text: {
        color: colors.White,
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratBold,
    },
});