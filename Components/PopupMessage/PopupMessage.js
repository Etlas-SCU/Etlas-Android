import { styles } from "./Styles";
import { useContext } from "react";
import { Text, Image, Modal, View } from "react-native";
import { UserContext } from "../Context/Context";
import { Warning, Accept, Error } from "./PopUpState";


export default function PopupMessage({ }) {

    // Use the useContext hook to get the state of the popup message
    const { popupMessageVisible, messageState, message } = useContext(UserContext);

    // if not needed in current time
    if(!messageState)
        return null;

    // Create an instance of the Accept, Error and Warning classes
    const states = {
        Accept: new Accept(),
        Error: new Error(),
        Warning: new Warning()
    };

    // Get the icon, title and background color of the popup message
    const popUpState = states[messageState];

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={popupMessageVisible}
        >
            <View style={[styles.container, { backgroundColor: popUpState.backgroundColor }]}>
                <Image source={popUpState.icon} style={styles.icon} />
                <Text style={styles.title}>{popUpState.title}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </Modal>
    );
}