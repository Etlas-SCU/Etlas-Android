import { StyleSheet } from "react-native";
import { colors, responsiveHeight, responsiveWidth, isIOS } from "../../AppStyles";


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
        height: responsiveHeight(100 - (isIOS() ? 0 : 20)),
        backgroundColor: colors.SolidGrey,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        verticalAlign: 'middle',
        paddingHorizontal: responsiveWidth(13),
    },
    menuBarIcons: {
        width: responsiveWidth(35),
        height: responsiveHeight(33),
        alignSelf: 'center',
    },
    menuBarIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        verticalAlign: 'middle',
        paddingVertical: responsiveHeight(19)
    },
    rightBorder: {
        borderRightColor: colors.DarkCyan,
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingLeft: responsiveWidth(28.6)
    },
    Scan: {
        alignSelf: "center",
        width: responsiveWidth(70),
        height: responsiveHeight(75),
        backgroundColor: colors.DarkCyan,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        borderColor: colors.SolidGrey,
        borderWidth: responsiveWidth(2),
        marginTop: isIOS() ? responsiveHeight(-50) : responsiveHeight(-80)
    },
    ScanIcon: {
        width: responsiveWidth(48),
        height: responsiveHeight(48),
        alignSelf: "center",
        resizeMode: 'contain'
    },
    line: {
        borderBottomColor: colors.DarkCyan,
        borderBottomWidth: responsiveWidth(3),
        width: responsiveWidth(40),
        marginTop: responsiveHeight(15),
        alignSelf: "center",
    }
})