import { StyleSheet } from "react-native";
import { fontFamily, colors, normalize } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        color: colors.Gold,
        fontSize: normalize(50),
        textAlign: 'left',
        marginTop: "20%",
        marginLeft: "5%",
    },
    desc: {
        fontFamily: fontFamily.MontserratMedium,
        color: colors.White,
        fontSize: normalize(20),
        textAlign: 'left',
        marginTop: "10%",
        marginLeft: "5%",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "60%"
    },
    worry: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: normalize(20),
        textAlign: 'left',
        marginTop: "10%",
        marginLeft: "5%",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%"
    },
    logoContainer: {
        alignItems: 'flex-end',
    },
    wolf: {
        flex: 1,
        resizeMode: 'contain',
        marginLeft: "-8%",
        marginBottom: "-8%",
    },
    button_container: {
        flexDirection: "column",
        alignItems: 'center',
        alignItems: "flex-end",
        marginRight: "10%",
        marginTop: "5%",
        gap: 15
    },
    sign_buttons: {
        width: 181,
        height: 57,
        borderRadius: 20,
        backgroundColor: colors.Gold,
        justifyContent: "center",
        alignItems: "center",
    },
    button_text: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: normalize(20),
        textAlign: 'center',
    },
    sign_in: {
        backgroundColor: colors.Gold,
    },
    sign_up: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.Gold,
    },
    bottom_container: {
        flexDirection: "row",   
        justifyContent: 'space-around',
    }
});
