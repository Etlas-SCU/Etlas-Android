import { styles } from "./Styles";
import React, { useState, useCallback } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { colors } from "../../AppStyles";


export default function PopupMessage({ state, message, pageNanme, navigation }){

    // Use the useState hook to manage the visibility state of the alert
    const [visible, setVisible] = useState(true);

    // Use the useCallback hook to optimize performance by memoizing the function
    // and preventing unnecessary re-renders
    const toggleAlert = useCallback(() => {
        setVisible(!visible);
        navigation.navigate({name: pageNanme});
    }, [visible]);

    // Define the icons to be used in the alert and their corresponding image paths
    const Icons = {
        Accept: require('../../assets/PopupMessage/Accept.png'),
        Error: require('../../assets/PopupMessage/Error.png'),
        Warning: require('../../assets/PopupMessage/Warning.png'),
    }

    // Define the colors to be used for the different types of buttons
    const Button_colors = {
        Accept: colors.Green,
        Error: colors.Red,
        Warning: colors.Yellow,
    }

    // Define the text to be displayed on the buttons for the different types of alerts
    const ButtonText = {
        Accept: 'Great',
        Error: 'Ok',
        Warning: 'Ok'
    }

    return (
        <FancyAlert
            visible={visible}
            icon={<Image source={Icons[state]} style={styles.icon}/>}
            style={styles.container}
        >
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={() => toggleAlert()} style={[styles.button, {backgroundColor: Button_colors[state]}]}>
                <Text style={styles.buttonText}>{ButtonText[state]}</Text>
            </TouchableOpacity>
        </FancyAlert>
    );
}