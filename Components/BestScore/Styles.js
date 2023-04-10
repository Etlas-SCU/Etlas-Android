import { StyleSheet } from "react-native";
import { fontFamily, colors } from "../../AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        alignItems: "center",
        marginTop: "15%",
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.DarkCyan,
        fontSize: 18,
        textAlign: 'center',
    },
    ScoreBox: {
        width: "90%",
        height: "40%",
        backgroundColor: colors.DarkCyan,
        alignSelf: "center",
        marginTop: "20%",
        borderRadius: 20,
        
    },
    score: {
        color: colors.White,
        fontSize: 100,
        fontFamily: fontFamily.MontserratBold,
        alignSelf: "center",
        marginTop: "5%",
    },
    scoreTxt: {
        color: colors.White,
        fontSize: 25,
        fontFamily: fontFamily.MontserratMedium,
        alignSelf: "center",
        marginTop: "5%",
    },
    line: {
        borderBottomColor: colors.White,
        borderBottomWidth: 1,
        width: "35%",
        alignSelf: "center",
        marginTop: "8%",
    }, 
    bestScore: {
        color: colors.Gold,
        fontSize: 30,
        fontFamily: fontFamily.MontserratSemiBold,
        alignSelf: "center",
        marginTop: "8%",
    },
    buttonContainer: {
        width: "90%",
        marginTop: "20%",
        alignSelf: "center",
        alignItems: "center"
    },
    ask: {
        color: colors.DarkCyan,
        fontSize: 20,
        fontFamily: fontFamily.MontserratBold,
        marginTop: "5%",
        width: "70%",
        textAlign: "center",
        alignSelf: "center",
    },
    button: {
        backgroundColor: colors.DarkCyan,
        width: 221,
        height: 57,
        alignSelf: "center",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
    },
    buttonText: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratBold,
    },
});