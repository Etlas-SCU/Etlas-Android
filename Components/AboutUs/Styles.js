import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        height: "100%",
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: 2,
        alignSelf: "center",
        marginTop: "5%",
        width: "40%",
    },
    copyright: {
        marginTop: "90%",
        alignSelf: "center",
        color: colors.White,
        fontSize: 13,
        fontFamily: fontFamily.MontserratRegular,
    },
    description: {
        marginTop: "10%",
        alignSelf: "center",
        textAlign: "center",
        color: colors.White,
        fontSize: 15,
        fontFamily: fontFamily.MontserratRegular,
        width: "80%"
    },
    usingAppicons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        alignSelf: "center",
        marginTop: "-8%",
        zIndex: 9999,
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
        alignSelf: 'flex-end',
        right: 24,
        top: 40,
    },
    contactus: {
        borderColor: colors.White,
        borderWidth: 2,
        borderRadius: 20,
        width: "80%",
        alignSelf: "center",
        marginTop: "15%",
        paddingBottom: "50%",
    },
    icon: {
        backgroundColor: colors.DarkCyan,
    },
    IconButton: {
        backgroundColor: colors.DarkCyan,
        paddingHorizontal: 8,
        alignContent: "center",
        justifyContent: "center",
    }
});