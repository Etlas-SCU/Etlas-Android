import { styles } from "./Styles";
import { useContext } from "react";
import { Text, Image, Modal, View } from "react-native";
import { colors } from "../../AppStyles";
import { UserContext } from "../Context/Context";


export default function PopupMessage({ }) {

    // Use the useContext hook to get the state of the popup message
    const { popupMessageVisible, messageState, message } = useContext(UserContext);

    // Define the icons to be used in the alert and their corresponding image paths
    const Icons = {
        Accept: require('../../assets/PopupMessage/Accept.png'),
        Error: require('../../assets/PopupMessage/Error.png'),
        Warning: require('../../assets/PopupMessage/Warning.png'),
    }

    // Define the colors to be used for the different types of buttons
    const bgColors = {
        Accept: colors.NavyGreen,
        Error: colors.NavyRed,
        Warning: colors.NavyYellow,
    }

    // Define the text to be displayed on the buttons for the different types of alerts
    const TitleText = {
        Accept: 'Done!',
        Error: 'Oops!',
        Warning: 'Hmmm!'
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={popupMessageVisible}
        >
            <View style={[styles.container, { backgroundColor: bgColors[messageState] }]}>
                <Image source={Icons[messageState]} style={styles.icon} />
                <Text style={styles.title}>{TitleText[messageState]}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </Modal>
    );
}