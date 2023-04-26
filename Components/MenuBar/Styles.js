import { StyleSheet } from "react-native";
import { colors } from "../../AppStyles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
    },
    menuBar: {
        height: "10%",
        backgroundColor: colors.SolidGrey,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        verticalAlign: 'center',
        elevation: 0
    },
    menuBarIcons: {
        width: 35,
        height: 32,
    },
    menuBarIconsContainer: {
        flexDirection: 'row',
        width: "70%",
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'center',
    },
    rightBorder: {
        borderRightColor: colors.DarkCyan,
        borderRightWidth: StyleSheet.hairlineWidth,
    },
    Scan: {
        position: "absolute",
        alignSelf: "center",
        width: "100%",
        height: "100%",
    },
    ScanIcon: {
        width: 72,
        height: 72,
    },
})