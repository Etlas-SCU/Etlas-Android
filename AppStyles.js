import { StyleSheet, Dimensions } from "react-native";

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
