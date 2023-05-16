import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import OnBoarding from "./Components/OnBoarding/OnBoarding";
import { FirstPage } from './Components/Register/FirstPage';
import { SecondPage } from './Components/Register/SecondPage'
import Login from './Components/Login/Login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { init } from './Localization';
import { Easing, AppRegistry } from 'react-native';
import { UserProvider } from './Components/Context/Context';
import MenuBar from './Components/MenuBar/MenuBar';
import ForgotPasswordFirst from './Components/ForgetPassword/ForgetPasswordFirst';
import ForgotPasswordSecond from './Components/ForgetPassword/ForgetPasswordSecond';
import ForgotPasswordThird from './Components/ForgetPassword/ForgetPasswordThird';
import BestScore from './Components/BestScore/BestScore';
import EditProfile from './Components/EditProfile/EditProfile';
import { StatusBar } from 'expo-status-bar';
import Favourites from './Components/Favourites/Favourites';
import FavMonumentsPage from './Components/FavouritePage/FavMonumentsPage';
import FavArticlesPage from './Components/FavouritePage/FavArticlesPage';

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
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    });

    // clear the storage
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
        <UserProvider>
            <StatusBar 
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    header: () => null,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: timingConfig,
                        close: timingConfig,
                    },
                    headerStatusBarHeight: 0
                }}
                >
                    <Stack.Screen name="onBoarding" component={OnBoarding} />
                    <Stack.Screen name="firstPage" component={FirstPage} />
                    <Stack.Screen name="secondPage" component={SecondPage} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="menuBar" component={MenuBar} />
                    <Stack.Screen name="forgotPasswordFirst" component={ForgotPasswordFirst} />
                    <Stack.Screen name="forgotPasswordSecond" component={ForgotPasswordSecond} />
                    <Stack.Screen name="forgotPasswordThird" component={ForgotPasswordThird} />
                    <Stack.Screen name="bestScore" component={BestScore} />
                    <Stack.Screen name="editProfile" component={EditProfile} />
                    <Stack.Screen name="favourites" component={Favourites} />
                    <Stack.Screen name="favMonumentsPage" component={FavMonumentsPage} />
                    <Stack.Screen name="favArticlesPage" component={FavArticlesPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

AppRegistry.registerComponent('App', () => App);