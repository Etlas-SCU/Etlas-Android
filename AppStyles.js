import { StyleSheet, Dimensions, PixelRatio, Platform } from "react-native";

// styles in app.js
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// dimesnions of the mobile
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

// normalize font size
export const normalize = (size) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const fontSize = getFontSize(size);
    return Math.round(PixelRatio.roundToNearestPixel(fontSize));
};


// get the dimensions of the screen
const heightMobileUI = 932;
const widthMobileUI = 430;

// get the responsive width
export const responsiveWidth = width => {
    return (dimensions.fullWidth * width) / widthMobileUI;
};
  
// get the responsive height
export const responsiveHeight = height => {
    return (dimensions.fullHeight * height) / heightMobileUI;
};
  

// check if it's iphone
export const isIOS = () => {
    return Platform.OS === 'ios';
};

// colors used in the app
export const colors = {
    Gold: '#BF8148',
    White: '#FFFFFF',
    Black: '#000000',
    DarkCyan: '#003441',
    Cyan: '#55C4E0',
    LightSeaGreen: '#1B7B94',
    Grey: '#ABAAAA',
    SolidGrey: '#D9D9D9',
    LightGrey: '#B5B5B5',
    DarkGrey: '#606060',
    Red: '#e24c4b',
    Green: '#0aa06e',
    Blue: '#0000FF',
    Yellow: '#fe9800',
}

// padding used in the app
export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 60,
    xxxl: 80,
    xxxxl: 100,
    xxxxxl: 120,
    xxxxxxl: 140
}


// margin used in the app
export const margin = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 60,
    xxxl: 80,
    xxxxl: 100,
    xxxxxl: 120,
    xxxxxxl: 140
}

// font family used in the app
export const fontFamily = {
    CapitalisTypOasis: 'CapitalisTypOasis',
    MontserratBold: 'Montserrat-Bold',
    MontserratMedium: 'Montserrat-Medium',
    MontserratRegular: 'Montserrat-Regular',
    MontserratSemiBold: 'Montserrat-SemiBold',
    MontserratThin: 'Montserrat-Thin',
    MontserratLight: 'Montserrat-Light',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsBold: 'Poppins-Bold',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsThin: 'Poppins-Thin',
    PoppinsLight: 'Poppins-Light',
    PoppinsExtraLight: 'Poppins-Black', 
}

// font weight used in the app
export const fontWeight = {
    normal: 'normal',
    thin: '100',
    light: '300',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
}
