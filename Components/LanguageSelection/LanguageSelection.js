import { Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import Swiper from 'react-native-swiper'
import { styles } from "./Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../../Localization'

export default function LanguageSelection({ navigation }) {

    const storeLanguageChoice = async (language) => {
        try {
            await AsyncStorage.setItem('language', language);
        } catch (error) {
            console.log(error);
        }
    };

    // to store the language and move to the next slides
    const handleLanguage = () => {
        storeLanguageChoice('English');
        navigation.navigate('onBoarding');
    }

    // if the font loaded, return the text
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/language_selection/Language_Selection.png')} style={styles.image}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.header}>{translate('LanguageSelection.title')}</Text>
                <View style={styles.text_box}>
                    <Text style={styles.desc}>{translate('LanguageSelection.description')}</Text>
                </View>
                <View style={styles.Swipper}>
                    <ScrollView
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.swiper_container}
                        nestedScrollEnabled={true}
                    >
                        <TouchableOpacity style={[styles.language_active, styles.buttons]}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.english')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.arabic')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.spanish')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.french')}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[styles.continue, styles.buttons]} onPress={handleLanguage}>
                        <Text style={styles.button_text}>{translate('LanguageSelection.continue')}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
