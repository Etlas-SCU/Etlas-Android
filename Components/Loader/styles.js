import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        height: "25%",
        backgroundColor: colors.DarkCyan,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: "35%",
        left: "10%",
        borderRadius: 30,
        borderColor: colors.White,
        borderWidth: 2
    },
    wait: {
        color: colors.White,
        fontFamily: fontFamily.MontserratBold,
        fontSize: 20,
        marginBottom: "5%",
        fontWeight: "bold"
    },
    txt: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: 18,
        marginBottom: "15%",
        width: "80%",
        textAlign: "center"
    },
    dotsWrapper: {
        width: "45%",
    },
});