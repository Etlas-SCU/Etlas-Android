import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

export default function OnBoarding() {

    // if the font loaded, return the text
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Etlas</Text>
            <View style={styles.text_box}>
                <Text style={styles.desc}>Is an augmented reality application that helps people to recognize monuments during their tour in anywhere in  the world by only a scan using your mobile camera.</Text>
            </View>
            <Text style={styles.worry}>No worries, your tour guide is here ;)</Text>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/on_boarding/e.png')}></Image>
            </View>
            <Image style={styles.wolf} source={require('../../assets/on_boarding/EG_by_Onlywolfs.png')}></Image>
            <View style={styles.button_container}>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_in]}>
                    <Text style={styles.button_text}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_up]}>
                    <Text style={styles.button_text}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


