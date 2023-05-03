import { StyleSheet } from "react-native";
import { colors } from "../../AppStyles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.SolidGrey,
        borderRadius: 20,
    },
    barContainer: {
        flexDirection: "row"
    },
    menuBar: {
        height: "11%",
        backgroundColor: colors.SolidGrey,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        verticalAlign: 'center',
        elevation: 0,
        paddingHorizontal: "5%"
    },
    menuBarIcons: {
        width: 35,
        height: 32,
    },
    menuBarIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        verticalAlign: 'center',
    },
    rightBorder: {
        borderRightColor: colors.DarkCyan,
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingLeft: "25%"
    },
    Scan: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
    },
    ScanIcon: {
        width: 72,
        height: 72,
    },
    line: {
        borderBottomColor: colors.DarkCyan,
        borderBottomWidth: 2,
        width: "100%",
        marginTop: 8,
        alignSelf: "center",
    }
})