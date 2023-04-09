import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    header: {
        flexDirection: "row",
        marginTop: 61,
        paddingLeft: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    aboutus: {
        position: "absolute",
        alignContent: 'flex-start',
        left: 24,
    },
    title: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratBold,
    },
    body: {
        width: "90%",
        height: "20%",
        backgroundColor: colors.Gold,
        alignSelf: "center",
        marginTop: "10%",
        borderRadius: 20,
        flexDirection: "row",
        paddingLeft: 16,
    },
    bodyContent: {
        width: "60%",
        height: "100%",
        justifyContent: 'space-between',
        paddingTop: "2%",
        paddingBottom: "2%",
    },
    bodyTitle: {
        color: colors.White,
        fontSize: 30,
        fontFamily: fontFamily.MontserratBold,
    },
    bodyText: {
        color: colors.White,
        fontSize: 13,
        fontFamily: fontFamily.MontserratRegular,
    },
    bodyScore: {
        color: colors.White,
        fontSize: 48,
        fontFamily: fontFamily.MontserratBold,
    },
    bodyImage: {
        width: "40%",
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