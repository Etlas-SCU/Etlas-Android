import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth, dimensions } from '../../AppStyles'
import { StyleSheet } from 'react-native'


export const CameraDimensions = {
    width: dimensions.fullWidth,
    height: dimensions.fullWidth,
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCamera: {
        flex: 1,
    },
    camera: {
        flex: 1,
        width: responsiveWidth(450),
        height: responsiveHeight(450),
        alignItems: 'center',
        borderRadius: 20,
        resizeMode: 'contain',
        aspectRatio: 1
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
        height: responsiveHeight(241),
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 20,
        resizeMode: 'stretch',
        backgroundColor: colors.Black,
    },
    bottomBar: {
        height: responsiveHeight(241),
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
    },
    loader: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    }
});