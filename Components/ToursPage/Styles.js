import { colors, fontFamily } from "../../AppStyles";
import { StyleSheet } from "react-native";

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
        marginTop: "12%",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    },
    title: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fontFamily.MontserratBold,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "5%",
        marginTop: "10%",
    },
    SearchForm: {
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
        width: "75%",
        height: 64,
        alignSelf: "center",
        fontSize: 18,
        fontFamily: fontFamily.MontserratRegular,
        paddingHorizontal: "5%",
        textAlign: "left"
    },
    filter: {
        alignSelf: "center",
    },
    Box: {
        marginTop: "10%",
        alignItems: "center",
        gap: 20        
    },
});