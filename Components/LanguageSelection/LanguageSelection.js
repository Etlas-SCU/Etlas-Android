import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from '../../Localization';
import { useState } from "react";
import { goBack } from "../../Backend/Navigator";


export default function LanguageSelection({ }) {

    // state for the selected language
    const [selected, setSelected] = useState('en');

    // languages
    const languages = {
        "en": translate('LanguageSelection.english'),
        "ar": translate('LanguageSelection.arabic'),
        "fr": translate('LanguageSelection.french'),
        "sp": translate('LanguageSelection.spanish'),
    }

    // create the buttons
    const buttons = Object.keys(languages).map((key, idx) => {
        return (
            <TouchableOpacity key={idx} style={styles.language} onPress={() => { setSelected(key) }} disabled={key != 'en'}>
                <Text style={styles.languageText}>{languages[key]}</Text>
                {key == selected ? <Image source={require('../../assets/language_selection/check.png')} style={styles.check} /> : null}
            </TouchableOpacity>
        )
    });

    // if the font loaded, return the text
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('LanguageSelection.title')}</Text>
                    <TouchableOpacity 
                        onPress={goBack} 
                        style={styles.closeContainer}
                    >
                        <Image source={require('../../assets/Profile/Arr.png')} style={styles.close}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.chooseBar}>{translate('LanguageSelection.choose')}</Text>
                <View style={styles.languages}>
                    {buttons}
                </View>
            </ScrollView>
        </View>
    );
}
