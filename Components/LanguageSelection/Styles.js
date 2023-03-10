import { StyleSheet } from "react-native";
import { fontFamily, colors, fontWeight } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
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
        width: 284,
        marginBottom: 20
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
        alignItems: "center",
        gap: 15,
        paddingTop: 10
    },
    buttons: {
        width: 285,
        height: 57,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    continue: {
        backgroundColor: colors.Gold,
    },
    language_active: {
        backgroundColor: colors.LightSeaGreen,
    },
    language_not_active: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.LightSeaGreen,
    },
    button_text: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: 20,
        textAlign: 'center',
    },
    swipper: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.White,
        fontSize: 30,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.MontserratBold,
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    arrows: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: colors.White,
        verticalAlign: 'middle',
    }
});
