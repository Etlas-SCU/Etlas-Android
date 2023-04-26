import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import OnBoarding from "./Components/OnBoarding/OnBoarding";
import LanguageSelection from './Components/LanguageSelection/LanguageSelection'
import { FirstPage } from './Components/Register/FirstPage';
import { SecondPage } from './Components/Register/SecondPage'
import Login from './Components/Login/Login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { init } from './Localization';
import { Easing } from 'react-native';
import MenuBar from './Components/MenuBar/MenuBar';
import CameraScreen from './Components/CameraScreen/CameraScreen';

// import the screen
const Stack = createStackNavigator();

export default function App() {

    // initialize the language
    init();

    // Retrieve onboarding status from local storage
    const [language, setLanguage] = useState('None');

    // Retrieve language choice from local storage
    const getLanguageChoice = async () => {
        try {
            const getLang = await AsyncStorage.getItem('language');
            if (getLang !== null)
                setLanguage(getLang);
        } catch (error) {
            console.log(error);
        }
    };

    // get the language choice
    useEffect(() => {
        getLanguageChoice();
    }, []);

    // get the font from the local fonts
    let [fontsLoaded] = useFonts({
        'CapitalisTypOasis': require('./assets/fonts/CapitalisTypOasis.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });

    // // clear the storage
    // const clearAsyncStorage = async() => {
    //     AsyncStorage.clear();
    // }    
    // clearAsyncStorage();

    // if the font not loaded don't appear anything
    if (!fontsLoaded)
        return null


    // animation config
    const timingConfig = {
        animation: 'timing',
        config: {
            duration: 500,
            easing: Easing.linear,
        },
    };

    // if the font loaded, return the components
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: () => null,
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                    open: timingConfig,
                    close: timingConfig,
                },
            }}
            >
                {language !== 'None' ? null : <Stack.Screen name="languageSelection" component={LanguageSelection} />}
                <Stack.Screen name="onBoarding" component={OnBoarding} />
                <Stack.Screen name="firstPage" component={FirstPage} />
                <Stack.Screen name="secondPage" component={SecondPage} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="menuBar" component={MenuBar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

