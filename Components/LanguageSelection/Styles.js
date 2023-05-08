import { StyleSheet } from "react-native";
import { fontFamily, colors, fontWeight, dimensions } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: "35%",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: fontFamily.CapitalisTypOasis,
        color: colors.Gold,
        fontSize: (dimensions.fullHeight / dimensions.fullWidth) * 20,
        textAlign: 'left',
        marginTop: "25%",
        marginLeft: "5%",
    },
    desc: {
        fontFamily: fontFamily.MontserratMedium,
        color: colors.White,
        fontSize: (dimensions.fullHeight / dimensions.fullWidth) * 9,
        textAlign: 'left',
        marginTop: "10%",
        marginLeft: "5%",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%",
        marginBottom: "5%"
    },
    worry: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: 20,
        textAlign: 'left',
        marginTop: "10%",
        marginLeft: "5%",
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
        paddingTop: 10,
    },
    Swipper: {
        width: "100%",
        height: "30%",
    },
    buttons: {
        width: "80%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 57,
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
    swiper_container: {
        marginBottom: "10%",
        alignSelf: "center",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: "20%",
        gap: 20,
        paddingBottom: "50%"
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
