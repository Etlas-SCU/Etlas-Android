import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from '../../AppStyles'
import { StyleSheet } from 'react-native'


export const CameraDimensions = {
    width: dimensions.fullWidth,
    height: dimensions.fullWidth * 16 / 9,
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: CameraDimensions.width,
        height: CameraDimensions.height,
        alignItems: 'center',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: colors.Cyan,
        borderRadius: 100,
        borderColor: colors.DarkCyan,
        borderWidth: responsiveWidth(5),
        height: 85.55,
        width: 85.4,
        marginTop: responsiveHeight(-20),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        height: responsiveHeight(120),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: dimensions.fullWidth,
        top: 0,
        alignItems: 'stretch',
        paddingTop: responsiveHeight(65),
        paddingHorizontal: responsiveWidth(24),
        backgroundColor: colors.Black,
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        color: colors.White,
        fontSize: responsiveFontSize(13),
        textAlign: 'center',
    },
    imageCap: {
        flex: 1,
        width: CameraDimensions.width,
        height: CameraDimensions.height,
        alignItems: 'center',
        borderRadius: 20,
        resizeMode: 'contain',
        backgroundColor: colors.Black,
    },
    bottomBar: {
        height: responsiveHeight(150),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: dimensions.fullWidth,
        paddingHorizontal: responsiveWidth(24),
        backgroundColor: colors.Black,
        verticalAlign: "middle",
        alignItems: 'center',
    },
    icon: {
        color: colors.White,
        textAlign: 'center',
    },
    buttonTxt: {
        color: colors.White,
        textAlign: 'center',
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(13),
    },
    flash: {
        textAlign: 'center',
    },
    absolute: {
        position: 'absolute',
    }
});