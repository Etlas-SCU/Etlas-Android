import { StyleSheet } from "react-native";
import { colors, fontFamily, normalize } from "../../AppStyles";

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
        fontSize: normalize(20),
        marginBottom: "5%",
        fontWeight: "bold"
    },
    txt: {
        color: colors.White,
        fontFamily: fontFamily.MontserratRegular,
        fontSize: normalize(18),
        marginBottom: "15%",
        width: "80%",
        textAlign: "center"
    },
    dotsWrapper: {
        width: "45%",
    },
});