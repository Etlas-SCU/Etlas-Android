import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import { I18n } from "i18n-js";
import { I18nManager } from 'react-native';
import { getLocales } from 'expo-localization';


// make object
const translator = new I18n();

// to ge the tranlation
const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('./assets/locales/en.json'), 
};


// translate is helper function to get the word with the current language
export const translate = memoize(
    // including missing names
    (key, config) => translator.t(key, config).includes('missing') ? key : translator.t(key, config),

    // cache
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

// set the language
export const init = () => {
    // set the default language if the default language of the device isn't exist
    const fallback = { languageCode: 'en', textDirection: 'ltr' };

    // check if the text direction is RTL
    const isRTL = (textDirection) => {
        return textDirection === 'rtl';
    };

    // default language
    let { languageCode, textDirection } = getLocales()[0] || fallback;

    // check if the language exist
    if(!translationGetters[languageCode]){
        // set the default language
        languageCode = fallback.languageCode;
        textDirection = fallback.textDirection;
    }

    // clear translation cache
    translate.cache.clear();

    // update layout direction
    I18nManager.forceRTL(isRTL(textDirection));
    I18nManager.allowRTL(isRTL(textDirection));

    
    // set i18n-js config
    translator.translations = { 
        [languageCode]: translationGetters[languageCode](),
    };
    translator.locale = languageCode;
};