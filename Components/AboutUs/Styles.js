import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    copyright: {
        marginTop: "98%",
        alignSelf: "center",
        color: colors.White,
        fontSize: 13,
        fontFamily: fontFamily.MontserratRegular,
    },
    description: {
        marginTop: "15%",
        alignSelf: "center",
        textAlign: "center",
        color: colors.White,
        fontSize: 15,
        fontFamily: fontFamily.MontserratRegular,
        width: 315
    },
    usingAppicons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 250,
        alignSelf: "center",
        marginTop: "8%"
    },
    findus: {
        marginTop: "5%",
        alignSelf: "center",
        color: colors.White,
        fontSize: 15,
        fontFamily: fontFamily.MontserratRegular,
    },
    close: {
        position: "absolute",
        marginTop: 53,
        alignSelf: 'flex-end',
        right: 24,
    }
});