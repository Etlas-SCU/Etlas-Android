import { colors, dimensions, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../AppStyles";
import { StyleSheet, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan,
        paddingTop: StatusBar.currentHeight
    },
    image: {
        width: responsiveWidth(100),
        height: responsiveHeight(255),
        resizeMode: 'contain',
    },
    UpperBox: {
        flexGrow: 1,
        width: dimensions.fullWidth,
        height: responsiveHeight(450),
        backgroundColor: colors.DarkCyan,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -999
    },
    TitleConainer: {
        gap: responsiveHeight(17)
    },
    title: {
        fontFamily: fontFamily.CapitalisTypOasis,
        fontSize: responsiveFontSize(32),
        color: colors.Gold,
        textAlign: 'center',
    },
    close: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        position: 'absolute',
        right: responsiveWidth(24),
        top: responsiveHeight(0),
        zIndex: 999,
    },
    arrow: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        zIndex: 999,
        tintColor: colors.White
    },
    description: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(18),
        color: colors.White,
        textAlign: 'center',
    },
    LowerBox: {
        flexGrow: 1,
        width: dimensions.fullWidth,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.White,
        marginTop: responsiveHeight(44),
        height: dimensions.fullHeight - responsiveHeight(450)
    },
    line: {
        width: responsiveWidth(209),
        height: responsiveHeight(4),
        backgroundColor: colors.Gold,
        marginTop: responsiveHeight(-17)
    },
    iconConainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(-32),
        gap: responsiveWidth(7),
        marginHorizontal: responsiveWidth(32)
    },
    FavContainer: {
        width: responsiveWidth(64),
        height: responsiveHeight(64),
        borderRadius: 20,
        backgroundColor: colors.DarkRed,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SoundContainer: {
        width: responsiveWidth(64),
        height: responsiveHeight(64),
        borderRadius: 20,
        backgroundColor: colors.Gold,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: responsiveWidth(40),
        height: responsiveHeight(35),
        resizeMode: 'contain',
    },
    descriptionContainer: {
        width: dimensions.fullWidth,
        marginTop: responsiveHeight(28),
    },
    fulldescription: {
        fontFamily: fontFamily.MontserratMedium,
        fontSize: responsiveFontSize(18),
        color: colors.Black,
        marginHorizontal: responsiveWidth(24),
    },
    scrollContainer: {
        paddingBottom: responsiveHeight(200)
    },
});