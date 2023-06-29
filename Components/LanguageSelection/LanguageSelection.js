import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from '../../Localization';
import { useState } from "react";
import { goBack } from "../../Backend/Navigator";
import { changeLanguage } from "../../Localization";
import SvgMaker from '../../Components/SvgMaker/SvgMaker';
import { InvLeftArrowIcon, CheckIcon } from "../../assets/SVG/Icons";


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


    // languageCode and  textDirection
    const languageSettings = {
        "en": {
            languageCode: 'en',
            textDirection: 'ltr'
        },
        "ar": {
            languageCode: 'ar',
            textDirection: 'rtl'
        },
        "fr": {
            languageCode: 'fr',
            textDirection: 'ltr'
        },
        "sp": {
            languageCode: 'sp',
            textDirection: 'ltr'
        },
    }


    // change the language and set the selecte one
    const change = (key) => {
        changeLanguage(languageSettings[key].languageCode, languageSettings[key].textDirection);
        setSelected(key);
    }


    // create the buttons
    const buttons = Object.keys(languages).map((key, idx) => {
        return (
            <TouchableOpacity key={idx} style={styles.language} onPress={() => { change(key) }} disabled={key != 'en'}>
                <Text style={styles.languageText}>{languages[key]}</Text>
                {key == selected ? <SvgMaker Svg={CheckIcon} style={styles.check} /> : null}
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
                        <SvgMaker Svg={InvLeftArrowIcon} style={styles.close} />
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
