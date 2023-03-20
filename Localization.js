import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import { I18n } from "i18n-js";
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
import en from './assets/locales/en.json'

// make object
const translator = new I18n();

const translationGetters = {
    en: () => require('./assets/locales/en.json'),
};
  

// translate
export const translate = memoize(
    // including missing names
    (key, config) => translator.t(key, config).includes('missing') ? key : translator.t(key, config),
    
    // cache
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

// set the language
export const init = () => {
    const fallback = {languageTag: 'en', isRTL: false};

    const { languageTag, isRTL } = fallback;

    // clear translation cache
    translate.cache.clear();

    // update layout direction
    I18nManager.forceRTL(isRTL);

    // set i18n-js config
    translator.translations = {[languageTag]: translationGetters[languageTag]()};
    translator.locale = languageTag;
};
