import { StyleSheet, Dimensions, PixelRatio, Platform } from "react-native";
import * as Device from 'expo-device';


// styles in app.js
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// dimesnions of the mobile
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
    fontScale: Dimensions.get("window").fontScale
}


// get the dimensions of the screen
export const UI_dimensions = {
    heightMobileUI: 932,
    widthMobileUI: 430
}


// get the responsive font size
export const responsiveFontSize = size => {
    return Math.floor(PixelRatio.roundToNearestPixel(size / dimensions.fontScale));
};


// get factor Scale for width and height
export const BaseScale = {
    widthScale: dimensions.fullWidth / UI_dimensions.widthMobileUI,
    heightScale: dimensions.fullHeight / UI_dimensions.heightMobileUI
}


// get the responsive width
export const responsiveWidth = width => {
    return Math.round(PixelRatio.roundToNearestPixel(width * BaseScale.widthScale));
};


// get the responsive height
export const responsiveHeight = height => {
    return Math.round(PixelRatio.roundToNearestPixel(height * BaseScale.heightScale));
};


// check if it's iphone
export const isIOS = () => {
    return Platform.OS === 'ios';
};

// detect IOS Version
export const hasNotch = (version) => {
    const modelName = Device.modelName;
    const ex_notch = [
        'iPhone 7',
        'iPhone 7 Plus',
        'iPhone 8',
        'iPhone 8 Plus',
        'iPhone SE',
        'iPhone 6',
        'iPhone 6 Plus',
        'iPhone 6s',
        'iPhone 6s Plus',
        'iPhone 5',
        'iPhone 5s',
        'iPhone 5c',
        'iPhone 4s',
        'iPhone 4',
        'iPhone 3G',
        'iPhone 3GS',
        'iPhone 1G',
    ];
    return isIOS() && !ex_notch.includes(modelName);
};


// colors used in the app
export const colors = {
    Gold: '#BF8148',
    White: '#FFFFFF',
    Moka: '#EBE8E8',
    Black: '#000000',
    DarkCyan: '#003441',
    Cyan: '#55C4E0',
    LightSeaGreen: '#1B7B94',
    Grey: '#ABAAAA',
    SolidGrey: '#D9D9D9',
    LightGrey: '#B5B5B5',
    DarkGrey: '#606060',
    Red: '#e24c4b',
    DarkRed: '#A41350',
    Green: '#0aa06e',
    Blue: '#0000FF',
    Yellow: '#fe9800',
    Orange: '#ff6a00',
    Purple: '#800080',
    Pink: '#FFC0CB',
    Brown: '#A52A2A',
    DarkBlue: '#00008B',
    DarkGreen: '#006400',
    NavyRed: '#410000',
    NavyYellow: '#412300',
    NavyGreen: '#014000',
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
    MontserratBlack: 'Montserrat-Black',
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

// convert date
export const formatDate = (inputDate) => {
    // get first part of timestamp
    inputDate = inputDate.split('T')[0];

    // Split the input date string into year, month, and day
    const [year, month, day] = inputDate.split('-');

    // Create a Date object using the year, month, and day
    const dateObject = new Date(year, month - 1, day);

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the day, month name, and year from the date object
    const formattedDay = dateObject.getDate();
    const formattedMonth = monthNames[dateObject.getMonth()];
    const formattedYear = dateObject.getFullYear();

    // Concatenate the formatted day, month name, and year
    const formattedDate = `${formattedDay} ${formattedMonth} ${formattedYear}`;

    return formattedDate;
}

// format historic date
export const formatHistoricDate = (country, date) => {
    const formatDate = `${date} | ${country}`;
    return formatDate;
}

// placeholder
export const placeholder = require('./assets/Images/placeholder.png');