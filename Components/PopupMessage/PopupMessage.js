import { styles } from "./Styles";
import { useContext } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { colors } from "../../AppStyles";
import { UserContext } from "../Context/Context";


export default function PopupMessage({ state, message }) {

    // Use the useContext hook to get the state of the popup message
    const { popupMessageVisible, hidePopupMessage } = useContext(UserContext);

    // Use the useNavigation hook to get the navigation object
    const toggleAlert = () => {
        hidePopupMessage();
    };

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
            visible={popupMessageVisible}
            icon={<Image source={Icons[state]} style={styles.icon} />}
            style={styles.container}
            onRequestClose={() => toggleAlert()}
        >
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={() => toggleAlert()} style={[styles.button, { backgroundColor: Button_colors[state] }]}>
                <Text style={styles.buttonText}>{ButtonText[state]}</Text>
            </TouchableOpacity>
        </FancyAlert>
    );
}