import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./Styles";
import { translate } from '../../Localization';

export default function OnBoarding() {

    // get the navigation
    const navigation = useNavigation();    

    // if the font loaded, return the text
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{translate('OnBoarding.title')}</Text>
            <View style={styles.text_box}>
                <Text style={styles.desc}>{translate('OnBoarding.description')}</Text>
            </View>
            <Text style={styles.worry}>{translate('OnBoarding.worrytext')}</Text>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/on_boarding/e.png')}></Image>
            </View>
            <Image style={styles.wolf} source={require('../../assets/on_boarding/EG_by_Onlywolfs.png')}></Image>
            <View style={styles.button_container}>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_in]} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.button_text}>{translate('OnBoarding.signin')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_up]} onPress={() => navigation.navigate('firstPage')}>
                    <Text style={styles.button_text}>{translate('OnBoarding.signup')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


