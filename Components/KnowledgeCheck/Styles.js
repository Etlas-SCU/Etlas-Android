import { StyleSheet } from "react-native";
import { colors, dimensions, fontFamily, normalize } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    contentContainer: {
        paddingBottom: "40%"
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
        fontSize: normalize(18),
        fontFamily: fontFamily.MontserratBold,
        textAlign: "center",
    },
    cards: {
        width: "90%",
        alignSelf: "center",
        marginVertical: "10%",
        marginHorizontal: "5%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    body: {
        height: dimensions.fullHeight / 4.5,
        backgroundColor: colors.Gold,
        alignSelf: "center",
        marginTop: "10%",
        borderRadius: 20,
        flexDirection: "row",
        paddingLeft: 16,
    },
    bodyContent: {
        width: "65%",
        height: "100%",
        justifyContent: 'space-between',
        paddingTop: "2%",
        paddingBottom: "2%",
    },
    bodyTitle: {
        color: colors.White,
        fontSize: normalize(32),
        fontFamily: fontFamily.MontserratBold,
    },
    bodyText: {
        color: colors.White,
        fontSize: normalize(14),
        fontFamily: fontFamily.MontserratLight,
        width: "95%"
    },
    bodyScore: {
        color: colors.White,
        fontSize: normalize(48),
        fontFamily: fontFamily.MontserratBold,
    },
    bodyImage: {
        width: "35%",
        height: "100%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    }
});