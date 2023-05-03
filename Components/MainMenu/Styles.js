import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: 358,
        height: 506,
        alignSelf: "center",
        borderRadius: 20,
        top: (dimensions.fullHeight - (506 + dimensions.fullHeight * 11 / 100)) / 2
    },
    background: {
        flex: 1,
        resizeMode: 'repeat',
    },
    close: {
        alignSelf: "flex-end",
        marginTop: "10%",
        marginRight: "10%",
    },
    title: {
        color: colors.DarkCyan,
        fontSize: 32,
        fontFamily: fontFamily.CapitalisTypOasis,
        textAlign: "center",
        marginTop: "10%",
    },
    line: {
        width: "30%",
        height: 2,
        backgroundColor: colors.DarkCyan,
        marginTop: "5%",
        alignSelf: "center",
    },
    buttons: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "10%",
        gap: 15
    },
    button: {
        borderRadius: 20,
        borderColor: colors.DarkCyan,
        borderWidth: 2,
        width: 217,
        height: 57,
        alignSelf: "center",
        justifyContent: "center",
    },
    button_text: {
        color: colors.DarkCyan,
        fontSize: 20,
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
        verticalAlign: "middle"
    },
    copyright: {
        color: colors.DarkCyan,
        fontSize: 16,
        fontFamily: fontFamily.PoppinsRegular,
        textAlign: "center",
        marginTop: "20%",
    },
});