import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import Swiper from 'react-native-swiper'
import { styles } from "./Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
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
            <ImageBackground source={require('../../assets/language_selection/Language_Selection.png')} resizeMode='cover' style={styles.image}>
                <Text style={styles.header}>{translate('LanguageSelection.title')}</Text>
                <View style={styles.text_box}>
                    <Text style={styles.desc}>{translate('LanguageSelection.description')}</Text>
                </View>
                <Swiper style={styles.wrapper}
                    showsButtons={true}
                    horizontal={false}
                    buttonWrapperStyle={styles.arrows}
                    nextButton={<Image source={require('../../assets/language_selection/material-symbols_keyboard-arrow-down.png')} />}
                    prevButton={<Image source={require('../../assets/language_selection/material-symbols_keyboard-arrow-up.png')} />}
                    showsPagination={false}
                    containerStyle={styles.swipper}
                    bounces={true}
                >
                    <View style={styles.slide1}>
                        <TouchableOpacity style={[styles.language_active, styles.buttons]}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.english')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide2}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.arabic')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide3}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.spanish')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide4}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>{translate('LanguageSelection.french')}</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[styles.continue, styles.buttons]} onPress={handleLanguage}>
                        <Text style={styles.button_text}>{translate('LanguageSelection.continue')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
