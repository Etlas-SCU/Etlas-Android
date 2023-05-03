import { StyleSheet } from "react-native";
import { fontFamily, colors, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
        Width: "2rem"
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        color: colors.Gold,
        fontSize: 50,
        textAlign: 'left',
        marginTop: 102,
        marginLeft: 24,
    },
    desc: {
        fontFamily: fontFamily.MontserratMedium,
        color: colors.White,
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 284
    },
    worry: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 287
    },
    logoContainer: {
        alignItems: 'flex-end',
    },
    wolf: {
        flex: 1,
        width: "55%",
        height: "65%",
        resizeMode: 'contain',
        position: 'absolute',
        bottom: "-15%",
        marginLeft: "-1%",
        marginTop: 30
    },
    button_container: {
        flexDirection: "column",
        justifyContent: "space-between",
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
        fontSize: 20,
        textAlign: 'center',
    },
    sign_in: {
        backgroundColor: colors.Gold,
    },
    sign_up: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.Gold,
    }
});
