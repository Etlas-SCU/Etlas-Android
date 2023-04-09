import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        height: "25%",
        backgroundColor: colors.White,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: "35%",
        left: "10%",
        borderRadius: 30,
    },
    icon: {
        flex:1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
        borderRadius: 50,
        width: '100%',
    },
    message: {
        color: colors.DarkCyan,
        fontSize: 15,
        marginBottom: "10%",
        fontFamily: fontFamily.MontserratSemiBold,
        width: "80%",
        textAlign: "center",
    },
    button: {
        borderRadius: 20,
        width: "95%",
        height: 40,
        marginBottom: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: colors.White,
        fontSize: 15,
        fontFamily: fontFamily.MontserratSemiBold,
    },
});